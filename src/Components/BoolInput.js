import * as Switch from '@radix-ui/react-switch';

const BoolInput = ({ id, value, setValue }) => {
    return (
        <div className='flex items-center'>
            <Switch.Root
                className="w-[42px] 
                h-[25px] 
                bg-blackA6 
                rounded-full 
                relative 
                shadow-[0_1px_1px] 
                shadow-black 
                focus:shadow-[0_0_0_2px] 
                data-[state=checked]:bg-black 
                outline-none 
                cursor-default"
                id={id}
                value={value}
                onCheckedChange={setValue}
            >
                <Switch.Thumb className="block 
                w-[21px] h-[21px] 
                bg-white 
                rounded-full 
                shadow-[0_2px_2px] 
                shadow-blackA4 
                transition-transform 
                duration-100 
                translate-x-0.5
                will-change-transform 
                data-[state=checked]:translate-x-[19px]" />
            </Switch.Root>

        </div>
    );
}

export default BoolInput;