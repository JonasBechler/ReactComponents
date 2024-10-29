
import React, { useContext } from 'react';
import { ESPContext } from './ESPWebSocket.js';

import SettingsGenerator from './SettingsGenerator.js';
import WifiSettings from './WifiSettings.js';

import ESPReset from './ESPReset.js';

const ESPSettingsView = ({language}) => {
    if (language === undefined) {
        language = "en";
    }

    const esp_context = useContext(ESPContext);

    
    if (esp_context.settingsConfig === null || esp_context.settings === null || esp_context.wsConnected === false) {
        return (
        <div className="
        
        w-full h-10
        justify-center items-center text-center
        text-lg
        ">

            Not connected to ESP32
            </div>
            );
    }
        

    return (
        <div className="
        flex 
        w-[90%] h-10
        justify-between items-center 
        gap-3">
            {esp_context.settingsConfig.settings_order.map((setting_id) => {
                let setting = esp_context.settingsConfig.settings.find(s => s.id === setting_id);
                if (setting.id === "wifi_settings") {
                    return (
                        <WifiSettings
                            key={setting.id}
                            initial_settings={esp_context.settings["wifi_settings"]}
                            available_ssids={esp_context.info.available_ssids}
                            onSave={(data) => {
                                esp_context.sendSettings("wifi_settings", data);
                            }}
                            language={language}
                        />
                    );
                }
                return (
                    <SettingsGenerator
                        key={setting.id}
                        config={setting}
                        initial_settings={esp_context.settings[setting.id]}
                        onSave={(data) => {
                            esp_context.sendSettings(setting.id, data);
                        }}
                        language={language}
                    />
                );

            })}
            <ESPReset language={language} />
        </div>
    );
}

export default ESPSettingsView;
