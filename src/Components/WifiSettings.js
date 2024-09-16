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


const WifiSettings = ({ initial_settings, available_ssids, onSave }) => {
    if (available_ssids === undefined) {
        available_ssids = [];
    }

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


    const [settings, setSettings] = useState(new_settings);
    const setSetting = (setting, value) => {
        setSettings({ ...settings, [setting]: value });
    }

    const onSaveFunction = () => {
        let ssid = "";
        if (settings.client_ssid === "other") {
            ssid = settings.client_ssidOther
        }
        else {
            ssid = settings.client_ssid.substring(settings.client_ssid.indexOf("_") + 1);
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
        onSave(data);
    }



    return (
        <MyDialog
            title={"Wifi Settings"}
            icon={<GearIcon />}
            scrollable={true}
            onSave={onSaveFunction}
        >
            <MyTabs
                values={['Client', 'Access Point']}
                contents={[
                    <div className='grow'>
                        <MyLabel
                            name="Active"
                            info="Active Info"
                            id="client_active"
                        >
                            <BoolInput
                                id="client_active"
                                value={settings.client_active}
                                setValue={(value) => setSetting("client_active", value)}

                            />
                        </MyLabel>
                        <MyLabel
                            name="SSID"
                            info="SSID Info"
                            id="client_ssid"
                        >
                            <MySelect
                                option_values={[...available_ssids.map((ssid_context, index) => index + "_" + ssid_context.ssid), "other"]}
                                option_texts={[...available_ssids.map((ssid_context) => ssid_context.ssid), "Other"]}
                                option_extras={[...available_ssids.map((ssid_context) => {
                                    return (
                                        <div className='flex gap-2 items-center'>
                                            {ssid_context.rssi + " dBm"}
                                            {ssid_context.encrypted === "locked" ? <LockClosedIcon className='h-4 w-4' /> : <LockOpen1Icon />}
                                        </div>
                                    )
                                }), ""]}
                                placeholder={"Select"}
                                value={settings.client_ssid}
                                setValue={(value) => setSetting("client_ssid", value)}
                            />
                        </MyLabel>

                        <div className={settings.client_ssid === "other" ? "" : "hidden"}>
                            <MyLabel
                                name="SSID"
                                info="SSID Info"
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
                            name="Password"
                            info="Password Info"
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
                            name="Advanced"
                            info="Advanced info"
                        >
                            <MyLabel
                                name="IP"
                                info="IP Info"
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
                                name="Gateway"
                                info="Gateway Info"
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
                                name="Subnet"
                                info="Subnet Info"
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
                                name="DNS1"
                                info="DNS1 Info"
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
                                name="DNS2"
                                info="DNS2 Info"
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
                            name="Active"
                            info="Active Info"
                            id="ap_active"
                        >
                            <BoolInput
                                id="ap_active"
                                value={settings.ap_active}
                                setValue={(value) => setSetting("ap_active", value)}

                            />
                        </MyLabel>
                        <MyLabel
                            name="SSID"
                            info="SSID Info"
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
                            name="Password"
                            info="Password Info"
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