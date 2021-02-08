package com.pand.pand.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.pand.pand.entity.po.HstEvtPo;
import com.pand.pand.entity.vo.EvtCountVo;
import com.pand.pand.mapper.HstEvtMapper;
import com.pand.pand.service.IHstEvtService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author ：alvin
 * @date ：Created in 2021-01-08 09:50:05
 * @description：TODO
 * @modified By：alvin
 * @version: 1.0.0
 */

@Service("iHstEvtService")
public class HstEvtServiceImpl extends ServiceImpl<HstEvtMapper, HstEvtPo> implements IHstEvtService {


    private final HstEvtMapper hstEvtMapper;

    public HstEvtServiceImpl(HstEvtMapper hstEvtMapper) {
        this.hstEvtMapper = hstEvtMapper;
    }

    @Override
    public List<EvtCountVo> getEvtCount() {

        return hstEvtMapper.getEvtCount();
    }



}
