import React, { useState } from 'react';

import MyDialog from './MyDialog';
import MyLabel from './MyLabel.js';
import MySelect from './MySelect.js';
import TextInput from './TextInput.js';

import MyTabs from './MyTabs.js';
import MyCollapsible from './MyCollapsible.js';


const WifiSettings = ({ available_ssids, onSave }) => {
    if (available_ssids === undefined) {
        available_ssids = ["option1", "option2", "option3"];
    }

    const [ssid, setSsid] = useState(available_ssids[0]);
    const [ssidOther, setSsidOther] = useState("");
    const [password, setPassword] = useState("");
    const [gateway, setGateway] = useState("");
    const [subnet, setSubnet] = useState("");
    const [dns1, setDns1] = useState("");
    const [dns2, setDns2] = useState("");

    const [ap_ssid, setApSsid] = useState("");
    const [ap_password, setApPassword] = useState("");
    console.log(available_ssids);




    return (
        <MyDialog
            title={"Wifi Settings"}
        >
            <MyTabs
                values={['Client', 'Access Point']}
                contents={[
                    <div>
                        <MyLabel
                            name="SSID"
                            info="SSID Info"
                        >
                            <MySelect
                                option_values={[...available_ssids, "other"]}
                                option_displays={[...available_ssids, "Other"]}
                                placeholder={"Select"}
                                value={ssid}
                                setValue={setSsid}
                            />
                        </MyLabel>
                        <div className={ssid === "other" ? "" : "hidden"}>
                            <MyLabel
                                name="SSID"
                                info="SSID Info"
                            >
                                <TextInput
                                    id="client_ssid_other"
                                    type="text"
                                    placeholder={"SSID"}
                                    value={ssidOther}
                                    setValue={setSsidOther}
                                />
                            </MyLabel>
                        </div>

                        <MyLabel
                            name="Password"
                            info="Password Info"
                        >
                            <TextInput
                                id="client_password"
                                type="password"
                                placeholder={"Password"}
                                value={password}
                                setValue={setPassword}
                            />
                        </MyLabel>
                        <MyCollapsible
                            title="Advanced"
                        >
                            <MyLabel
                                name="Gateway"
                                info="Gateway Info"
                            >
                                <TextInput
                                    id="client_gateway"
                                    type="ip"
                                    placeholder={"Gateway"}
                                    value={gateway}
                                    setValue={setGateway}
                                />
                            </MyLabel>
                            <MyLabel
                                name="Subnet"
                                info="Subnet Info"
                            >
                                <TextInput
                                    id="client_subnet"
                                    type="ip"
                                    placeholder={"Subnet"}
                                    value={subnet}
                                    setValue={setSubnet}
                                />
                            </MyLabel>
                            <MyLabel
                                name="DNS1"
                                info="DNS1 Info"
                            >
                                <TextInput
                                    id="client_dns1"
                                    type="ip"
                                    placeholder={"DNS1"}
                                    value={dns1}
                                    setValue={setDns1}
                                />
                            </MyLabel>
                            <MyLabel
                                name="DNS2"
                                info="DNS2 Info"
                            >
                                <TextInput
                                    id="client_dns2"
                                    type="ip"
                                    placeholder={"DNS2"}
                                    value={dns2}
                                    setValue={setDns2}
                                />
                            </MyLabel>

                        </MyCollapsible>
                    </div>,
                    <div>
                        <MyLabel
                            name="SSID"
                            info="SSID Info"
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