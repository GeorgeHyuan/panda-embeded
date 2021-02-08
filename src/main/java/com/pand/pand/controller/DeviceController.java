package com.pand.pand.controller;

import com.pand.pand.entity.dto.DataModelDto;
import com.pand.pand.entity.po.DevicePo;
import com.pand.pand.entity.vo.Result;
import com.pand.pand.service.IDeviceService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author ：alvin
 * @date ：Created in 2020-12-08 15:45:51
 * @description：TODO
 * @modified By：alvin
 * @version: 1.0.0
 */

@RestController
public class DeviceController {

    private final IDeviceService iDeviceService;

    public DeviceController(IDeviceService iDeviceService) {

        this.iDeviceService = iDeviceService;
    }

    @GetMapping("/getAllDevice")
    public Result getAllDevice() {
        List<DevicePo> devicePos = this.iDeviceService.queryAll();
        return Result.success(devicePos);
    }


    @GetMapping("/getModelByDeviceId/{id}")
    public Result getAllDevice(@PathVariable("id") String id) {
        List<DataModelDto> dataModels = this.iDeviceService.getDataModelById(id);
        return Result.success(dataModels);
    }


    @GetMapping("/getModelCount")
    public Result getModelCount() {
        return Result.success(iDeviceService.getModelCount());
    }
}
