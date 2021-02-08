package com.pand.pand.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.pand.pand.entity.po.DiagramPo;
import com.pand.pand.mapper.DiagramMapper;
import com.pand.pand.service.IDiagramService;
import org.springframework.stereotype.Service;

/**
 * @author ：alvin
 * @date ：Created in 2021-01-07 15:12:46
 * @description：TODO
 * @modified By：alvin
 * @version: 1.0.0
 */

@Service("iDiagramService")
public class DiagramServiceImpl extends ServiceImpl<DiagramMapper, DiagramPo> implements IDiagramService {

}
