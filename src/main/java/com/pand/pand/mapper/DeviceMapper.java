package com.pand.pand.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.pand.pand.entity.po.DeviceModelCountPo;
import com.pand.pand.entity.po.DevicePo;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author ：alvin
 * @date ：Created in 2020-12-08 15:40:02
 * @description：设备管理
 * @modified By：alvin
 * @version: 1.0.0
 */
@Repository
public interface DeviceMapper extends BaseMapper<DevicePo> {


    /**
     * 获取设备数据，按模型分类
     *
     * @return
     */
    List<DeviceModelCountPo> modelCount();

}
