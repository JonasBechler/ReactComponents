import React, { useEffect, useState, forwardRef, createContext } from 'react';

var W3CWebSocket = require('websocket').w3cwebsocket;

export const ESPContext = createContext(null);

const ESPWebSocket = forwardRef(({ ip, onReceiveData, children }, ref) => {


  if (ip === undefined) {
    ip = `ws://${window.location.hostname}/ws`
    //console.log("IP not provided, using default IP: ", ip);
  }

  const [ws, setWs] = useState(null);
  const [wsConnected, setWsConnected] = useState(false);
  const [lastPing, setLastPing] = useState(null);


  const ping_timeout = 8000;
  const retry_interval = 5000;

  const [settings, setSettings] = React.useState(null);
  const [settingsConfig, setSettingsConfig] = React.useState(null);
  const [info, setInfo] = React.useState(null);


  // Function to connect to WebSocket
  const connectWebSocket = () => {

    if (ws) {
      ws.close();
    }

    var socket = new W3CWebSocket(ip, 'echo-protocol');

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
        //console.log("full settings received");
        //console.log(json_data);


        setSettings(json_data.settings.settings);
        setSettingsConfig(json_data.settings.settings_config);
        setInfo(json_data.info);
      }

      else if (json_data.type === "info") {
        //console.log("info received");
        //console.log(json_data);
        
        setInfo(json_data.data);
      }

      else if (json_data.type === "data") {
        if (onReceiveData) {
          onReceiveData(json_data.data);
        }
      }

      else {
        //setSerialData((prevData) => prevData + event.data);  // Append incoming data
        console.log(json_data);
      }
    };

    // Handle WebSocket close event and auto-reconnect
    socket.onclose = () => {
      console.log('WebSocket connection closed');
      setWsConnected(false);
      setTimeout(() => connectWebSocket(), retry_interval);
    };

    // Handle WebSocket connection loss
    socket.onerror = (error) => {
      //setWsConnected(false);
      //setTimeout(() => connectWebSocket(), retry_interval);
    };

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

        if (time > ping_timeout) {
          console.log('Ping Timeout, the device is not responding');
          setWsConnected(false);
          ws.close();
          //setTimeout(() => connectWebSocket(), retry_interval);  // Reconnect after 3 seconds
          clearInterval(interval);
        }
      }
    }, 1000);

    //setReconnectInterval(interval);

    return () => clearInterval(interval);
  }, [lastPing]);

  const sendData = (type, data) => {
    let data_json = {
      type: type,
      data: data
    }

    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(data_json));
      //console.log("Data sent: ", data_json);

      return true;
    }
    return false;
  }

  const sendSettings = (id, settings) => {
    let data_json = {
      type: "settings",
      id: id,
      data: settings
    }

    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(data_json));
      console.log("Settings sent: ", data_json);

      return true;
    }
    return false;
  }


  return (
    <ESPContext.Provider value={{
      wsConnected: wsConnected,
      settings: settings,
      settingsConfig: settingsConfig,
      info: info,
      ws: ws,
      closeWebSocket: () => ws.close(),
      sendData: sendData,
      sendSettings: sendSettings,

    }}>

      {children}

    </ESPContext.Provider>
  );
}
);

export default ESPWebSocket;
