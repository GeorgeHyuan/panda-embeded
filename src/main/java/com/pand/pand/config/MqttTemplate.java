package com.pand.pand.config;

import org.eclipse.paho.client.mqttv3.MqttClient;
import org.eclipse.paho.client.mqttv3.MqttConnectOptions;
import org.eclipse.paho.client.mqttv3.MqttException;

/**
 * @author : Alvin
 * @className : MqttTemplate
 * @package: net.izd.access.video.live.config
 * @description :
 * @date : 2019/12/18 14:56
 */
public class MqttTemplate extends MqttClient {

    public MqttTemplate(String serverUri) throws MqttException {
        super(serverUri, java.util.UUID.randomUUID().toString());
    }

    public static MqttConnectOptions defaultOptions() {
        MqttConnectOptions mqttConnectOptions = new MqttConnectOptions();
        return mqttConnectOptions;
    }
}
