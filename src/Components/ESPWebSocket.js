import React, { useEffect, useState, forwardRef, createContext, useContext, useRef } from 'react';
import { ToastContext } from './MyToastProvider';


var W3CWebSocket = require('websocket').w3cwebsocket;

export const ESPContext = createContext(null);

const ESPWebSocket = ({ ip, onReceiveData, children }) => {
  const toast_context = useContext(ToastContext);
  if (ip === undefined) {
    ip = `ws://${window.location.hostname}/ws`
    //console.log("IP not provided, using default IP: ", ip);
  }

  const wsRef = useRef(null);
  const [wsConnected, setWsConnected] = useState(false);
  const [lastPing, setLastPing] = useState(null);


  const retry_interval = 5000;

  const [settings, setSettings] = React.useState(null);
  const [settingsConfig, setSettingsConfig] = React.useState(null);
  const [info, setInfo] = React.useState(null);


  const toastRef = useRef(null); // Mutable reference
  const sendQueueRef = useRef([]); // Mutable reference
  const [sendQueue, setSendQueue] = React.useState([]);



  // Function to connect to WebSocket
  const connectWebSocket = () => {
    if (wsRef.current) {
      wsRef.current.close();
    }

    var socket = new W3CWebSocket(ip, 'echo-protocol');

    socket.onopen = () => {
      console.log('Websocket connected');
      toast_context.create_toast("Websocket connected", "success");
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
      else if (json_data.type === "ack") {
        console.log("Ack received");
        
        if (toastRef.current !== null) {
          toastRef.current.setState("success");
        } else {
          console.log("Toast is null when ack received");
        }
        //toast.setState("success");
      }

      else {
        //setSerialData((prevData) => prevData + event.data);  // Append incoming data
        console.log(json_data);
      }
    };

    // Handle WebSocket close event and auto-reconnect
    socket.onclose = () => {
      console.log('WebSocket connection closed');

      toast_context.create_toast("Websocket connection closed", "error");


      setWsConnected(false);
      setTimeout(() => connectWebSocket(), retry_interval);
    };

    // Handle WebSocket connection loss
    socket.onerror = (error) => {
      //setWsConnected(false);
      //setTimeout(() => connectWebSocket(), retry_interval);
    };

    wsRef.current = socket;
  };



  // Establish WebSocket connection when component mounts
  useEffect(() => {
    setTimeout(() => connectWebSocket(), 10);

    return () => {
      if (wsRef.current) {
        wsRef.current.close();  // Close WebSocket connection on component unmount
      }
    };
  }, []);  // Run on component mount (empty dependency array)


  useEffect(() => {
    let handle_queue_interval = setInterval(() => {
      
      if (sendQueueRef.current.length > 0) {
        let send_queue = [...sendQueueRef.current];
        let send_command = send_queue.shift();
        wsRef.current.send(JSON.stringify(send_command));
        sendQueueRef.current = send_queue;
      }
    }, 1000);

    return () => {
      clearInterval(handle_queue_interval);
    }
  }, []);




  const sendData = (type, data) => {
    let send_command = {
      type: type,
      data: data
    }
    sendQueueRef.current.push(send_command);


  }
  
  const sendSettings = (id, settings) => {
    let send_settings = {
      type: "settings",
      id: id,
      data: settings
    }
    
    console.log("Sending settings: ", send_settings);
    
    sendQueueRef.current.push(send_settings);

    let new_toast = toast_context.create_toast("Sending data", "working");
    toastRef.current = new_toast; // Update the ref
  }


  return (
    <ESPContext.Provider value={{
      wsConnected: wsConnected,
      settings: settings,
      settingsConfig: settingsConfig,
      info: info,
      wsRef: wsRef,
      closeWebSocket: () => wsRef.current.close(),
      sendData: sendData,
      sendSettings: sendSettings,

    }}>

      {children}

    </ESPContext.Provider>
  );
}



export default ESPWebSocket;
