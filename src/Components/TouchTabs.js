import React from 'react';
import { HomeIcon, GearIcon, Cross1Icon } from '@radix-ui/react-icons'
import * as Tabs from '@radix-ui/react-tabs';


import MyScrollArea from './MyScrollArea';


/* 

.TabsRoot {
    display: flex;
    flex-direction: row;
    height: 100vh;
}

.TabsList {
    padding: 10px 10px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid lightgray;
}

.TabsTrigger {
    background-color: white;
    border: 1px solid lightgray;
    padding: 15px 15px;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    line-height: 1;
    color: black;
    user-select: none;
    border-radius: 6px;
}

.TabsIcon {
    width: 30px;
    height: 30px;
}

.TabsTrigger[data-state='active'] {
    box-shadow: inset 0 -2px 0 0 currentColor, 0 1px 0 0 currentColor;
}

.TabsTrigger:focus {
    position: relative;
}

.TabsContent {
    flex-grow: 1;
    padding: 20px;
    background-color: white;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    outline: none;
}


*/


const TouchTabs = ({ values, icons, contents }) => {
  if (values === undefined) {
    console.log('TouchTabs: values is undefined');
    return;
  }
  if (icons === undefined) {
    icons = [];
  }
  if (contents === undefined) {
    contents = [];
  }


  return (
    <Tabs.Root className='flex h-full w-full bg-yellow-200'
      defaultValue={values[0]}>

      <Tabs.List className="flex flex-col 
      border-r-2 border-black 
      p-2">
        {
          values.map((value, index) => {
            return (
              <Tabs.Trigger className="
              flex
              justify-center items-center
              mb-2
              border-blue-500
              rounded-lg
              p-1
              shadow-black 
              shadow-[0_1px_3px] 
              "
                key={index}
                value={value}
              >

                {
                  icons[index] ?
                    (React.cloneElement(icons[index], { className: "w-10 h-10" }))
                    :
                    (<Cross1Icon className='w-10 h-10' />)
                }

              </Tabs.Trigger>
            );
          })
        }

      </Tabs.List>
      {
        values.map((value, index) => {
          return (
            <Tabs.Content className='grow justify-center items-center bg-yellow-500'
              key={index}
              value={value}>
                {contents[index] ? contents[index] : 'Not Found'}
            </Tabs.Content>
          );
        })
      }
    </Tabs.Root>
  );
}

export default TouchTabs;