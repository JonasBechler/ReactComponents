import React, { useState, useEffect, useRef } from 'react';

const SerialMonitor = () => {
  const [serialData, setSerialData] = useState('');  // State to hold serial data
  const [baudRate, setBaudRate] = useState(9600);    // State for selected baud rate
  const serialOutputRef = useRef(null);              // Ref to serial output div for auto-scrolling

  

  // Scroll to the bottom of the serial output when new data is added
  useEffect(() => {
    if (serialOutputRef.current) {
      serialOutputRef.current.scrollTop = serialOutputRef.current.scrollHeight;
    }
  }, [serialData]);  // Trigger on serialData update

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
    </div>
  );
};

export default SerialMonitor;
