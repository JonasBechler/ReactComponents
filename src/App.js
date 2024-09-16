import React, { useState } from 'react';
import { CheckIcon } from '@radix-ui/react-icons';
import { HomeIcon, GearIcon, PlusIcon } from '@radix-ui/react-icons';


import Header from './Components/Header.js';

import TemplateContainer from './Components/TemplateContainer.js';
import BoolInput from './Components/BoolInput.js';
import TextInput from './Components/TextInput.js';
import NumberInput from './Components/NumberInput.js';
import RandomColorBG from './Components/RandomColorBG.js';

import MyScrollArea from './Components/MyScrollArea.js';
import MyDialog from './Components/MyDialog.js';
import MyLabel from './Components/MyLabel.js';
import MySelect from './Components/MySelect.js';

import TouchTabs from './Components/TouchTabs.js';

import HorizontalTouchScroll from './Components/HorizontalTouchScroll.js';
import HoverInfo from './Components/HoverInfo.js';

import WifiSettingsExample from './Components/WifiSettingsExample.js';
import MyTabs from './Components/MyTabs.js';
import MyCollapsible from './Components/MyCollapsible.js';

import SettingsGeneratorExample from './Components/SettingsGeneratorExample.js';

import MyChartExample from './Components/MyChartExample.js';

import BatteyState from './Components/BatteryState.js';


function App() {
  const [stringInput, setStringInput] = useState("");
  const [intInput, setIntInput] = useState("");
  const [numberInput, setNumberInput] = useState(5);
  const [floatInput, setFloatInput] = useState("");
  const [ipInput, setIpInput] = useState("");
  const [boolInput, setBoolInput] = useState(false);
  const [selectInput, setSelectInput] = useState("");

  return (
    <Header
      left={<div>Header</div>}
      center={<div>All Components</div>}
      right={
        <BatteyState
          value={100}
          unit={"%"}
        />
      }
    >
      <MyScrollArea>
        <div className='flex flex-wrap w-full h-full justify-center items-center'>

          <TemplateContainer name='Scrolls'>
            <MyDialog
              title={"MyScrollArea"}
            >
              <MyScrollArea>
                  <div className='bg-blue-500 p-4 m-2 h-40 text-white'>Component 1</div>
                  <div className='bg-blue-500 p-4 m-2 h-40 text-white'>Component 2</div>
                  <div className='bg-blue-500 p-4 m-2 h-40 text-white'>Component 3</div>
                  </MyScrollArea>
            </MyDialog>
            <MyDialog
              title={"HorizontalTouchScroll"}
            >
              <HorizontalTouchScroll
                children_list={[
                  <div className='flex flex-grow align-center justify-center bg-blue-500 h-full w-full text-white'>Component 1</div>,
                  <div className='flex flex-grow align-center justify-center bg-blue-500 h-full w-full text-white'>Component 2</div>,
                  <div className='flex flex-grow align-center justify-center bg-blue-500 h-full w-full text-white'>Component 3</div>,
                  <div className='flex flex-grow align-center justify-center bg-blue-500 h-full w-full text-white'>Component 4</div>,
                  <div className='flex flex-grow align-center justify-center bg-blue-500 h-full w-full text-white'>Component 5</div>
                ]}
                onScrollChange={(index) => console.log(index)}
              />
            </MyDialog>
          </TemplateContainer>
          <TemplateContainer name='Views'>
            <MyDialog
              title={"MyTabs"}
            >
              <MyTabs
                values={["Tab 1", "Tab 2", "Tab 3"]}
                contents={[
                  <div className='flex w-full h-full justify-center items-center'>Tab 1 Content</div>,
                  <div className='flex w-full h-full justify-center items-center bg-blue-500 text-white'>Tab 2 Content</div>,
                  <div className='flex w-full h-full justify-center items-center bg-blue-500 text-white'>Tab 3 Content</div>,
                ]}
              />

            </MyDialog>
            <MyDialog
              title={"TouchTabs"}
            >
              <TouchTabs
                values={['Tab 1', 'Tab 2', 'Tab 3']}
                icons={[<HomeIcon />, <GearIcon />, <PlusIcon />]}
                contents={[
                  <div className='flex w-full h-full justify-center items-center bg-blue-500 text-white'>Tab 1 Content</div>,
                  <div className='flex w-full h-full justify-center items-center bg-blue-500 text-white'>Tab 2 Content</div>,
                  <div className='flex w-full h-full justify-center items-center bg-blue-500 text-white'>Tab 3 Content</div>,
                ]}
              />

            </MyDialog>
          </TemplateContainer>

          <TemplateContainer name='Components'>
            <HoverInfo
              title={"Info Title"}
              info={"Info Info"}
            />
            <MyCollapsible
              name={"MyCollapsible"}
              info={"MyCollapsible Info"}
            >
              <div className='bg-blue-500 text-white'>Collapsible Content</div>
            </MyCollapsible>
            <MyDialog
              title={"MyDialog"}
              >
              <div className='flex w-full h-full bg-blue-500 text-white'>Dialog Content</div>
              </MyDialog>
            
          </TemplateContainer>


          <TemplateContainer name='MyLabels'>
            <MyLabel
              name={"Bool Input"}
              id={"bool_input"}
              info={"Bool Input Info"}
            >
              <BoolInput
                id={"bool_input"}
                value={boolInput}
                setValue={setBoolInput}
              />
            </MyLabel>

            <MyCollapsible
              name={"My Collapsible"}
              info={"Collapsible Info"}
            >
              <div className='bg-blue-500 text-white'>Collapsible Content</div>
            </MyCollapsible>

            <MyLabel
              name={"My Select"}
              id={"select_input"}
              info={"My Select Info"}
            >
              <MySelect
                option_values={["option1", "option2", "option3"]}
                option_texts={["Option 1", "Option 2", "Option 3"]}
                option_extras={[<CheckIcon />, <CheckIcon />, undefined]}
                placeholder={"Select"}
                value={selectInput}
                setValue={setSelectInput}
              />
            </MyLabel>


            <MyLabel
              name={"String Input"}
              id={"text_input_string"}
              info={"String Input Info"}
            >
              <TextInput
                id={"text_input_string"}
                type={"string"}
                placeholder={"String Input"}
                value={stringInput}
                setValue={setStringInput}
              />
            </MyLabel>
            <MyLabel
              name={"Int Input"}
              id={"text_input_int"}
              info={"Int Input Info"}
            >
              <TextInput
                id={"text_input_int"}
                type={"int"}
                placeholder={"Int Input"}
                value={intInput}
                setValue={setIntInput}
              />
            </MyLabel>
            <MyLabel
              name={"Number Input"}
              id={"number_input"}
              info={"Number Input Info"}
            >
              <NumberInput
                increment={3}
                max={20}
                min={0}
                unit={"kg"}
                value={numberInput}
                setValue={setNumberInput}

              />
            </MyLabel>
            <MyLabel
              name={"Float Input"}
              id={"text_input_float"}

            >
              <TextInput
                id={"text_input_float"}
                type={"float"}
                placeholder={"Float Input"}
                value={floatInput}
                setValue={setFloatInput}
              />
            </MyLabel>
            <MyLabel
              name={"IP Input"}
              id={"text_input_ip"}
            >
              <TextInput
                id={"text_input_ip"}
                type={"ip"}
                placeholder={"IP Input"}
                value={ipInput}
                setValue={setIpInput}
              />
            </MyLabel>
          </TemplateContainer>
          



          <TemplateContainer name="WifiSettings & SettingsGeneratorExample">
            <WifiSettingsExample/>
            <SettingsGeneratorExample />
          </TemplateContainer>

          <TemplateContainer name='Chart'>
            <MyChartExample

              />
          </TemplateContainer>
        </div>
      </MyScrollArea>
    </Header>
  );
}

export default App;
