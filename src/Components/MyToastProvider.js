import React, { createContext, useState, useRef, useEffect } from 'react';

import { Spinner } from "@radix-ui/themes";
import * as Toast from "@radix-ui/react-toast";
import { Cross1Icon, CrossCircledIcon, CheckIcon, CheckCircledIcon } from '@radix-ui/react-icons';

import { v4 as uuidv4 } from 'uuid';


export const ToastContext = createContext(null);

const MyToast = ({ open, toastConfig }) => {
  if (!toastConfig) {
    return null;
  }

  const mode_to_icon = () => {
    if (toastConfig.state === "normal") {
      return (
        <></>
      );
    }
    else if (toastConfig.state === "working") {
      return (
        <Spinner size={3}/>
      );
    }
    else if (toastConfig.state === "success") {
      return (
        <CheckIcon className="w-5 h-5 text-green-500" />
      );
    }
    else if (toastConfig.state === "error") {
      return (
        <CheckCircledIcon className="w-5 h-5 text-red-500" />
      );
    }
  }

  return (
    <div>
      <Toast.Root
        className="grid grid-cols-[auto_max-content] items-center rounded-md bg-white p-[10px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] [grid-template-areas:_'title_action'_'description_action'] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
        open={open}
      >
        <div className='flex flex-1 justify-between items-center text-lg px-2'>

          <div className="text-[15px] font-medium text-slate12 [grid-area:_title] flex items-center">
            {toastConfig.message}
          </div>
          {mode_to_icon()}
        </div>

      </Toast.Root>
    </div>
  )
}

const MyToastProvider = ({ children }) => {

  const toast_timed_delay = 5000;

  const toast_max = 8;
  const [toastOpens, setToastOpens] = useState(Array(toast_max).fill(false));
  const [toastDatas, setToastDatas] = useState(Array(toast_max).fill(null));
  const setToastOpen = (index, value) => {
    setToastOpens(prev => {
      const newToasts = [...prev]; // Create a new array copy
      newToasts[index] = value;    // Update the value at the specified index
      return newToasts;            // Return the new array to trigger a re-render
    });
  };

  const setToastData = (index, data) => {
    setToastDatas(prev => {
      const newToastData = [...prev]; // Create a new array copy
      newToastData[index] = data;     // Update the data at the specified index
      return newToastData;            // Return the new array to trigger a re-render
    });
  };

  const find_next_index = (index) => {
    let new_index = index;
    let count = 0;
    while (toastOpens[new_index]) {
      new_index = (new_index + 1) % toast_max;
      count++;
      if (count > toast_max) {
        return -1;
      }
    }
    return new_index;
  }

  const create_toast = (message, state) => {
    if (!state) {
      state = "normal";
    }

    let current_toast_index = find_next_index(0);

    setToastData(current_toast_index, {
      state: state,
      message: message,
    });

    setToastOpen(current_toast_index, true);
    setTimeout(() => {
      setToastOpen(current_toast_index, false);

    }, toast_timed_delay);

    const setState = (current_toast_index) => {
      return (new_state) => {
        setToastData(current_toast_index, {
          state: new_state,
          message: message,
        })
      }
    }

    //return setState
    return { setState: setState(current_toast_index) };
  }




  return (
    <Toast.Provider swipeDirection="right">
      <ToastContext.Provider value={{
        create_toast: create_toast,
      }}>

        {children}
      </ToastContext.Provider>


      {
        toastOpens.map((open, index) => {
          return (
            <MyToast
              key={index}
              open={open}
              toastConfig={toastDatas[index]}
            >
              {toastDatas[index] ? toastDatas[index].message : ""}
            </MyToast>
          )
        })
      }
      <Toast.Viewport className="fixed bottom-0 right-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-2.5 p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]" />
    </Toast.Provider>
  );
};


export default MyToastProvider;