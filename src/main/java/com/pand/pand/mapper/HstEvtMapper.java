package com.pand.pand.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.pand.pand.entity.po.HstEvtPo;
import com.pand.pand.entity.vo.EvtCountVo;
import com.pand.pand.entity.vo.HumTmpVo;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author ：alvin
 * @date ：Created in 2021-01-08 09:48:39
 * @description：
 * @modified By：alvin
 * @version: 1.0.0
 */

@Repository
public interface HstEvtMapper extends BaseMapper<HstEvtPo> {


    /**
     * 按类型统计事件
     *
     * @return
     */
    List<EvtCountVo> getEvtCount();


    /**
     * 获取实时温度湿度
     *
     * @return
     */
    List<HumTmpVo> getTmpHum();
}
