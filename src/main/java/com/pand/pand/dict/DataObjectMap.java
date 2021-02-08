package com.pand.pand.dict;

import com.pand.pand.entity.dto.DataModelDto;
import com.pand.pand.entity.dto.DataObjectDto;
import org.springframework.beans.BeanUtils;

import java.util.*;

/**
 * @author ：alvin
 * @date ：Created in 2020-12-08 16:57:12
 * @description：TODO
 * @modified By：alvin
 * @version: 1.0.0
 */

public class DataObjectMap {

    private static Map<String, Map<String, DataObjectDto>> dataObjectDtoMap = new HashMap<>();


    public static void add(String deviceId, DataObjectDto dataObjectDto) {

        if (!dataObjectDtoMap.containsKey(deviceId)) {
            dataObjectDtoMap.put(deviceId, new HashMap<>(10));
        }
        dataObjectDtoMap.get(deviceId).put(dataObjectDto.getVarTag(), dataObjectDto);
    }


    public static List<DataObjectDto> getByDeviceId(String deviceId, String modelUrl) {

        List<DataObjectDto> dataObjectDtos = new ArrayList<>();
        if (dataObjectDtoMap.containsKey(deviceId)) {
            Map<String, DataObjectDto> stringDataObjectDtoMap = dataObjectDtoMap.get(deviceId);
            Collection<DataObjectDto> values = stringDataObjectDtoMap.values();
            dataObjectDtos = new ArrayList<>(values);
            return dataObjectDtos;
        }
        Map<String, DataModelDto> dataModels = DataModels.getDataModel(modelUrl);
        if (dataModels != null) {
            for (Map.Entry<String, DataModelDto> entry : dataModels.entrySet()) {
                DataModelDto dataModelDto = entry.getValue();
                DataObjectDto dataObjectDto = new DataObjectDto();
                BeanUtils.copyProperties(dataModelDto, dataObjectDto);
                dataObjectDto.setValue("-");
                dataObjectDtos.add(dataObjectDto);
            }
        }
        return dataObjectDtos;
    }


    public static DataObjectDto getVarValue(String deviceId, String tag, String modelUrl) {


        if (dataObjectDtoMap.containsKey(deviceId)) {
            Map<String, DataObjectDto> stringDataObjectDtoMap = dataObjectDtoMap.get(deviceId);
            return stringDataObjectDtoMap.get(tag);
        }

        Map<String, DataModelDto> dataModels = DataModels.getDataModel(modelUrl);
        DataModelDto dataModelDto = dataModels.get(tag);
        DataObjectDto dataObjectDto = new DataObjectDto();
        BeanUtils.copyProperties(dataModelDto, dataObjectDto);
        dataObjectDto.setDeviceId(deviceId);
        dataObjectDto.setValue("0.0");

        return dataObjectDto;
    }

}
