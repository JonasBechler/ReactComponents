import React, { useContext } from 'react';

import { Link1Icon, LinkNone1Icon } from '@radix-ui/react-icons';

import * as HoverCard from '@radix-ui/react-hover-card';


import { ESPContext } from './ESPWebSocket.js';

const ESPWebSocketSymbol = () => {
  const esp_context = useContext(ESPContext);

  if (esp_context === null) {
    return (<div />)
  }








  // link in red or green based on connection status
  return (

    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <div className="
            inline-flex 
            justify-center items-center">
          <div className='flex items-center justify-center'>
            {
              (esp_context.wsConnected)
                ?
                <div className='text-green-500'>
                  <Link1Icon className="w-8 h-8" />
                </div>
                :
                <div className='text-red-500'>
                  <LinkNone1Icon className="w-8 h-8" />
                </div>
            }
          </div>
        </div>

      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          className="
            data-[side=bottom]:animate-slideUpAndFade 
            data-[side=right]:animate-slideLeftAndFade
            data-[side=left]:animate-slideRightAndFade 
            data-[side=top]:animate-slideDownAndFade 
            w-[300px] 
            bg-white 
            p-2 
            shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] 
            data-[state=open]:transition-all 
            rounded-xl
            "
          sideOffset={5}
        >
          {esp_context.wsConnected
            ?
            (
              <div className="
              flex flex-col
              ">
                <div className="
                flex 
                justify-between items-center 
                text-lg 
                p-2
                ">
                  <div>
                    Connected
                  </div>
                  <div>
                    <button
                      className="
                      bg-blue-500 
                      hover:bg-blue-700 
                      text-white 
                      px-2 
                      rounded
                      "
                      onClick={() => {
                        esp_context.sendData("poweroff", "");
                        setTimeout(() => {
                          window.location.reload();
                        }, 1000);
                      }}
                    >
                      Turn Off
                    </button>
                  </div>
                </div>
                <div className="
                flex
                justify-start items-center
                p-2
                ">

                  IP: {esp_context.info ? esp_context.info.ip : "Not Available"}
                </div>
              </div>
            )
            :
            (
              <div className="
              flex flex-col
              ">
                <div className="
                flex 
                justify-start items-center 
                text-lg 
                p-2
                ">
                  Not Connected

                </div>
              </div>
            )
          }



          <HoverCard.Arrow className="fill-white" />
        </HoverCard.Content >
      </HoverCard.Portal >
    </HoverCard.Root >
  );
}

export default ESPWebSocketSymbol;
