package com.pand.pand.entity.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * @author ：alvin
 * @date ：Created in 2020-12-08 15:57:31
 * @description：
 * @modified By：alvin
 * @version: 1.0.0
 */

@Getter
@Setter
public class DataModelDto {

    public DataModelDto(String varName, String varTag, String varUnit, String varType, String varDataType) {
        this.varName = varName;
        this.varTag = varTag;
        this.varUnit = varUnit;
        this.varType = varType;
        this.varDataType = varDataType;
    }

    private String varName;

    private String varTag;

    private String varUnit;

    private String varType;

    private String varDataType;

}
