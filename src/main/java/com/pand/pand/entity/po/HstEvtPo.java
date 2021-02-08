package com.pand.pand.entity.po;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Getter;
import lombok.Setter;

/**
 * @author ：alvin
 * @date ：Created in 2021-01-08 09:46:30
 * @description：TODO
 * @modified By：alvin
 * @version: 1.0.0
 */

@Getter
@Setter
@TableName("hst_evt")
public class HstEvtPo {


    private String deviceId;

    private String deviceName;

    private String cmd;

    private String cmdName;

    private String alarmState;

    private String value;

    private String alarmType;

    private String alarmTypeName;

    private String alarmLevel;

    private String alarmLevelName;

    private String threshold;

    private String alarmSource;

    private String alarmSourceName;

    private String files;

    private String alarmTime;
}
