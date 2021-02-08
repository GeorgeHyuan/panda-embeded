package com.pand.pand.controller;

import cn.hutool.core.util.ObjectUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.pand.pand.entity.form.DiagramForm;
import com.pand.pand.entity.po.DiagramPo;
import com.pand.pand.entity.vo.DiagramVo;
import com.pand.pand.entity.vo.Result;
import com.pand.pand.service.IDiagramService;
import org.springframework.beans.BeanUtils;
import org.springframework.web.bind.annotation.*;

/**
 * @author ：alvin
 * @date ：Created in 2021-01-07 15:15:00
 * @description：TODO
 * @modified By：alvin
 * @version: 1.0.0
 */

@RestController
@RequestMapping("/diagram")
public class DiagramController {

    private final IDiagramService iDiagramService;

    public DiagramController(IDiagramService iDiagramService) {
        this.iDiagramService = iDiagramService;
    }


    @GetMapping("/getById/{id}")
    public Result getById(@PathVariable("id") String id) {
        QueryWrapper<DiagramPo> queryWrapper = new QueryWrapper();
        queryWrapper.eq("id", id);
        DiagramPo byId = iDiagramService.getOne(queryWrapper);
        DiagramVo diagramVo = new DiagramVo();
        if (ObjectUtil.isNotNull(byId)) {
            BeanUtils.copyProperties(byId, diagramVo);
        }
        return Result.success(diagramVo);
    }


    @PostMapping("/add")
    public Result add(@RequestBody DiagramForm diagramForm) {

        DiagramPo diagramPo = new DiagramPo();
        diagramPo.setId(diagramForm.getId());
        diagramPo.setContent(diagramForm.getContent());
        iDiagramService.save(diagramPo);
        return Result.success();
    }


    @PostMapping("/remove/{id}")
    public Result add(@PathVariable("id") String id) {

        iDiagramService.removeById(id);
        return Result.success();
    }


    @PostMapping("/update")
    public Result update(@RequestBody DiagramForm diagramForm) {

        DiagramPo diagramPo = new DiagramPo();
        diagramPo.setId(diagramForm.getId());
        diagramPo.setContent(diagramForm.getContent());
        iDiagramService.updateById(diagramPo);
        return Result.success();
    }
}
