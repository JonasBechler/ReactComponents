import React, { useState } from 'react';

import WifiSettings from './WifiSettings';

const available_ssids = [
    {
        ssid: "MagentaWLAN-G25K",
        rssi: -59,
        encrypted: "locked"
    },
    {
        ssid: "TP-Link_Extender",
        rssi: -61,
        encrypted: "locked"
    },
    {
        ssid: "SuGoV",
        rssi: -67,
        encrypted: "locked"
    },
    {
        ssid: "SuGoV",
        rssi: -67,
        encrypted: "locked"
    }
];

const wifi_settings = {
    client_active: false,
    client_ssid: "TP-Link_Extender",
    client_password: "16215110151702336282",
    client_ip: "192.168.178.105",
    client_gateway: "192.168.178.100",
    client_subnet: "255.255.255.0",
    client_dns1: "8.8.8.8",
    client_dns2: "8.8.4.4",
    ap_active: false,
    ap_ssid: "Oil Lamp",
    ap_password: "12345678"
}

const WifiSettingsExample = () => {

    return (
        <WifiSettings
            initial_setting={wifi_settings}
            available_ssids={available_ssids}
            onSave={(data) => console.log(data)}
        />
    );
}

export default WifiSettingsExample;