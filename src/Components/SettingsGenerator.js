import React from 'react';
import { GearIcon, Cross2Icon, ReloadIcon, LockOpen2Icon, LockClosedIcon } from '@radix-ui/react-icons'


import TextInput from './TextInput.js';
import BoolInput from './BoolInput.js';
import MyLabel from './MyLabel.js';
import MyDialog from './MyDialog.js';
import MyScrollArea from './MyScrollArea.js';



const blank_settings_config = {
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



const SettingsGenerator = ({ config, onSave }) => {
    const [settings, setSettings] = React.useState({});

    if (config === undefined || config === null) {
        config = blank_settings_config;
    }

    const create_Input = (setting) => {
        if (setting.type === "bool") {
            return (
                <div key={'input_' + config.id + "_" + setting.id}>
                    <BoolInput
                        id={config.id + "_" + setting.id}
                        value={settings[setting.id]}
                        setValue={(value) => {
                            let new_settings = settings;
                            new_settings[setting.id] = value;
                            setSettings(new_settings);
                        }}
                    />

                </div>
            );
        }
        else {
            return (
                <div key={'input_' + config.id + "_" + setting.id}>
                    <TextInput
                        id={config.id + "_" + setting.id}
                        type={setting.type}
                        placeholder={setting.default}
                        value={settings[setting.id]}
                        setValue={(value) => {
                            let new_settings = settings;
                            new_settings[setting.id] = value;
                            setSettings(new_settings);
                        }}
                    />
                </div>
            );

        }

    }



    return (
        <MyDialog
            title={config.name}
        >

            {
                config.settings.map((setting, index) => {
                    return (
                        <div key={"subsetting_" + config.id + "_" + setting.id}>
                            <MyLabel
                                name={setting.name}
                                id={config.id + "_" + setting.id}
                            >
                                {create_Input(setting)}
                            </MyLabel>
                        </div>
                    );
                })
            }
        </MyDialog>

    );
}

export default SettingsGenerator;