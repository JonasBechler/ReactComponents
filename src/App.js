import React, { useState } from 'react';

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

import WifiSettings from './Components/WifiSettings.js';
import MyTabs from './Components/MyTabs.js';
import MyCollapsible from './Components/MyCollapsible.js';

import SettingsGeneratorExample from './Components/SettingsGeneratorExample.js';

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
      right={<div>Right</div>}
    >
      <MyScrollArea>
        <div className='flex flex-wrap w-full h-full justify-center items-center'>

          <TemplateContainer name='ScrollArea'>
            <MyScrollArea>
              <div className='border-2 border-black'>
                <div className='bg-blue-500 p-4 m-2 text-white'>Component 1</div>
                <div className='bg-blue-500 p-4 m-2 text-white'>Component 2</div>
                <div className='bg-blue-500 p-4 m-2 text-white'>Component 3</div>

              </div>
            </MyScrollArea>
          </TemplateContainer>

          <TemplateContainer name='HorizontalTouchScroll'>
            <HorizontalTouchScroll
              children_list={[
                <div className='flex align-center justify-center bg-blue-500 h-full w-full text-white'>Component 1</div>,
                <div className='flex align-center justify-center bg-blue-500 h-full w-full text-white'>Component 2</div>,
                <div className='flex align-center justify-center bg-blue-500 h-full w-full text-white'>Component 3</div>,
                <div className='flex align-center justify-center bg-blue-500 h-full w-full text-white'>Component 4</div>,
                <div className='flex align-center justify-center bg-blue-500 h-full w-full text-white'>Component 5</div>
              ]}
              onScrollChange={(index) => console.log(index)}
            />
          </TemplateContainer>

          <TemplateContainer name='HoverInfo'>
            <HoverInfo
              title={"Info Title"}
              info={"Info Info"}
            />
          </TemplateContainer>

          <TemplateContainer name='MyTabs'>
            <MyTabs
              values={["Tab 1", "Tab 2", "Tab 3"]}
              contents={[
                <div className='bg-blue-500 p-4 m-2 text-white'>Tab 1 Content</div>,
                <div className='bg-blue-500 p-4 m-2 text-white'>Tab 2 Content</div>,
                <div className='bg-blue-500 p-4 m-2 text-white'>Tab 3 Content</div>
              ]}
            />
          </TemplateContainer>

          <TemplateContainer name='MyCollapsible'>
            <MyCollapsible
              title={"Collapsible Title"}
              info={"Collapsible Info"}
              children={<div className='bg-blue-500 p-4 m-2 text-white'>Collapsible Content</div>}
            />
          </TemplateContainer>

          

          <TemplateContainer name='MyLabel'>
            <MyLabel
              name={"My Select"}
              id={"select_input"}
              info={"My Select Info"}
            >
              <MySelect
                option_values={["option1", "option2", "option3"]}
                option_displays={["Option 1", "Option 2", "Option 3"]}
                placeholder={"Select"}
                value={selectInput}
                setValue={setSelectInput}
              />
            </MyLabel>

            <MyLabel
              name={"Bool Input"}
              id={"bool_input"}
            >
              <BoolInput
                id={"bool_input"}
                value={boolInput}
                setValue={setBoolInput}
              />
            </MyLabel>

            <MyLabel
              name={"String Input"}
              id={"text_input_string"}
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

          <TemplateContainer name='MyDialog'>
            <MyDialog
              title={"Dialog Title"}
            >
              <div className='border-2 border-black'>
                x                  <div className='bg-blue-500 p-4 m-2 text-white'>Component 1</div>
                <div className='bg-blue-500 p-4 m-2 text-white'>Component 2</div>
                <div className='bg-blue-500 p-4 m-2 text-white'>Component 3</div>
              </div>
            </MyDialog>
          </TemplateContainer>



          <TemplateContainer name="WifiSettings">
            <WifiSettings
              available_ssids={["ssid1", "ssid2", "ssid3"]}
              onSave={(data) => console.log(data)}
            />
          </TemplateContainer>

          <TemplateContainer name='TouchTabs'>
            <TouchTabs />
          </TemplateContainer>



          <TemplateContainer name='SettingsGeneratorExample'>
            <SettingsGeneratorExample />
          </TemplateContainer>
        </div>
      </MyScrollArea>
    </Header>
  );
}

export default App;
