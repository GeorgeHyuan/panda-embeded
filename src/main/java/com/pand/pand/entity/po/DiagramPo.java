package com.pand.pand.entity.po;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Getter;
import lombok.Setter;

/**
 * @author ：alvin
 * @date ：Created in 2021-01-07 15:06:33
 * @description：TODO
 * @modified By：alvin
 * @version: 1.0.0
 */

@Getter
@Setter
@TableName(value = "diagram")
public class DiagramPo {

    @TableId
    private String id;

    private String content;
}
