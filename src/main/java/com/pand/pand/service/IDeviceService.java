package com.pand.pand.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.pand.pand.entity.dto.DataModelDto;
import com.pand.pand.entity.po.DevicePo;
import com.pand.pand.entity.vo.HumTmpVo;
import com.pand.pand.entity.vo.ModelCountVo;

import java.util.List;

/**
 * @author ：alvin
 * @date ：Created in 2020-12-08 15:41:14
 * @description：TODO
 * @modified By：alvin
 * @version: 1.0.0
 */
public interface IDeviceService extends IService<DevicePo> {

    /**
     * 查询所有设备
     *
     * @return
     */
    List<DevicePo> queryAll();

    /**
     * 根据deviceid获取设备信息
     *
     * @param deviceId
     * @return
     */
    DevicePo getById(String deviceId);


    /**
     * 根据设备id获取设备模型信息
     *
     * @param deviceId
     * @return
     */
    List<DataModelDto> getDataModelById(String deviceId);


    /**
     * 统计每种类型模型设备数量
     *
     * @return
     */
    List<ModelCountVo> getModelCount();


    /**
     * 获取实时温度湿度
     * @return
     */
    List<HumTmpVo> getRealHumTmp();
}
