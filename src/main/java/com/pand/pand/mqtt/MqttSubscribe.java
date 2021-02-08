package com.pand.pand.mqtt;

import cn.hutool.core.date.DatePattern;
import cn.hutool.core.date.LocalDateTimeUtil;
import cn.hutool.core.util.ObjectUtil;
import cn.hutool.core.util.StrUtil;
import cn.hutool.json.JSONObject;
import cn.hutool.json.JSONUtil;
import com.pand.pand.config.MqttTemplate;
import com.pand.pand.dict.DataModels;
import com.pand.pand.dict.DataObjectMap;
import com.pand.pand.entity.dto.DataModelDto;
import com.pand.pand.entity.dto.DataObjectDto;
import com.pand.pand.entity.po.DevicePo;
import com.pand.pand.entity.po.HstEvtPo;
import com.pand.pand.service.IDeviceService;
import com.pand.pand.service.IHstEvtService;
import lombok.extern.slf4j.Slf4j;
import org.eclipse.paho.client.mqttv3.IMqttDeliveryToken;
import org.eclipse.paho.client.mqttv3.MqttCallback;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.eclipse.paho.client.mqttv3.MqttMessage;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

import javax.annotation.PostConstruct;
import java.time.LocalDateTime;
import java.util.*;

/**
 * @author : Alvin
 * @className : MqttListener
 * @package: net.izd.access.video.live.config
 * @description :
 * @date : 2019/12/18 14:58
 */
@Configuration
@Slf4j
public class MqttSubscribe implements MqttCallback {

    @Value("${mqtt.topic.subscribe}")
    private String subscribeTopic;

    private final MqttTemplate mqttTemplate;
    private final IDeviceService iDeviceService;

    private final IHstEvtService iHstEvtService;

    public MqttSubscribe(MqttTemplate mqttTemplate, IDeviceService iDeviceService, IHstEvtService iHstEvtService) {
        this.mqttTemplate = mqttTemplate;
        this.iDeviceService = iDeviceService;
        this.iHstEvtService = iHstEvtService;
    }

    @PostConstruct
    public void initialize() throws MqttException {
        mqttTemplate.subscribe(subscribeTopic.split(","));
        mqttTemplate.setCallback(this);
    }

    @Override
    public void connectionLost(Throwable throwable) {

        log.error("连接失败!{}" + throwable.getMessage());

        //失败重连逻辑
        while (true) {
            try {
                mqttTemplate.reconnect();
                log.error("重连成功");
                break;
            } catch (MqttException e) {
                e.printStackTrace();
                log.error("连接失败重连失败");
            }
        }

    }

    private static List<String> valueDataTypeList = new ArrayList<>();

    static {
        valueDataTypeList.add("ft_report_data");
        valueDataTypeList.add("state_change");
    }

    @Override
    public void messageArrived(String t, MqttMessage mqttMessage) {

        String message = mqttMessage.toString();
        log.info("arrived message,topic:{},message:{}", t, mqttMessage.toString());
        if (StrUtil.isNotBlank(message)) {
            JSONObject jsonObject = JSONUtil.parseObj(message);
            JSONObject param = jsonObject.getJSONObject("param");
            if (ObjectUtil.isNotEmpty(param)) {


                String cmd = param.getStr("cmd");

                if (StrUtil.isNotBlank(cmd)) {


                    if (valueDataTypeList.contains(cmd.trim())) {
                        handleValue(jsonObject);
                    } else {
                        handleEvt(jsonObject);
                    }
                }
            }
        }
    }


    private void handleValue(JSONObject jsonObject) {

        String deviceId = jsonObject.getStr("deviceId");
        DevicePo devicePo = iDeviceService.getById(deviceId);
        if (Objects.nonNull(devicePo) && StrUtil.isNotBlank(devicePo.getNodeModel())) {
            Map<String, DataModelDto> dataModel = DataModels.getDataModel(devicePo.getNodeModel());
            JSONObject paramData = jsonObject.getJSONObject("param").getJSONObject("data");
            dataModel.entrySet().forEach(item -> {
                //值
                Object o = paramData.get(item.getKey());
                if (ObjectUtil.isNotNull(o)) {
                    DataObjectDto dataObjectDto = new DataObjectDto();
                    BeanUtils.copyProperties(item.getValue(), dataObjectDto);
                    dataObjectDto.setVarDate(LocalDateTime.now());
                    dataObjectDto.setValue(o.toString());
                    dataObjectDto.setDeviceId(deviceId);
                    DataObjectMap.add(deviceId, dataObjectDto);
                }
            });
        }
    }


    private void handleEvt(JSONObject jsonObject) {

        HstEvtPo hstEvtPo = new HstEvtPo();

        Map<String, String> cmdMap = new HashMap<>();
        cmdMap.put("enviroment_event", "环境事件");
        cmdMap.put("defense_event", "安防事件");
        cmdMap.put("electrical_event", "电气事件");
        cmdMap.put("chain_change", "联动事件");

        Map<String, String> alarTypeMap = new HashMap<>();
        alarTypeMap.put("1", "状态告警");
        alarTypeMap.put("2", "越注意上限");
        alarTypeMap.put("3", "越注意下限");
        alarTypeMap.put("4", "越警告上限");
        alarTypeMap.put("5", "越警告下限");
        alarTypeMap.put("6", "越报警上限");
        alarTypeMap.put("7", "越报警下限");
        alarTypeMap.put("8", "死态数据");
        alarTypeMap.put("20", "未带安全帽");
        alarTypeMap.put("21", "区域入侵");
        alarTypeMap.put("22", "人员倒地");
        alarTypeMap.put("23", "生物入侵");

        Map<String, String> alarmLevelMap = new HashMap<>();
        alarmLevelMap.put("1", "一般");
        alarmLevelMap.put("2", "重要");
        alarmLevelMap.put("3", "紧急");


        String deviceId = jsonObject.getStr("deviceId");
        Long ts = jsonObject.getLong("timestamp");
        String alarmTime = LocalDateTimeUtil.format(LocalDateTimeUtil.of(ts), DatePattern.NORM_DATETIME_MS_PATTERN);
        DevicePo devicePo = iDeviceService.getById(deviceId);
        if (ObjectUtil.isNotNull(devicePo)) {

            JSONObject param = jsonObject.getJSONObject("param");
            JSONObject data = param.getJSONObject("data");
            hstEvtPo.setDeviceId(deviceId);
            hstEvtPo.setDeviceName(devicePo.getName());
            hstEvtPo.setCmd(param.getStr("cmd"));
            hstEvtPo.setCmdName(cmdMap.get(param.getStr("cmd")));
            hstEvtPo.setAlarmState(data.getStr("AlarmState"));
            hstEvtPo.setValue(data.getStr("Value"));
            hstEvtPo.setAlarmType(data.getStr("AlarmType"));
            hstEvtPo.setAlarmTypeName(alarTypeMap.get(data.getStr("AlarmType")));
            hstEvtPo.setAlarmLevel(data.getStr("AlarmLevel"));
            hstEvtPo.setAlarmLevelName(alarmLevelMap.get(data.getStr("AlarmLevel")));
            hstEvtPo.setThreshold(data.getStr("Threshold"));
            hstEvtPo.setAlarmSource(data.getStr("AlarmSource"));
            DataModelDto alarmSource = DataModels.getDataModelProperty(devicePo.getNodeModel(), data.getStr("AlarmSource"));
            if (ObjectUtil.isNotNull(alarmSource)) {
                hstEvtPo.setAlarmSourceName(alarmSource.getVarName());
            }
            hstEvtPo.setFiles(data.getStr("Files"));
            hstEvtPo.setAlarmTime(alarmTime);
            iHstEvtService.save(hstEvtPo);
        }


    }


    @Override
    public void deliveryComplete(IMqttDeliveryToken iMqttDeliveryToken) {

    }
}
