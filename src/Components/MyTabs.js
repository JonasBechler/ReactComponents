import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';

const MyTabs = ({ tab, setTab, values, display_values, contents }) => {
    if (values === undefined) {
        values = ['tab1', 'tab2'];
    }
    if (contents === undefined) {
        contents = [
            <div>ABC</div>,
            <div>DEF</div>
        ];
    }

    const[_tab, _setTab] = React.useState(values[0]);

    return (
        <Tabs.Root
            className="
            flex flex-grow flex-col 
            w-full h-full
            "
            defaultValue={values[0]}
            value={(tab!==undefined)?tab:_tab}
            onValueChange={setTab!==undefined?setTab:_setTab}
        >
            <Tabs.List
                className="
                flex 
                ">
                {
                    values.map((value, index) => (
                        <Tabs.Trigger
                            className="
                            flex flex-grow 
                            px-5 
                            h-[45px] 
                            w-full
                            items-center justify-center 
                            text-[15px] 
                            select-none 
                            hover:text-violet11 
                            data-[state=active]:text-violet11 
                            data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] 
                            data-[state=active]:shadow-current 
                            data-[state=active]:focus:relative 
                            data-[state=active]:focus:border-b-1
                            
                            outline-none 
                            cursor-default"
                            key={index}
                            value={value}
                        >
                            {display_values?display_values[index]:value}
                        </Tabs.Trigger>
                    ))
                }


            </Tabs.List>
            <div className='grow'>
                <div className='
                flex
                w-full h-full
                justify-center items-center

                '>
                    {
                        values.map((value, index) => (

                            <Tabs.Content
                                className='
                                h-full
                                w-full
                                '

                                value={value}
                                key={index}
                            >
                                <div
                                    className='
                                    flex flex-grow 
                                    w-full h-full                                
                                    '>

                                    {contents[index]}
                                </div>
                            </Tabs.Content>
                        ))
                    }
                </div>
            </div>
        </Tabs.Root>
    );
}

export default MyTabs;
