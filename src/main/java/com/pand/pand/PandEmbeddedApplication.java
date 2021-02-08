package com.pand.pand;

import lombok.extern.slf4j.Slf4j;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 *
 * @author binhu
 */
@SpringBootApplication
@Slf4j
@MapperScan("com.pand.pand.mapper")
public class PandEmbeddedApplication {

    public static void main(String[] args) {
        SpringApplication.run(PandEmbeddedApplication.class, args);
    }

}
