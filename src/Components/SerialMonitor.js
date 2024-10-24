import React, { useState, useEffect, useRef } from 'react';

const SerialMonitor = () => {
  const [serialData, setSerialData] = useState('');  // State to hold serial data
  const [ws, setWs] = useState(null);                // State to hold WebSocket connection
  const [baudRate, setBaudRate] = useState(9600);    // State for selected baud rate
  const serialOutputRef = useRef(null);              // Ref to serial output div for auto-scrolling

  

  // Handle baud rate change
  const handleBaudRateChange = (event) => {
    const selectedBaudRate = parseInt(event.target.value);
    setBaudRate(selectedBaudRate);  // Update baud rate state

    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(`baud:${selectedBaudRate}`);
      alert(`Requested baud rate change to ${selectedBaudRate}`);
    } else {
      alert('WebSocket is not connected');
    }
  };

  // Scroll to the bottom of the serial output when new data is added
  useEffect(() => {
    if (serialOutputRef.current) {
      serialOutputRef.current.scrollTop = serialOutputRef.current.scrollHeight;
    }
  }, [serialData]);  // Trigger on serialData update

  // Establish WebSocket connection when component mounts
  useEffect(() => {
    connectWebSocket();
    console.log('WebSocket connection established');
    
    return () => {
      if (ws) {
        ws.close();  // Clean up WebSocket connection when component unmounts
      }
    };
  }, []);  // Run on component mount (empty dependency array)

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div
        id="serial-output"
        ref={serialOutputRef}
        style={{
          width: '80%',
          height: '300px',
          border: '1px solid #000',
          overflowY: 'scroll',
          margin: '20px auto',
          padding: '10px',
          backgroundColor: '#f1f1f1',
        }}
      >
        {serialData}
      </div>

      {/* Dropdown for selecting baud rate */}
      <div style={{ margin: '20px' }}>
        <label htmlFor="baudRate">Select Baud Rate: </label>
        <select
          id="baudRate"
          value={baudRate}
          onChange={handleBaudRateChange}
          style={{ padding: '5px', fontSize: '16px' }}
        >
          <option value="9600">9600 Baud</option>
          <option value="14400">14400 Baud</option>
          <option value="19200">19200 Baud</option>
          <option value="38400">38400 Baud</option>
          <option value="57600">57600 Baud</option>
          <option value="115200">115200 Baud</option>
          <option value="230400">230400 Baud</option>
          <option value="460800">460800 Baud</option>
        </select>
      </div>
    </div>
  );
};

export default SerialMonitor;
