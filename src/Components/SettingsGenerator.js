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

    const create_Input = (subsetting) => {
        if (subsetting.type === "bool") {

            return (
                <BoolInput
                    key={'input_' + config.id + "_" + subsetting.id}
                    id={config.id + "_" + subsetting.id}
                    value={settings[subsetting.id]}
                    setValue={(value) => setSetting(subsetting.id, value)}
                />

            );
        }
        if (subsetting.type === "number") {
            if (subsetting.increment === undefined) {
                subsetting.increment = 1;
            }
            if (subsetting.max === undefined) {
                subsetting.max = 100;
            }
            if (subsetting.min === undefined) {
                subsetting.min = 0;
            }
    
            return (
                <NumberInput
                    key={'input_' + config.id + "_" + subsetting.id}
                    increment={subsetting.increment}
                    max={subsetting.max}
                    min={subsetting.min}
                    unit={subsetting.unit}
                    value={settings[subsetting.id]}
                    setValue={(value) => setSetting(subsetting.id, value)}
                />
            );
        }
        else {            
            return (
                <TextInput
                    key={'input_' + config.id + "_" + subsetting.id}
                    id={config.id + "_" + subsetting.id}
                    type={subsetting.type}
                    placeholder={subsetting.default}
                    value={settings[subsetting.id]}
                    setValue={(value) => setSetting(subsetting.id, value)}
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
                config.subsettings.map((subsetting, index) => {
                    return (
                        <div key={"subsetting_" + config.id + "_" + subsetting.id}>
                            <MyLabel
                                name={subsetting.name}
                                info={subsetting.description}
                                id={config.id + "_" + subsetting.id}
                            >
                                {create_Input(subsetting)}
                            </MyLabel>
                        </div>
                    );
                })
            }
        </MyDialog>

    );
});

export default SettingsGenerator;