package com.pand.pand.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.pand.pand.entity.po.HstEvtPo;
import com.pand.pand.entity.vo.EvtCountVo;

import java.util.List;

/**
 * @author ：alvin
 * @date ：Created in 2021-01-08 09:49:54
 * @description：TODO
 * @modified By：alvin
 * @version: 1.0.0
 */
public interface IHstEvtService extends IService<HstEvtPo> {

    /**
     * 根据事件类型统计事件
     *
     * @return
     */
    List<EvtCountVo> getEvtCount();
}
