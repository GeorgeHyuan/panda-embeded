package com.pand.pand.dict;

import com.pand.pand.entity.dto.DataModelDto;

import java.util.HashMap;
import java.util.Map;

/**
 * @author ：alvin
 * @date ：Created in 2020-12-08 15:58:33
 * @description：
 * @modified By：alvin
 * @version: 1.0.0
 */

public class DataModels {


    private static Map<String, Map<String, DataModelDto>> dataModelMap = new HashMap<>();

    private static Map<String, String> modelKeyNameMap = new HashMap<>();

    static {
        /**
         * 1.3.1	温湿度（TTAH）
         */
        Map<String, DataModelDto> dataModelDtoMap = new HashMap<>();
        dataModelDtoMap.put("Tmp", new DataModelDto("温度", "Tmp", "℃", "遥测", "Float"));
        dataModelDtoMap.put("Hum", new DataModelDto("湿度", "Hum", "%", "遥测", "Float"));
        dataModelDtoMap.put("DevState", new DataModelDto("设备状态", "DevState", "", "遥信", "Int"));
        dataModelDtoMap.put("BatteryVol", new DataModelDto("电池电压", "BatteryVol", "V", "遥测", "Float"));
        dataModelDtoMap.put("BatteryDumpEnergy", new DataModelDto("电池剩余电量", "BatteryDumpEnergy", "%", "遥测", "Float"));
        dataModelMap.put("TTAH", dataModelDtoMap);

        modelKeyNameMap.put("TTAH", "温湿度");

        /**
         *1.3.2	水浸（TWTR）
         */
        dataModelDtoMap = new HashMap<>();
        dataModelDtoMap.put("WLState", new DataModelDto("水浸状态", "WLState", "", "遥信", "Tiny"));
        dataModelDtoMap.put("BatteryVol", new DataModelDto("电池电压", "BatteryVol", "V", "遥测", "Float"));
        dataModelDtoMap.put("BatteryDumpEnergy", new DataModelDto("电池剩余电量", "BatteryDumpEnergy", "%", "遥测", "Float"));
        dataModelMap.put("TWTR", dataModelDtoMap);
        modelKeyNameMap.put("TWTR", "水浸");


        /**
         *1.3.3	水位（TWLV）
         */
        dataModelDtoMap = new HashMap<>();
        dataModelDtoMap.put("SWData", new DataModelDto("水位值", "SWData", "cm", "遥测", "Float"));
        dataModelDtoMap.put("SWSate", new DataModelDto("水位状态", "SWSate", "", "遥信", "Tiny"));
        dataModelDtoMap.put("BatteryVol", new DataModelDto("电池电压", "BatteryVol", "V", "遥测", "Float"));
        dataModelDtoMap.put("BatteryDumpEnergy", new DataModelDto("电池剩余电量", "BatteryDumpEnergy", "%", "遥测", "Float"));
        dataModelMap.put("TWLV", dataModelDtoMap);
        modelKeyNameMap.put("TWLV", "水位");

        /**
         *1.3.4	除湿机（TDEH）
         */
        dataModelDtoMap = new HashMap<>();
        dataModelDtoMap.put("Tmp", new DataModelDto("温度值", "Tmp", "℃", "遥测", "Float"));
        dataModelDtoMap.put("Hum", new DataModelDto("湿度值", "Hum", "%", "遥测", "Tiny"));
        dataModelDtoMap.put("State", new DataModelDto("设备状态", "State", "", "遥信", "Tiny"));
        dataModelDtoMap.put("CtrlCmd", new DataModelDto("开关状态", "CtrlCmd", "", "遥控", "Tiny"));
        dataModelMap.put("TDEH", dataModelDtoMap);
        modelKeyNameMap.put("TDEH", "除湿机");

        /**
         *1.3.5	空调（TACD）
         */
        dataModelDtoMap = new HashMap<>();
        dataModelDtoMap.put("AirState", new DataModelDto("空调状态", "AirState", "", "遥信", "Float"));
        dataModelDtoMap.put("TmpSet", new DataModelDto("空调温度设定", "TmpSet", "℃", "遥设", "Tiny"));
        dataModelDtoMap.put("ModeSet", new DataModelDto("模式设定", "ModeSet", "", "遥设", "Tiny"));
        dataModelDtoMap.put("SpeedSet", new DataModelDto("风速设定", "SpeedSet", "", "遥设", "Tiny"));
        dataModelDtoMap.put("DirectSet", new DataModelDto("风向设定", "DirectSet", "", "遥设", "Tiny"));
        dataModelDtoMap.put("PhaseACur", new DataModelDto("A相电流", "PhaseACur", "A", "遥测", "Float"));
        dataModelDtoMap.put("PhaseBCur", new DataModelDto("B相电流", "PhaseBCur", "A", "遥测", "Float"));
        dataModelDtoMap.put("PhaseCCur", new DataModelDto("C相电流", "PhaseCCur", "A", "遥测", "Float"));
        dataModelDtoMap.put("ModeFeed", new DataModelDto("空调模式", "ModeFeed", "", "遥信", "Tiny"));
        dataModelDtoMap.put("SpeedFeed", new DataModelDto("空调风速", "SpeedFeed", "", "遥信", "Tiny"));
        dataModelDtoMap.put("SwingFeed", new DataModelDto("空调风摆", "SwingFeed", "", "遥信", "Tiny"));
        dataModelDtoMap.put("TmpFeed", new DataModelDto("空调温度", "TmpFeed", "", "遥信", "Tiny"));
        dataModelDtoMap.put("AirControl", new DataModelDto("开关控制", "AirControl", "", "遥信", "Tiny"));
        dataModelMap.put("TACD", dataModelDtoMap);
        modelKeyNameMap.put("TACD", "空调");
        /**
         *1.3.6	风机（TFAN）
         */
        dataModelDtoMap = new HashMap<>();
        dataModelDtoMap.put("FanState", new DataModelDto("氧气浓度", "FanState", "℃", "遥信", "Tiny"));
        dataModelDtoMap.put("PumpCur", new DataModelDto("六氟化硫浓度", "PumpCur", "%", "遥测", "Float"));
        dataModelDtoMap.put("FanCur", new DataModelDto("臭氧浓度", "FanCur", "A", "遥测", "Float"));
        dataModelDtoMap.put("FanVol", new DataModelDto("运行状态", "FanVol", "V", "遥测", "Float"));
        dataModelDtoMap.put("FanControl", new DataModelDto("电池电压", "FanControl", "", "遥控", "Tiny"));
        dataModelMap.put("TFAN", dataModelDtoMap);
        modelKeyNameMap.put("TFAN", "风机");

        /**
         *1.3.7	灯光（TLIG）
         */
        dataModelDtoMap = new HashMap<>();
        dataModelDtoMap.put("LampState", new DataModelDto("灯光状态", "LampState", "", "遥信", "Tiny"));
        dataModelDtoMap.put("LampCtrl", new DataModelDto("灯光开关", "LampCtrl", "", "遥控", "Tiny"));
        dataModelMap.put("TLIG", dataModelDtoMap);
        modelKeyNameMap.put("TLIG", "灯光");
        /**
         *1.3.8	六氟化硫监测（TSF6）
         */
        dataModelDtoMap = new HashMap<>();
        dataModelDtoMap.put("O2", new DataModelDto("氧气浓度", "O2", "", "遥测", "Tiny"));
        dataModelDtoMap.put("SF6", new DataModelDto("六氟化硫浓度", "SF6", "", "遥测", "Tiny"));
        dataModelDtoMap.put("O3", new DataModelDto("臭氧浓度", "O3", "", "遥测", "Tiny"));
        dataModelDtoMap.put("RunState", new DataModelDto("运行状态", "RunState", "", "遥信", "Tiny"));
        dataModelDtoMap.put("BatteryVol", new DataModelDto("电池电压", "BatteryVol", "V", "遥测", "Tiny"));
        dataModelDtoMap.put("BatteryDumpEnergy", new DataModelDto("电池剩余电量", "BatteryDumpEnergy", "%", "遥测", "Tiny"));
        dataModelMap.put("TSF6", dataModelDtoMap);
        modelKeyNameMap.put("TSF6", "六氟化硫监测");

        /**
         *1.3.9	防凝露控制设备（TACO）
         */
        dataModelDtoMap = new HashMap<>();
        dataModelMap.put("TACO", dataModelDtoMap);
        modelKeyNameMap.put("TACO", "防凝露控制设备");

        /**
         *1.3.10	水泵（TTWP）
         */
        dataModelDtoMap = new HashMap<>();
        dataModelDtoMap.put("WpState", new DataModelDto("水泵状态", "WpState", "", "遥信", "Tiny"));
        dataModelDtoMap.put("WpCtrl", new DataModelDto("水泵开关", "WpCtrl", "", "遥控", "Tiny"));
        dataModelMap.put("TTWP", dataModelDtoMap);
        modelKeyNameMap.put("TTWP", "水泵");

        /**
         *1.3.11	开关柜监测（TMNS）
         */
        dataModelDtoMap = new HashMap<>();
        dataModelDtoMap.put("UpTmpA", new DataModelDto("闸刀上触头A相温度", "UpTmpA", "", "遥测", "Float"));
        dataModelDtoMap.put("UpTmpB", new DataModelDto("闸刀上触头B相温度", "UpTmpB", "", "遥测", "Float"));
        dataModelDtoMap.put("UpTmpC", new DataModelDto("闸刀上触头C相温度", "UpTmpC", "", "遥测", "Float"));

        dataModelDtoMap.put("DownTmpA", new DataModelDto("闸刀下触头A相温度", "DownTmpA", "", "遥测", "Float"));
        dataModelDtoMap.put("DownTmpB", new DataModelDto("闸刀下触头B相温度", "DownTmpB", "", "遥测", "Float"));
        dataModelDtoMap.put("DownTmpC", new DataModelDto("闸刀下触头C相温度", "DownTmpC", "", "遥测", "Float"));

        dataModelDtoMap.put("MidTmpA", new DataModelDto("母排A相温度", "MidTmpA", "", "遥测", "Float"));
        dataModelDtoMap.put("MidTmpB", new DataModelDto("母排B相温度", "MidTmpB", "", "遥测", "Float"));
        dataModelDtoMap.put("MidTmpC", new DataModelDto("母排C相温度", "MidTmpC", "", "遥测", "Float"));

        dataModelDtoMap.put("OpnA", new DataModelDto("开断电流", "OpnA", "", "遥测", "Float"));
        dataModelDtoMap.put("MoDevConf", new DataModelDto("监测设备通信异常", "MoDevConf", "", "遥信", "Float"));
        dataModelDtoMap.put("SupDevRun", new DataModelDto("监测设备自检异常", "SupDevRun", "", "遥信", "Float"));

        dataModelMap.put("TMNS", dataModelDtoMap);
        modelKeyNameMap.put("TMNS", "开关柜监测");

        /**
         *1.4.1	红外双鉴（TIDD）
         */
        dataModelDtoMap = new HashMap<>();
        dataModelDtoMap.put("DetectState", new DataModelDto("红外双鉴状态", "DetectState", "%", "遥信", "Tiny"));
        dataModelMap.put("TIDD", dataModelDtoMap);
        modelKeyNameMap.put("TIDD", "红外双鉴");
        /**
         *1.4.2	红外对射（TIST）
         */
        dataModelDtoMap = new HashMap<>();
        dataModelDtoMap.put("InfraredState", new DataModelDto("红外对射状态", "InfraredState", "%", "遥信", "Tiny"));
        dataModelMap.put("TIST", dataModelDtoMap);
        modelKeyNameMap.put("TIST", "红外对射");


        /**
         *1.4.3	电子围栏（TELR）
         */
        dataModelDtoMap = new HashMap<>();
        dataModelDtoMap.put("ElectronicFenceState", new DataModelDto("电子围栏状态", "ElectronicFenceState", "%", "遥信", "Tiny"));
        dataModelMap.put("TELR", dataModelDtoMap);
        modelKeyNameMap.put("TELR", "电子围栏");
        /**
         *1.4.4	烟雾传感器（TSMK）
         */
        dataModelDtoMap = new HashMap<>();
        dataModelDtoMap.put("FireState", new DataModelDto("消防状态", "FireState", "", "遥信", "Tiny"));
        dataModelDtoMap.put("BatteryVol", new DataModelDto("电池电压", "BatteryVol", "V", "遥测", "Float"));
        dataModelDtoMap.put("BatteryDumpEnergy", new DataModelDto("电池剩余电量", "BatteryDumpEnergy", "%", "遥测", "Float"));
        dataModelMap.put("TSMK", dataModelDtoMap);
        modelKeyNameMap.put("TSMK", "烟雾传感器");

        /**
         * 1.4.5	门禁与电子锁（TDRM）
         */
        dataModelDtoMap = new HashMap<>();
        dataModelDtoMap.put("DoorState", new DataModelDto("门磁状态", "DoorState", "", "遥信", "Tiny"));
        dataModelDtoMap.put("LockState", new DataModelDto("锁状态", "LockState", "", "遥信", "Tiny"));
        dataModelDtoMap.put("DoorOper", new DataModelDto("门禁开关", "DoorOper", "", "遥控", "Tiny"));
        dataModelDtoMap.put("DoorEvent", new DataModelDto("门禁事件", "DoorEvent", "", "遥信", "Tiny"));
        dataModelDtoMap.put("OpenDoorID", new DataModelDto("开门门禁卡ID", "OpenDoorID", "", "参变量", "Int"));
        dataModelDtoMap.put("OpenDoorSecret", new DataModelDto("开门门禁卡密码", "OpenDoorSecret", "", "参变量", "Int"));
        dataModelDtoMap.put("RemoteSendDoorID", new DataModelDto("远程发卡ID", "RemoteSendDoorID", "", "参变量", "String"));
        dataModelDtoMap.put("RemoteRemoveDoorID", new DataModelDto("远程删除卡ID", "RemoteRemoveDoorID", "", "参变量", "String"));
        dataModelDtoMap.put("BatteryVol", new DataModelDto("电池电压", "BatteryVol", "V", "遥测", "Float"));
        dataModelDtoMap.put("BatteryDumpEnergy", new DataModelDto("电池剩余电量", "BatteryDumpEnergy", "%", "遥测", "Float"));
        dataModelMap.put("TDRM", dataModelDtoMap);
        modelKeyNameMap.put("TDRM", "门禁与电子锁");
        /**
         *1.4.6	AI处理单元（TAIU）
         */
        dataModelDtoMap = new HashMap<>();
        dataModelDtoMap.put("DevState", new DataModelDto("设备状态", "DevState", "", "遥信", "Int"));
        dataModelDtoMap.put("NoSafetyHatNum", new DataModelDto("未带安全帽人数", "NoSafetyHatNum", "", "遥测", "Int"));
        dataModelDtoMap.put("RegionalInvasionState", new DataModelDto("区域入侵状态", "RegionalInvasionState", "", "遥信", "Tiny"));
        dataModelDtoMap.put("FallGroundState", new DataModelDto("人员倒地状态", "FallGroundState", "%", "遥信", "Tiny"));
        dataModelDtoMap.put("AnimalInvasionState", new DataModelDto("生物入侵状态", "AnimalInvasionState", "", "遥信", "Tiny"));
        dataModelMap.put("TAIU", dataModelDtoMap);
        modelKeyNameMap.put("TAIU", "AI处理单元");

        /**
         *1.5.1	特高频局放传感器（TPDS）
         */
        dataModelDtoMap = new HashMap<>();
        dataModelDtoMap.put("PDMAXFZ", new DataModelDto("局放采样峰值", "PDMAXFZ", "dbm", "遥测", "Int"));
        dataModelDtoMap.put("PDPhase", new DataModelDto("峰值相位", "PDPhase", "", "遥测", "Int"));
        dataModelDtoMap.put("PDMAXCount", new DataModelDto("局放脉冲次数", "PDMAXCount", "", "遥测", "Int"));
        dataModelMap.put("TPDS", dataModelDtoMap);
        modelKeyNameMap.put("TPDS", "特高频局放传感器");
        /**
         *1.5.2	无线测温传感器 （TTWL）
         */
        dataModelDtoMap = new HashMap<>();
        dataModelDtoMap.put("PhaseATmp", new DataModelDto("A相温度", "PhaseATmp", "", "遥测", "Float"));
        dataModelDtoMap.put("PhaseBTmp", new DataModelDto("B相温度", "PhaseBTmp", "", "遥测", "Float"));
        dataModelDtoMap.put("PhaseCTmp", new DataModelDto("C相温度", "PhaseCTmp", "", "遥测", "Float"));
        dataModelDtoMap.put("BatteryVol", new DataModelDto("电池电压", "BatteryVol", "V", "遥测", "Float"));
        dataModelDtoMap.put("BatteryDumpEnergy", new DataModelDto("电池剩余电量", "BatteryDumpEnergy", "%", "遥测", "Float"));
        dataModelMap.put("TTWL", dataModelDtoMap);
        modelKeyNameMap.put("TTWL", "无线测温传感器");

        /**
         *1.5.3	蓄电池监测 （TBMO）
         */
        dataModelDtoMap = new HashMap<>();
        dataModelDtoMap.put("GroupVolt", new DataModelDto("整组电压", "GroupVolt", "", "遥测", "Float"));
        dataModelDtoMap.put("GroupCurrent", new DataModelDto("整组电流", "GroupCurrent", "", "遥测", "Float"));
        dataModelDtoMap.put("SingleId", new DataModelDto("单节编号", "SingleId", "", "", "Int"));
        dataModelDtoMap.put("SingleVolt", new DataModelDto("单节电压", "SingleVolt", "V", "遥测", "Float"));
        dataModelDtoMap.put("SingleBatTemp", new DataModelDto("单节温度", "SingleBatTemp", "%", "遥测", "Float"));
        dataModelDtoMap.put("SingleCurrent", new DataModelDto("单节电流", "SingleCurrent", "", "遥测", "Float"));
        dataModelDtoMap.put("SingleBatRes", new DataModelDto("单节内阻", "SingleBatRes", "", "遥测", "Float"));
        dataModelDtoMap.put("SingleBatCap", new DataModelDto("单节容量", "SingleBatCap", "V", "遥测", "Float"));
        dataModelDtoMap.put("SingleLineRes", new DataModelDto("连接条电阻", "SingleLineRes", "%", "遥测", "Float"));
        dataModelMap.put("TBMO", dataModelDtoMap);
        modelKeyNameMap.put("TBMO", "蓄电池监测");

        /**
         *1.5.4	变压器噪声传感器 （TNOI）
         */
        dataModelDtoMap = new HashMap<>();
        dataModelDtoMap.put("Noise", new DataModelDto("噪声", "Noise", "dB", "遥测", "Float"));
        dataModelDtoMap.put("NoiseState", new DataModelDto("状态", "NoiseState", "", "遥信", "Tiny"));
        dataModelDtoMap.put("BatteryVol", new DataModelDto("电池电压", "BatteryVol", "V", "遥测", "Float"));
        dataModelDtoMap.put("BatteryDumpEnergy", new DataModelDto("电池剩余电量", "BatteryDumpEnergy", "%", "遥测", "Float"));
        dataModelMap.put("TNOI", dataModelDtoMap);
        modelKeyNameMap.put("TNOI", "变压器噪声传感器");
    }

    public static DataModelDto getDataModelProperty(String modelUrl, String propertyName) {
        if (dataModelMap.containsKey(modelUrl)) {

            return dataModelMap.get(modelUrl).get(propertyName);
        }
        return new DataModelDto("-", "-", "-", "-", "-");
    }


    public static Map<String, DataModelDto> getDataModel(String modelUrl) {
        if (dataModelMap.containsKey(modelUrl)) {

            return dataModelMap.get(modelUrl);
        }
        return null;
    }


    public static String getNameByKey(String key) {

        return modelKeyNameMap.get(key);
    }
}
