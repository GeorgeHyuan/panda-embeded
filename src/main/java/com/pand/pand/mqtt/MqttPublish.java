package com.pand.pand.mqtt;

import com.pand.pand.config.MqttTemplate;
import org.eclipse.paho.client.mqttv3.MqttMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * @author : Alvin
 * @className : MqttPulish
 * @package: net.izd.access.video.live.mqtt
 * @description :
 * @date : 2019/12/18 15:31
 */

@Component
public class MqttPublish {


    private final MqttTemplate mqttTemplate;

    @Autowired
    public MqttPublish(MqttTemplate mqttTemplate) {
        this.mqttTemplate = mqttTemplate;
    }

    public Boolean pub(String topic, String msg) {

        Boolean success = false;

        try {
            MqttMessage message = new MqttMessage(msg.getBytes("UTF-8"));
            message.setQos(0);
            message.setRetained(true);
            if (!mqttTemplate.isConnected()) {
                mqttTemplate.reconnect();
            }
            mqttTemplate.publish(topic, message);
            success = true;
        } catch (Exception e) {
            e.printStackTrace();
        }

        return success;
    }

}
