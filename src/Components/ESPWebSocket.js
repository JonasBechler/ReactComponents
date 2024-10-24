import React from 'react';

import { Link1Icon, QuestionMarkCircledIcon } from '@radix-ui/react-icons';

const ESPWebSocket = ({ title, info }) => {
  const [ws, setWs] = useState(null);

  // Function to connect to WebSocket
  const connectWebSocket = () => {
    //const socket = new WebSocket(`ws://${window.location.hostname}:81/`);
    const socket = new WebSocket(`ws://192.168.178.103/ws`);

    // WebSocket event listener for incoming messages
    socket.onmessage = (event) => {
      setSerialData((prevData) => prevData + event.data);  // Append incoming data
    };

    // Handle WebSocket close event and auto-reconnect
    socket.onclose = () => {
      console.log('WebSocket connection closed. Reconnecting in 3 seconds...');
      setTimeout(() => connectWebSocket(), 3000);  // Reconnect after 3 seconds
    };

    // Save the WebSocket connection to state
    setWs(socket);
  };

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

  // link in red or green based on connection status
  return (
    <div className='flex items-center justify-center'>
      <div className={ws ? 'text-green-500' : 'text-red-500'}>
        <Link1Icon className="w-5 h-5" />
      </div>
    </div>
  );
}

export default ESPWebSocket;
