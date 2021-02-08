package com.pand.pand.entity.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

/**
 * @author ：alvin
 * @date ：Created in 2020-12-08 16:56:41
 * @description：TODO
 * @modified By：alvin
 * @version: 1.0.0
 */

@Getter
@Setter
public class DataObjectDto {

    private String deviceId;

    private String varName;

    private String varTag;

    private String varUnit;

    private String varType;

    private String varDataType;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss.SSS", timezone = "GMT+8")
    private LocalDateTime varDate;

    private String value;
}
