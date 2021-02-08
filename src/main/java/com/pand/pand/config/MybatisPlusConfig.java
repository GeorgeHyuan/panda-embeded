package com.pand.pand.config;

import com.baomidou.mybatisplus.extension.plugins.PaginationInterceptor;
import com.baomidou.mybatisplus.extension.plugins.PerformanceInterceptor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author ：alvin
 * @date ：Created in 2019/11/9 17:00
 * @description：MybatisPlus配置文件
 * @modified By：alvin
 * @version: 1.0.0
 */

@Configuration
@Slf4j
public class MybatisPlusConfig {


    /**
     * 配置分页插件
     *
     * @return
     */
    @Bean
    public PaginationInterceptor paginationInterceptor() {

        log.info("注册分页插件");
        return new PaginationInterceptor();
    }


    @Bean
    public PerformanceInterceptor performanceMonitorInterceptor() {

        log.info("注册性能插件");
        return new PerformanceInterceptor();
    }


}
