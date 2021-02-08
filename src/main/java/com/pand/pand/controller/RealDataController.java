package com.pand.pand.controller;

import com.pand.pand.dict.DataObjectMap;
import com.pand.pand.entity.dto.DataObjectDto;
import com.pand.pand.entity.po.DevicePo;
import com.pand.pand.entity.vo.Result;
import com.pand.pand.service.IDeviceService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * @author ：alvin
 * @date ：Created in 2020-12-08 16:25:43
 * @description：TODO
 * @modified By：alvin
 * @version: 1.0.0
 */

@RestController
@RequestMapping(value = "/real")
public class RealDataController {


    private final IDeviceService iDeviceService;

    public RealDataController(IDeviceService iDeviceService) {

        this.iDeviceService = iDeviceService;
    }

    @GetMapping("/getDeviceData")
    public Result getDeviceData(@RequestParam("deviceId") String deviceId) {

        DevicePo devicePo = iDeviceService.getById(deviceId);
        return Result.success(DataObjectMap.getByDeviceId(deviceId, devicePo.getNodeModel()));
    }


    @PostMapping(value = "/getRealData")
    public Result getRealData(@RequestBody List<String> ids) {

        List<DataObjectDto> dataObjectDtos = new ArrayList<>();
        for (String id : ids) {

            String[] split = id.split(",");
            DevicePo devicePo = iDeviceService.getById(split[0]);
            dataObjectDtos.add(DataObjectMap.getVarValue(split[0], split[1], devicePo.getNodeModel()));
        }
        return Result.success(dataObjectDtos);
    }


    @GetMapping(value = "/getRealHumTmp")
    public Result getRealHumTmp() {
        return Result.success(iDeviceService.getRealHumTmp());
    }
}
