package com.pand.pand.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.pand.pand.dict.DataModels;
import com.pand.pand.entity.dto.DataModelDto;
import com.pand.pand.entity.po.DeviceModelCountPo;
import com.pand.pand.entity.po.DevicePo;
import com.pand.pand.entity.vo.HumTmpVo;
import com.pand.pand.entity.vo.ModelCountVo;
import com.pand.pand.mapper.DeviceMapper;
import com.pand.pand.mapper.HstEvtMapper;
import com.pand.pand.service.IDeviceService;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * @author ：alvin
 * @date ：Created in 2020-12-08 15:43:02
 * @description：TODO
 * @modified By：alvin
 * @version: 1.0.0
 */

@Service("iDeviceService")
public class DeviceServiceImpl extends ServiceImpl<DeviceMapper, DevicePo> implements IDeviceService {


    private final DeviceMapper deviceMapper;

    private final HstEvtMapper hstEvtMapper;

    public DeviceServiceImpl(DeviceMapper deviceMapper, HstEvtMapper hstEvtMapper) {
        this.deviceMapper = deviceMapper;
        this.hstEvtMapper = hstEvtMapper;
    }

    @Override
    public List<DevicePo> queryAll() {

        return this.list();
    }

    @Override
    public DevicePo getById(String deviceId) {

        QueryWrapper<DevicePo> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("deviceId", deviceId);
        return this.getOne(queryWrapper);
    }


    @Override
    public List<DataModelDto> getDataModelById(String deviceId) {

        DevicePo devicePo = this.getById(deviceId);
        Map<String, DataModelDto> dataModelMap = DataModels.getDataModel(devicePo.getNodeModel());
        return new ArrayList<>(dataModelMap.values());
    }

    @Override
    public List<ModelCountVo> getModelCount() {

        List<DeviceModelCountPo> deviceModelCountPos = this.deviceMapper.modelCount();

        List<ModelCountVo> modelCountVos = new ArrayList<>();
        deviceModelCountPos.forEach(item -> {
            ModelCountVo modelCountVo = new ModelCountVo();
            BeanUtils.copyProperties(item, modelCountVo);
            modelCountVo.setModelName(DataModels.getNameByKey(item.getModel()));
            modelCountVos.add(modelCountVo);

        });
        return modelCountVos;
    }

    @Override
    public List<HumTmpVo> getRealHumTmp() {

        return hstEvtMapper.getTmpHum();
    }
}
