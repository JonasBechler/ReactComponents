import React, { useState } from 'react';

import Header from './Components/Header.js';

import TemplateContainer from './Components/TemplateContainer.js';
import BoolInput from './Components/BoolInput.js';
import TextInput from './Components/TextInput.js';
import NumberInput from './Components/NumberInput.js';
import RandomColorBG from './Components/RandomColorBG.js';

import MyScrollArea from './Components/MyScrollArea.js';
import MyDialog from './Components/MyDialog.js';
import MyLabel from './Components/MyLable.js';
import MySelect from './Components/MySelect.js';

import TouchTabs from './Components/TouchTabs.js';

import HorizontalTouchScroll from './Components/HorizontalTouchScroll.js';
import HoverInfo from './Components/HoverInfo.js';

function App() {
  const [stringInput, setStringInput] = useState("");
  const [intInput, setIntInput] = useState("");
  const [numberInput, setNumberInput] = useState(5);
  const [floatInput, setFloatInput] = useState("");
  const [ipInput, setIpInput] = useState("");
  const [boolInput, setBoolInput] = useState(false);
  const [selectInput, setSelectInput] = useState("");

  return (
    <div className="flex flex-col">
      <Header
        left={<div>Header</div>}
        center={<div>All Components</div>}
        right={<div>Right</div>}
      >

        <div className='flex flex-wrap w-full justify-center'>

          <TemplateContainer name='Still Empty'>

          </TemplateContainer>

          <TemplateContainer name='RandomColorBG'>
            <RandomColorBG />
          </TemplateContainer>

          <TemplateContainer name='ScrollArea'>
            <MyScrollArea>
              <div className='border-2 border-black'>
                <div className='bg-blue-500 p-4 m-2 text-white'>Component 1</div>
                <div className='bg-blue-500 p-4 m-2 text-white'>Component 2</div>
                <div className='bg-blue-500 p-4 m-2 text-white'>Component 3</div>

              </div>
            </MyScrollArea>
          </TemplateContainer>

          <TemplateContainer name='MyDialog'>
            <MyDialog
              title={"Dialog Title"}
              info={"Dialog Info"}
            >
              <div className='border-2 border-black'>
                <div className='bg-blue-500 p-4 m-2 text-white'>Component 1</div>
                <div className='bg-blue-500 p-4 m-2 text-white'>Component 2</div>
                <div className='bg-blue-500 p-4 m-2 text-white'>Component 3</div>
              </div>
            </MyDialog>
          </TemplateContainer>
          <TemplateContainer name='MyLabel'>
            <MyLabel
              name={"My Select"}
              id={"select_input"}
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

          <TemplateContainer name='TouchTabs'>
            <TouchTabs />
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
        </div>

      </Header>
    </div>
  );
}

export default App;
