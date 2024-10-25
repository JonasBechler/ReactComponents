export const BasicLanguage = {

    wifi_settings: {
        en: "WiFi Settings",
        de: "WLAN Einstellungen",
    },

    wifi_description: {
        en: "WiFi Info",
        de: "WLAN Info de",
    },

    wifi_tab_client: {
        en: "Client",
        de: "Client de",
    },

    wifi_tab_ap: {
        en: "Access Point",
        de: "Access Point de",
    },

    wifi_active: {
        en: "Active",
        de: "Aktiv",
    },

    wifi_active_info: {
        en: "If this is turned on, the device will connect to a WiFi network.",
        de: "Das Gerät verbindet sich mit einem WLAN Netzwerk, wenn ...... eingeschalten ist."
    },

    wifi_ssid: {
        en: "SSID",
        de: "SSID de",
    },

    wifi_ssid_info: {
        en: "The name of the WiFi network.",
        de: "Der Name des WLAN-Netwerks."
    },

    wifi_ssid_select_placeholder: {
        en: "Select",
        de: "Wählen",
    },

    wifi_ssid_select_other: {
        en: "Other",
        de: "Anderes",
    },
    
    wifi_password: {
        en: "Password",
        de: "Passwort",
    },

    wifi_password_info: {
        en: "The password of the WiFi network.",
        de: "Das Passwort der WLAN-Netwerks.",
    },

    wifi_advanced: {
        en: "Advanced",
        de: "Erweitert",
    },
    wifi_advanced_info: {
        en: "Advanced Info",
        de: "Erweitert Info",
    },

    wifi_ip: {
        en: "IP Adress",
        de: "IP Adresse",
    },

    wifi_ip_info: {
        en: "IP Adress Info",
        de: "IP Adresse Info de",
    },

    wifi_gateway: {
        en: "Gateway",
        de: "Gateway de",
    },

    wifi_gateway_info: {
        en: "Gateway Info",
        de: "Gateway Info de",
    },

    wifi_subnet: {
        en: "Subnet",
        de: "Subnet de",
    },

    wifi_subnet_info: {
        en: "Subnet Info",
        de: "Subnet Info de",
    },

    wifi_dns1: {
        en: "DNS1",
        de: "DNS1 de",
    },

    wifi_dns1_info: {
        en: "DNS1 Info",
        de: "DNS1 Info de",
    },

    wifi_dns2: {
        en: "DNS2",
        de: "DNS2 de",
    },

    wifi_dns2_info: {
        en: "DNS2 Info",
        de: "DNS2 Info de",
    },

    wifi_ap_active: {
        en: "Active",
        de: "Aktiv",
    },

    wifi_ap_active_info: {
        en: "If this is turned on, the device will create a WiFi network.",
        de: "Das Gerät erstellt ein WLAN-Netzwerk, wenn der ............. eingeschaltet ist.",
    },

    wifi_ap_ssid: {
        en: "SSID",
        de: "SSID de",
    },

    wifi_ap_ssid_info: {
        en: "The name of the WiFi network created by the device.",
        de: "Der Name des WLAN-Netzwerks, das vom Gerät erstellt wird.",
    },

    wifi_ap_password: {
        en: "Password",
        de: "Passwort",
    },

    wifi_ap_password_info: {
        en: "The password for the WiFi network created by the device.",
        de: "AP Password Info de",
    },


    settings_changed: {
        en: "Modified and not saved!",
        de: "Verändert und nicht gespeichert!",
    },

    dialog_save: {
        en: "Save",
        de: "Speichern",
    },
    dialog_discard: {
        en: "Discard",
        de: "Verwerfen",
    }
    


}

export const createGetText = (language) => {
    return ((text) => BasicLanguage[text][language])
}


