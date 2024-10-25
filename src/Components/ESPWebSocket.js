import React, { useEffect, useState, forwardRef, useContext, createContext } from 'react';

import ESPWebSocketSymbol from './ESPWebSocketSymbol';

var W3CWebSocket = require('websocket').w3cwebsocket;

export const ESPContext = createContext(null);

const ESPWebSocket = forwardRef(({ children }, ref) => {

  const [ws, setWs] = useState(null);
  const [wsConnected, setWsConnected] = useState(false);
  const [lastPing, setLastPing] = useState(null);

  const ping_interval = 2500;
  const retry_interval = 2500;

  const [settings, setSettings] = React.useState(null);
	const [settingsConfig, setSettingsConfig] = React.useState(null);
	const [info, setInfo] = React.useState(null);


  // Function to connect to WebSocket
  const connectWebSocket = () => {
    //const socket = new WebSocket(`ws://${window.location.hostname}:81/`);

    var socket = new W3CWebSocket(`ws://192.168.178.105/ws`, 'echo-protocol');
    //const socket = new W3CWebSocket(`ws://192.168.178.105/ws`);

    socket.onopen = () => {
      console.log('Websocket connected');
      setWsConnected(true);
    };

    // WebSocket event listener for incoming messages
    socket.onmessage = (event) => {
      if (event.data === "ping") {
        let time = new Date().getTime();
        setLastPing(time);

        return;
      }

      let json_data = JSON.parse(event.data);

      

      if (json_data.type === "full_settings") {
        console.log("full settings received");


        setSettings(json_data.settings.settings);
        setSettingsConfig(json_data.settings.settings_config);
        setInfo(json_data.info);
      }

      else {
        //setSerialData((prevData) => prevData + event.data);  // Append incoming data
        console.log(json_data);
      }
    };

    // Handle WebSocket close event and auto-reconnect
    socket.onclose = () => {
      console.log('WebSocket connection closed.');
      setWsConnected(false);
      setTimeout(() => connectWebSocket(), retry_interval);
    };

    // Handle WebSocket connection loss
    socket.onerror = (error) => {
      console.log('WebSocket error: ', error);
      setWsConnected(false);
      setTimeout(() => connectWebSocket(), retry_interval);
    };



    // Save the WebSocket connection to state
    setWs(socket);
  };
  
  
  // Establish WebSocket connection when component mounts
  useEffect(() => {
    connectWebSocket();
    
    return () => {
      if (ws) {
        ws.close();  // Clean up WebSocket connection when component unmounts
      
      }
    };
  }, []);  // Run on component mount (empty dependency array)
  
  
  // start interval for ping check
  useEffect(() => {
    const interval = setInterval(() => {  
      if (lastPing && wsConnected) {
        const time = new Date().getTime() - lastPing;
  
        if (time > ping_interval) {
          console.log('Ping Timeout, the device is not responding');
          setWsConnected(false);
          setTimeout(() => connectWebSocket(), retry_interval);  // Reconnect after 3 seconds
          clearInterval(interval);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [lastPing]);

  // link in red or green based on connection status
  return (
    <ESPContext.Provider value={{ 
      wsConnected: wsConnected,
      settings: settings,
      settingsConfig: settingsConfig,
      info: info
    }}>
      {children}

    </ESPContext.Provider>
  );
}
);

export default ESPWebSocket;
