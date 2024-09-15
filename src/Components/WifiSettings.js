import React, { useState } from 'react';

import { GearIcon } from '@radix-ui/react-icons';
import MyDialog from './MyDialog';
import MyLabel from './MyLabel.js';
import MySelect from './MySelect.js';
import TextInput from './TextInput.js';

import MyTabs from './MyTabs.js';
import MyCollapsible from './MyCollapsible.js';
import BoolInput from './BoolInput.js';


const WifiSettings = ({ available_ssids, onSave }) => {
    if (available_ssids === undefined) {
        available_ssids = ["option1", "option2", "option3"];
    }

    const [client_active, setClientActive] = useState(false);
    const [client_ssid, setClientSsid] = useState(available_ssids[0]);
    const [client_ssidOther, setClientSsidOther] = useState("");
    const [client_password, setClientPassword] = useState("");
    const [client_ip, setClientIp] = useState("");
    const [client_gateway, setClientGateway] = useState("");
    const [client_subnet, setClientSubnet] = useState("");
    const [client_dns1, setClientDns1] = useState("");
    const [client_dns2, setClientDns2] = useState("");

    const [ap_active, setApActive] = useState("");
    const [ap_ssid, setApSsid] = useState("");
    const [ap_password, setApPassword] = useState("");

    const onSaveFunction = () => {
        const data = {
            client_active: client_active,
            client_ssid: client_ssid,
            client_ssidOther: client_ssidOther,
            client_password: client_password,
            client_ip: client_ip,
            client_gateway: client_gateway,
            client_subnet: client_subnet,
            client_dns1: client_dns1,
            client_dns2: client_dns2,
            ap_active: ap_active,
            ap_ssid: ap_ssid,
            ap_password: ap_password
        }
        onSave(data);
        console.log(data);
        
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
                                value={client_active}
                                setValue={setClientActive}

                            />
                        </MyLabel>
                        <MyLabel
                            name="SSID"
                            info="SSID Info"
                            id="client_ssid"
                        >
                            <MySelect
                                option_values={[...available_ssids, "other"]}
                                option_displays={[...available_ssids, "Other"]}
                                placeholder={"Select"}
                                value={client_ssid}
                                setValue={setClientSsid}
                            />
                        </MyLabel>

                        <div className={client_ssid === "other" ? "" : "hidden"}>
                            <MyLabel
                                name="SSID"
                                info="SSID Info"
                                id="client_ssid_other"
                            >
                                <TextInput
                                    id="client_ssid_other"
                                    type="text"
                                    placeholder={"SSID"}
                                    value={client_ssidOther}
                                    setValue={setClientSsidOther}
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
                                value={client_password}
                                setValue={setClientPassword}
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
                                    value={client_ip}
                                    setValue={setClientIp}
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
                                    value={client_gateway}
                                    setValue={setClientGateway}
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
                                    value={client_subnet}
                                    setValue={setClientSubnet}
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
                                    value={client_dns1}
                                    setValue={setClientDns1}
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
                                    value={client_dns2}
                                    setValue={setClientDns2}
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
                                value={ap_active}
                                setValue={setApActive}

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
                                value={ap_ssid}
                                setValue={setApSsid}
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
                                value={ap_password}
                                setValue={setApPassword}
                            />
                        </MyLabel>

                    </div>
                ]}
            />
        </MyDialog>

    );
}

export default WifiSettings;