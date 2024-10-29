
import React, { useContext } from 'react';
import { ESPContext } from './ESPWebSocket.js';

import { RocketIcon } from '@radix-ui/react-icons';

import { clickable_classnames } from './BaseStyles'


const ESPReset = ({ language }) => {
    if (language === undefined) {
        language = "en";
    }

    const esp_context = useContext(ESPContext);






    return (
        <button className={`
            inline-flex 
            items-center justify-start
            h-[50px] 
            rounded-[4px] 
            leading-none 
            gap-2
            px-2
            w-[250px]
            `
            + clickable_classnames}
            onClick={() => {
                esp_context.sendData("reset", "");
                setTimeout(() => {
                    window.location.reload();
                  }, 1000);
            }}
        >
            <RocketIcon className="w-6 h-6" />
            <div className="flex w-full flex-col">
                <div className="">
                    Apply Settings
                </div>
            </div>

        </button>
    );
}

export default ESPReset
