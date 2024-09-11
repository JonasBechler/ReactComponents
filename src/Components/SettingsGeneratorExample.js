import React from 'react';
import { GearIcon, Cross2Icon, ReloadIcon, LockOpen2Icon, LockClosedIcon } from '@radix-ui/react-icons'


import TextInput from './TextInput.js';
import BoolInput from './BoolInput.js';
import MyLabel from './MyLabel.js';
import MyDialog from './MyDialog.js';
import MyScrollArea from './MyScrollArea.js';

import SettingsGenerator from './SettingsGenerator.js';



const ap_config = {
    id: "wifi_ap",
    name: "Wifi AP Settings",
    settings_count: 3,
    settings: [
        {
            id: "active",
            name: "Active",
            type: "bool",
            default: "false",
            description: "Enable or disable the wifi access point"
        },
        {
            id: "ssid",
            name: "SSID",
            type: "text",
            default: "Oil Lamp",
            description: "The SSID of the wifi access point"
        },
        {
            id: "password",
            name: "Password",
            type: "password",
            default: "12345678",
            description: "The password of the wifi access point"
        }
    ]
};




const SettingsGeneratorExample = ({ }) => {



    return (
        <div>
            <SettingsGenerator
                config={ap_config}
                onSave={(settings) => {
                    console.log("Settings Saved: ", settings);
                }}
            />
            <SettingsGenerator
                config={ap_config}
                onSave={(settings) => {
                    console.log("Settings Saved: ", settings);
                }}
            />
        </div>
    );
}

export default SettingsGeneratorExample;