package com.pand.pand.config;

import lombok.extern.slf4j.Slf4j;
import org.eclipse.paho.client.mqttv3.MqttConnectOptions;
import org.eclipse.paho.client.mqttv3.MqttException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.io.UnsupportedEncodingException;

/**
 * @author : Alvin
 * @className : MqttConfiguration
 * @package: net.izd.access.video.live.config
 * @description : TODO
 * @date : 2019/12/18 14:56
 */
@Configuration
@Slf4j
public class MqttConfiguration {

    @Value("${mqtt.url}")
    private String brokerUrl;

    @Bean
    public MqttTemplate mqttTemplate() throws MqttException, UnsupportedEncodingException {
        MqttTemplate mqttTemplate = new MqttTemplate(brokerUrl);
        MqttConnectOptions options = MqttTemplate.defaultOptions();
        options.setCleanSession(false);
//        options.setUserName(mqttCofigBean.getUsername());
//        options.setPassword(mqttCofigBean.getPassword().toCharArray());
        options.setCleanSession(false);
        // 设置超时时间
        options.setConnectionTimeout(30);
        // 设置会话心跳时间
        options.setKeepAliveInterval(20);
        mqttTemplate.connect(options);
        log.info("Mqtt connected with mqtt broker at url : {}", brokerUrl);
        return mqttTemplate;
    }
}
