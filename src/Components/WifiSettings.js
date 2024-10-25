import React, { useState } from 'react';

import { GearIcon } from '@radix-ui/react-icons';
import MyDialog from './MyDialog';
import MyLabel from './MyLabel.js';
import MySelect from './MySelect.js';
import TextInput from './TextInput.js';

import MyTabs from './MyTabs.js';
import MyCollapsible from './MyCollapsible.js';
import BoolInput from './BoolInput.js';

import { LockClosedIcon, LockOpen1Icon } from '@radix-ui/react-icons';
import {createGetText} from './BasicLanguage.js';


const WifiSettings = ({ initial_settings, available_ssids, onSave, language }) => {
    if (available_ssids === undefined) {
        available_ssids = [];
    }

    const getSettings = () => {
        let new_settings = {};
        if (initial_settings !== undefined) {
            new_settings.client_active = (initial_settings.client_active === undefined) ? false : initial_settings.client_active;
    
            if (initial_settings.client_ssid === undefined || initial_settings.client_ssid === "") {
                new_settings.client_ssid = undefined;
                new_settings.client_ssidOther = "";
            }
            else {
                let index = available_ssids.findIndex((ssid_context) => ssid_context.ssid === initial_settings.client_ssid);
                if (index === -1) {
                    new_settings.client_ssid = "other";
                    new_settings.client_ssidOther = initial_settings.client_ssid;
                }
                else {
                    new_settings.client_ssid = index + "_" + initial_settings.client_ssid;
                    new_settings.client_ssidOther = "";
                }
            }
    
    
            new_settings.client_password = (initial_settings.client_password === undefined) ? "" : initial_settings.client_password;
            new_settings.client_ip = (initial_settings.client_ip === undefined) ? "" : initial_settings.client_ip;
            new_settings.client_gateway = (initial_settings.client_gateway === undefined) ? "" : initial_settings.client_gateway;
            new_settings.client_subnet = (initial_settings.client_subnet === undefined) ? "" : initial_settings.client_subnet;
            new_settings.client_dns1 = (initial_settings.client_dns1 === undefined) ? "" : initial_settings.client_dns1;
            new_settings.client_dns2 = (initial_settings.client_dns2 === undefined) ? "" : initial_settings.client_dns2;
    
            new_settings.ap_active = (initial_settings.ap_active === undefined) ? false : initial_settings.ap_active;
            new_settings.ap_ssid = (initial_settings.ap_ssid === undefined) ? "" : initial_settings.ap_ssid;
            new_settings.ap_password = (initial_settings.ap_password === undefined) ? "" : initial_settings.ap_password;
        }
        else {
            new_settings.client_active = false;
            new_settings.client_ssid = available_ssids.length > 0 ? "0_" + available_ssids[0].ssid : "";
            new_settings.client_ssidOther = "";
            new_settings.client_password = "";
            new_settings.client_ip = "";
            new_settings.client_gateway = "";
            new_settings.client_subnet = "";
            new_settings.client_dns1 = "";
            new_settings.client_dns2 = "";
            new_settings.ap_active = false;
            new_settings.ap_ssid = "";
            new_settings.ap_password = "";
        }

        return new_settings;
    }

    const getData = ( settings ) => {
        let ssid = "";
        
        if (settings.client_ssid === "other") {
            ssid = settings.client_ssidOther
        }
        else if (settings.client_ssid !== "") {
            ssid = settings.client_ssid.substring(settings.client_ssid.indexOf("_") + 1);
        }
        else {
            ssid = "";
        }
        
        const data = {
            client_active: settings.client_active,
            client_ssid: ssid,
            client_password: settings.client_password,
            client_ip: settings.client_ip,
            client_gateway: settings.client_gateway,
            client_subnet: settings.client_subnet,
            client_dns1: settings.client_dns1,
            client_dns2: settings.client_dns2,
            ap_active: settings.ap_active,
            ap_ssid: settings.ap_ssid,
            ap_password: settings.ap_password
        }
        return data;
    }

    const [modified, setModified] = useState(false);
    const [settings, setSettings] = useState(getSettings());
    const setSetting = (setting, value) => {
        let new_settings = { ...settings, [setting]: value }

        setModified(JSON.stringify(getData(new_settings)) !== JSON.stringify(initial_settings));  
        setSettings(new_settings);
    }
    const tabs = ["client", "ap"];
    const [currentTab, setCurrentTab] = useState(tabs[0])
    const [collapsibleState, setCollapsibleState] = useState(false)
    

    const onSaveFunc = () => {
        setModified(false);
        onSave(getData(settings));
    }
    const onDiscardFunc = () => {
        setModified(false);
        setSettings(getSettings());
        
    }

    const getText = createGetText(language);



    return (
        <MyDialog
            title={getText("wifi_settings")}
            info={modified ? getText("settings_changed") : <div />}
            icon={<GearIcon />}
            scrollable={true}
            onSave={onSaveFunc}
            onDiscard={onDiscardFunc}
            language={language}
        >
            {getText("wifi_description")}

            <MyTabs
                tab={currentTab}
                setTab={setCurrentTab}
                values={tabs}
                display_values={[getText("wifi_tab_client"), getText("wifi_tab_ap")]}
                contents={[
                    <div className='grow'>
                        <MyLabel
                            name={getText("wifi_active")}
                            info={getText("wifi_active_info")}
                            id="client_active"
                        >
                            <BoolInput
                                id="client_active"
                                value={settings.client_active}
                                setValue={(value) => setSetting("client_active", value)}

                            />
                        </MyLabel>
                        <MyLabel
                            name={getText("wifi_ssid")}
                            info={getText("wifi_ssid_info")}
                            id="client_ssid"
                        >
                            <MySelect
                                option_values={[...available_ssids.map((ssid_context, index) => index + "_" + ssid_context.ssid), "other"]}
                                option_texts={[...available_ssids.map((ssid_context) => ssid_context.ssid), getText("wifi_ssid_select_other")]}
                                option_extras={[...available_ssids.map((ssid_context) => {
                                    return (
                                        <div className='flex gap-2 items-center'>
                                            {ssid_context.rssi + " dBm"}
                                            {ssid_context.encrypted === "locked" ? <LockClosedIcon className='h-4 w-4' /> : <LockOpen1Icon />}
                                        </div>
                                    )
                                }), ""]}
                                placeholder={getText("wifi_ssid_select_placeholder")}
                                value={settings.client_ssid}
                                setValue={(value) => setSetting("client_ssid", value)}
                            />
                        </MyLabel>

                        <div className={settings.client_ssid === "other" ? "" : "hidden"}>
                            <MyLabel
                                name={getText("wifi_ssid")}
                                info={getText("wifi_ssid_info")}
                                id="client_ssid_other"
                            >
                                <TextInput
                                    id="client_ssid_other"
                                    type="text"
                                    placeholder={"SSID"}
                                    value={settings.client_ssidOther}
                                    setValue={(value) => setSetting("client_ssidOther", value)}
                                />
                            </MyLabel>
                        </div>

                        <MyLabel
                            name={getText("wifi_password")}
                            info={getText("wifi_password_info")}
                            id="client_password"
                        >
                            <TextInput
                                id="client_password"
                                type="password"
                                placeholder={"Password"}
                                value={settings.client_password}
                                setValue={(value) => setSetting("client_password", value)}
                            />
                        </MyLabel>
                        <MyCollapsible
                            name={getText("wifi_advanced")}
                            info={getText("wifi_advanced_info")}
                            open={collapsibleState}
                            setOpen={setCollapsibleState}
                        >
                            <MyLabel
                                name={getText("wifi_ip")}
                                info={getText("wifi_ip_info")}
                                id="client_ip"
                            >
                                <TextInput
                                    id="client_ip"
                                    type="ip"
                                    placeholder={"IP"}
                                    value={settings.client_ip}
                                    setValue={(value) => setSetting("client_ip", value)}
                                />
                            </MyLabel>
                            <MyLabel
                                name={getText("wifi_gateway")}
                                info={getText("wifi_gateway_info")}
                                id="client_gateway"
                            >
                                <TextInput
                                    id="client_gateway"
                                    type="ip"
                                    placeholder={"Gateway"}
                                    value={settings.client_gateway}
                                    setValue={(value) => setSetting("client_gateway", value)}
                                />
                            </MyLabel>
                            <MyLabel
                                name={getText("wifi_subnet")}
                                info={getText("wifi_subnet_info")}
                                id="client_subnet"
                            >
                                <TextInput
                                    id="client_subnet"
                                    type="ip"
                                    placeholder={"Subnet"}
                                    value={settings.client_subnet}
                                    setValue={(value) => setSetting("client_subnet", value)}
                                />
                            </MyLabel>
                            <MyLabel
                                name={getText("wifi_dns1")}
                                info={getText("wifi_dns1_info")}
                                id="client_dns1"
                            >
                                <TextInput
                                    id="client_dns1"
                                    type="ip"
                                    placeholder={"DNS1"}
                                    value={settings.client_dns1}
                                    setValue={(value) => setSetting("client_dns1", value)}
                                />
                            </MyLabel>
                            <MyLabel
                                name={getText("wifi_dns2")}
                                info={getText("wifi_dns2_info")}
                                id="client_dns2"
                            >
                                <TextInput
                                    id="client_dns2"
                                    type="ip"
                                    placeholder={"DNS2"}
                                    value={settings.client_dns2}
                                    setValue={(value) => setSetting("client_dns2", value)}
                                />
                            </MyLabel>

                        </MyCollapsible>
                    </div>,
                    <div className='grow'>
                        <MyLabel
                            name={getText("wifi_ap_active")}
                            info={getText("wifi_ap_active_info")}
                            id="ap_active"
                        >
                            <BoolInput
                                id="ap_active"
                                value={settings.ap_active}
                                setValue={(value) => setSetting("ap_active", value)}

                            />
                        </MyLabel>
                        <MyLabel
                            name={getText("wifi_ap_ssid")}
                            info={getText("wifi_ap_ssid_info")}
                            id="ap_ssid"
                        >
                            <TextInput
                                id="ap_ssid"
                                type="text"
                                placeholder={"SSID"}
                                value={settings.ap_ssid}
                                setValue={value => setSetting("ap_ssid", value)}
                            />
                        </MyLabel>
                        <MyLabel
                            name={getText("wifi_ap_password")}
                            info={getText("wifi_ap_password_info")}
                            id="ap_password"
                        >
                            <TextInput
                                id="ap_password"
                                type="password"
                                placeholder={"Password"}
                                value={settings.ap_password}
                                setValue={value => setSetting("ap_password", value)}
                            />
                        </MyLabel>

                    </div>
                ]}
            />
        </MyDialog>

    );
}

export default WifiSettings;