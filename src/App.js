import logo from './logo.svg';

import TemplateContainer from './Components/TemplateContainer.js';
import BoolInput from './Components/BoolInput.js';
import TextInput from './Components/TextInput.js';
import RandomColorBG from './Components/RandomColorBG.js';

import MyScrollArea from './Components/MyScrollArea.js';
import MyDialog from './Components/MyDialog.js';
import MyLabel from './Components/MyLable.js';
import MySelect from './Components/MySelect.js';

function App() {

  return (
    <div className="flex flex-col">

      <div className="text-center text-4xl">
        All Components
      </div>

      <div className='flex flex-wrap w-full justify-center'>

        <TemplateContainer name='MySelect'>
          <MySelect
            option_values={["option1", "option2", "option3"]}
            option_displays={["Option 1", "Option 2", "Option 3"]}
            placeholder={"Select"}
            value={""}
            setValue={() => {}}
          />
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
            name={"Bool Input"}
            id={"bool_input"}
          >
            <BoolInput />
            
          </MyLabel>
          <MyLabel
            name={"String Input"}
            id={"text_input_string"}
          >
            <TextInput 
            id={"text_input_string"}
            type={"string"}
            placeholder={"String Input"}
            value={""}
            setValue={() => {}}
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
            value={""}
            setValue={() => {}}
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
            value={""}
            setValue={() => {}}
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
            value={""}
            setValue={() => {}}
            />
          </MyLabel>
        </TemplateContainer>
      </div>
    </div>
  );
}

export default App;
