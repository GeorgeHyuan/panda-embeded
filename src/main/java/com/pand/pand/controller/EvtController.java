package com.pand.pand.controller;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.pand.pand.entity.po.HstEvtPo;
import com.pand.pand.entity.vo.Result;
import com.pand.pand.service.IHstEvtService;
import org.springframework.web.bind.annotation.*;

/**
 * @author ：alvin
 * @date ：Created in 2021-01-08 13:54:19
 * @description：TODO
 * @modified By：alvin
 * @version: 1.0.0
 */

@RestController
@RequestMapping(value = "/evt")
public class EvtController {


    private final IHstEvtService iHstEvtService;

    public EvtController(IHstEvtService iHstEvtService) {
        this.iHstEvtService = iHstEvtService;
    }

    @GetMapping(value = "/list/{current}/{pageSize}")
    public Result list(@PathVariable("current") Integer current, @PathVariable("pageSize") Integer pageSize) {

        Page<HstEvtPo> page = new Page<>(current, pageSize);
        page.setDesc("alarm_time");
        IPage<HstEvtPo> page1 = iHstEvtService.page(page);
        return Result.success(page1.getRecords()).setTotal(page1.getTotal());
    }


    @GetMapping("/getEvtCount")
    public Result getEvtCount() {
        return Result.success(iHstEvtService.getEvtCount());
    }
}
