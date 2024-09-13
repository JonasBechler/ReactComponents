import React from 'react';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

const MySelect = ({ option_values, option_displays, placeholder, value, setValue }) => {
    if (option_values === undefined) {
        option_values = [];
    }
    if (option_displays === undefined) {
        option_displays = [];
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
                className="
                inline-flex 
                flex 
                h-full 
                flex-grow 
                items-center 
                justify-between 
                pl-[25px] 
                pr-[10px] 
                rounded-md 
                leading-none 
                h-8 
                gap-[5px] 
                shadow-[0_2px_10px] 
                shadow-black/10 
                hover:bg-mauve3 
                focus:shadow-[0_0_0_2px] 
                focus:shadow-black 
                data-[placeholder]:text-violet9 
                outline-none 
                border 
                border-gray-300 
                "
            >
                <Select.Value placeholder={placeholder} />
                <Select.Icon className="text-violet11">
                    <ChevronDownIcon />
                </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
                <Select.Content className="
                flex 
                overflow-hidden 
                w-full 
                bg-white 
                rounded-md 
                shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                    <Select.ScrollUpButton className="
                    flex 
                    items-center 
                    justify-center 
                    h-[25px] 
                    bg-white 
                    text-violet11 
                    cursor-default">
                        <ChevronUpIcon />
                    </Select.ScrollUpButton>
                    <Select.Viewport>
                        {option_values.map((option, option_index) => {
                            return (
                                <SelectItem key={"select_" + option_index} value={option}>
                                    {option_displays[option_index]}
                                </SelectItem>
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



const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
    return (
        <Select.Item
            className={
                'text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1'}
            {...props}
            ref={forwardedRef}
        >
            <Select.ItemText>{children}</Select.ItemText>
            <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                <CheckIcon />
            </Select.ItemIndicator>
        </Select.Item>
    );
});

export default MySelect;
