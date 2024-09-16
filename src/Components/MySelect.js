import React from 'react';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

import { clickable_classnames } from './BaseStyles';
const MySelect = ({ option_values, option_texts, option_extras, placeholder, value, setValue }) => {
    if (option_values === undefined) {
        option_values = [];
    }
    if (option_texts === undefined) {
        option_texts = [];
    }
    if (option_extras === undefined) {
        option_extras = [];
    }

    return (

        <Select.Root
            value={value}
            onValueChange={setValue}
            className="
        inline-flex 
        flex-1 
        flex-col">
            <Select.Trigger
                className={`
                flex 
                flex-grow 
                items-center justify-between 
                pl-[25px] 
                pr-[10px] 
                leading-none 
                h-8 
                data-[placeholder]:text-violet9 
                rounded-md 
                text-lg
                `+ clickable_classnames}
            >
                <Select.Value placeholder={placeholder} />
                <Select.Icon className="text-violet11">
                    <ChevronDownIcon />
                </Select.Icon>
            </Select.Trigger>
            <Select.Portal className="">
                <Select.Content className={`
                flex                 
                overflow-hidden 
                w-full 

                bg-white 
                rounded-md
                text-lg
                `+ clickable_classnames}>
                    <Select.ScrollUpButton className="
                    flex 
                    items-center 
                    justify-center 
                    bg-white 
                    text-violet11 
                    cursor-default">
                        <ChevronUpIcon />
                    </Select.ScrollUpButton>
                    <Select.Viewport>
                        {option_values.map((option, option_index) => {
                            return (
                                <div
                                    key={option + "_" + option_index}
                                >

                                    <SelectItem
                                        value={option_values[option_index]}
                                        text={option_texts[option_index]}
                                        extra={option_extras[option_index]}
                                    />
                                </div>

                            );
                        }
                        )}


                    </Select.Viewport>
                    <Select.ScrollDownButton
                        className="flex 
                    items-center justify-center h-[25px] bg-white text-violet11 
                    cursor-default">
                        <ChevronDownIcon />
                    </Select.ScrollDownButton>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    );
}



const SelectItem = React.forwardRef(({ text, extra, ...props }, forwardedRef) => {
    return (
        <Select.Item
            className={`
                'text-lg 
                leading-none 
                text-violet11 
                rounded-md 
                w-full
                flex 
                items-center 
                justify-between
                h-8
                pr-[35px] pl-[25px] 
                relative 
                select-none 
                data-[disabled]:text-mauve8 
                data-[disabled]:pointer-events-none 
                data-[highlighted]:outline-none 
                data-[highlighted]:bg-violet9 
                data-[highlighted]:text-violet1
                `}
            {...props}
            ref={forwardedRef}
        >
            <Select.ItemText>
                {text}
            </Select.ItemText>
            <div className="flex">
                {extra}
            </div>
            

            <Select.ItemIndicator
                className="
                absolute 
                left-0 
                w-[25px] 
                inline-flex 
                items-center justify-center">
                <CheckIcon className='w-5 h-5' />
            </Select.ItemIndicator>
        </Select.Item>
    );
});

export default MySelect;
