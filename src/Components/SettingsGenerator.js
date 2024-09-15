import React from 'react';
import { GearIcon, Cross2Icon, ReloadIcon, LockOpen2Icon, LockClosedIcon } from '@radix-ui/react-icons'


import TextInput from './TextInput.js';
import BoolInput from './BoolInput.js';
import NumberInput from './NumberInput.js';
import MyLabel from './MyLabel.js';
import MyDialog from './MyDialog.js';
import MyScrollArea from './MyScrollArea.js';





const SettingsGenerator = React.forwardRef(({ config, initial_settings, onSave }, ref) => {


    const [settings, setSettings] = React.useState(initial_settings);
    const setSetting = (setting, value) => {
        setSettings({ ...settings, [setting]: value });
    }

    if (config === undefined) {
        return (<div> no config </div>)
    }

    if (onSave === undefined) {
        onSave = () => console.log(settings)
    }

    const onSaveFunction = () => {
        onSave(settings);
    }

    const create_Input = (setting) => {
        if (setting.type === "bool") {

            return (
                <BoolInput
                    key={'input_' + config.id + "_" + setting.id}
                    id={config.id + "_" + setting.id}
                    value={settings[setting.id]}
                    setValue={(value) => setSetting(setting.id, value)}
                />

            );
        }
        if (setting.type === "number") {
            if (setting.increment === undefined) {
                setting.increment = 1;
            }
            if (setting.max === undefined) {
                setting.max = 100;
            }
            if (setting.min === undefined) {
                setting.min = 0;
            }
    
            return (
                <NumberInput
                    key={'input_' + config.id + "_" + setting.id}
                    increment={setting.increment}
                    max={setting.max}
                    min={setting.min}
                    unit={setting.unit}
                    value={settings[setting.id]}
                    setValue={(value) => setSetting(setting.id, value)}
                />
            );
        }
        else {
            return (
                <TextInput
                    key={'input_' + config.id + "_" + setting.id}
                    id={config.id + "_" + setting.id}
                    type={setting.type}
                    placeholder={setting.default}
                    value={settings[setting.id]}
                    setValue={(value) => setSetting(setting.id, value)}
                />
            );

        }

    }



    return (
        <MyDialog
            title={config.name}
            icon={<GearIcon />}
            scrollable={true}
            onSave={() => onSaveFunction()}
        >

            {
                config.settings.map((setting, index) => {
                    return (
                        <div key={"subsetting_" + config.id + "_" + setting.id}>
                            <MyLabel
                                name={setting.name}
                                info={setting.description}
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
});

export default SettingsGenerator;