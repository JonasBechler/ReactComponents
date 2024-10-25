import React, { useEffect, useState, forwardRef, useContext } from 'react';

import { Link1Icon, QuestionMarkCircledIcon } from '@radix-ui/react-icons';

import { ESPContext } from './ESPWebSocket.js';

const ESPWebSocketSymbol = () => {
  const esp_context = useContext(ESPContext);

  





  // link in red or green based on connection status
  return (
    <div className='flex items-center justify-center'>
      <div className={esp_context.wsConnected ? 'text-green-500' : 'text-red-500'}>
        <Link1Icon className="w-5 h-5" />
      </div>
    </div>
  );
}

export default ESPWebSocketSymbol;
