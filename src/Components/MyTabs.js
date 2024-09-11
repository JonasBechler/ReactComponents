import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';

const MyTabs = ({ values, contents }) => {
    if (values === undefined) {
        values = ['tab1', 'tab2'];
    }
    if (contents === undefined) {
        contents = [
            <div>ABC</div>,
            <div>DEF</div>
        ];
    }

    return (
        <Tabs.Root
            className="flex flex-col w-full h-full"
            defaultValue={values[0]}
        >
            <Tabs.List className="flex border-b border-mauve6">
                {
                    values.map((value, index) => (
                        <Tabs.Trigger
                            className="px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
                            key={index}
                            value={value}
                        >
                            {value}
                        </Tabs.Trigger>
                    ))
                }


            </Tabs.List>
            {
                values.map((value, index) => (

                    <Tabs.Content
                        className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
                        value={value}
                    >
                        {contents[index]}
                    </Tabs.Content>
                ))
            }
        </Tabs.Root>
    );
}

export default MyTabs;
