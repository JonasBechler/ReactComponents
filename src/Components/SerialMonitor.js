import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';


const SerialMonitor = forwardRef(({ onSend }, ref) => {

  const [lines, setLines] = useState([["Online Serial Monitor", "-- " + new Date().toLocaleTimeString()]]);  // Serial output lines

  const serialOutputRef = useRef(null);   // Ref to serial output div for auto-scrolling

  const [autoScroll, setAutoScroll] = useState(true);  // Auto-scroll state

  const [sendData, setSendData] = useState("");

  useImperativeHandle(ref, () => {
    return {
      appendNewLine: (new_line, type) => {
        // Append a new line to the serial output
        // also remove the first line if the number of lines exceeds 1000
        let new_date = new Date().toLocaleTimeString();
        let new_date_io = "";
        if (type === "input") {
          new_date_io = "-> ";
        }
        else if (type === "output") {
          new_date_io = "<- ";
        }
        else {
          new_date_io = "   ";
        }
        new_date_io = new_date_io + new_date;


        if (lines.length > 1000) {
          setLines([...lines.slice(1), [new_line, new_date_io]]);
        }
        else {
          setLines([...lines, [new_line, new_date_io]]);
        }
      },
    };
  });

  // Scroll to the bottom of the serial output when new data is added
  useEffect(() => {
    if (serialOutputRef.current && autoScroll) {
      serialOutputRef.current.scrollTop = serialOutputRef.current.scrollHeight;
    }
  }, [lines, autoScroll]);  // Trigger on serialData update

  return (
    <div className="flex
      flex-col 
      w-[90%] h-[90%]
      items-center justify-between
      gap-2
      "
    >
      <div
        id="serial-output"
        ref={serialOutputRef}
        className="flex 
          flex-col 
          w-full h-full
          border border-black 
          overflow-y-scroll 
          overflow-x-scroll
          p-2 
          bg-gray-200"
      >
        {lines.map((line, index) => {
          return (
            <div
              key={index}
              className="flex px-2 justify-left align-middle text-left gap-5 text-xs"
            >
              <div className="text-gray-500 w-[80px] font-mono whitespace-nowrap">
                {line[1]}
              </div>
              <div className="text-black font-mono whitespace-nowrap">
                {line[0]}
              </div>
            </div>
          );
        })}
      </div>

      <div className="
        flex 
        w-full h-8 
        justify-center items-center 
        gap-3
        ">
        <input
          type="text"
          className="bg-gray-200 flex-grow px-2"
          placeholder="Enter text here"
          value={sendData}
          onChange={(e) => setSendData(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && onSend && sendData !== "") {
              onSend(sendData);
              setSendData("");
            }
          }}
        />
        <button className="bg-blue-500 text-white px-2" onClick={
          (onSend && sendData !== "")
            ?
            () => {
              onSend(sendData)
              setSendData("")
            }
            :
            () => console.log("Send button clicked")}>
          Send
        </button>
      </div>


      <div className="
          flex 
          w-full h-8 
          justify-end items-center 
          gap-3
          ">
        <label className="text-black whitespace-nowrap">
          Auto-scroll
        </label>
        <input
          className='w-4 h-4'
          type="checkbox"
          checked={autoScroll}
          onChange={(e) => setAutoScroll(e.target.checked)}
        />
      </div>






    </div>
  );
});

export default SerialMonitor;
