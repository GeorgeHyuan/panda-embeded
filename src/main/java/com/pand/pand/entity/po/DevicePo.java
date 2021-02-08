package com.pand.pand.entity.po;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Getter;
import lombok.Setter;

/**
 * @author ：alvin
 * @date ：Created in 2020-12-08 15:36:52
 * @description：TODO
 * @modified By：alvin
 * @version: 1.0.0
 */

@Getter
@Setter
@TableName(value = "device")
public class DevicePo {

    @TableField(value = "nodeModel")
    private String nodeModel;

    @TableField(value = "nodeId")
    private String nodeId;

    @TableField(value = "name")
    private String name;

    @TableField(value = "description")
    private String description;

    @TableField(value = "mfgInfo")
    private String mfgInfo;

    @TableField(value = "deviceId")
    private String deviceId;
}
