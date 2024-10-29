import React from 'react';
import { GearIcon, Cross2Icon, ReloadIcon, LockOpen2Icon, LockClosedIcon } from '@radix-ui/react-icons'


import TextInput from './TextInput.js';
import BoolInput from './BoolInput.js';
import NumberInput from './NumberInput.js';
import MyLabel from './MyLabel.js';
import MyDialog from './MyDialog.js';
import MyScrollArea from './MyScrollArea.js';
import WifiSettings from './WifiSettings.js';
import MySelect from './MySelect.js';

import { createGetText } from './BasicLanguage.js';





const SettingsGenerator = React.forwardRef(({ config, initial_settings, onSave, language }, ref) => {
    if (initial_settings === undefined) {
        initial_settings = {};
    }


    const [modified, setModified] = React.useState(false);
    const [settings, setSettings] = React.useState(initial_settings);
    const setSetting = (setting, value) => {
        const new_settings = { ...settings, [setting]: value }

        setModified(JSON.stringify(new_settings) !== JSON.stringify(initial_settings));
        setSettings({ ...settings, [setting]: value });
    }

    if (config === undefined) {
        return (<div> no config </div>)
    }

    if (onSave === undefined) {
        onSave = () => console.log(settings)
    }

    const onSaveFunc = () => {
        setModified(false);
        onSave(settings);
    }

    const onDiscardFunc = () => {
        setModified(false);
        setSettings(initial_settings)
    }

    const getText = createGetText(language ? language : 'en')

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
        if (subsetting.type === "select") {
            return (
                <MySelect
                    key={'input_' + config.id + "_" + subsetting.id}
                    option_values={subsetting.options}
                    option_texts={subsetting.options}
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
            title={config.name[language]}
            info={modified ? getText("settings_changed") : <div />}
            icon={<GearIcon />}
            scrollable={true}
            onSave={() => onSaveFunc()}
            onDiscard={() => onDiscardFunc()}
            language={language}
        >
            {config.description[language]}

            {
                config.subsettings.map((subsetting, index) => {
                    return (
                        <div key={"subsetting_" + config.id + "_" + subsetting.id}>
                            <MyLabel
                                name={subsetting.name[language]}
                                info={subsetting.description[language]}
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