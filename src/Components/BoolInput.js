import * as Switch from '@radix-ui/react-switch';

import {clickable_classnames} from './BaseStyles.js'

const BoolInput = ({ id, value, setValue }) => {
    return (
        <div className='flex items-center'>
            <Switch.Root
                className={`w-[42px] 
                h-[26px] 
                bg-blackA6 
                rounded-full 
                relative 
                data-[state=checked]:bg-black 
                cursor-default
                ` + clickable_classnames}
                id={id}
                checked={value}
                onCheckedChange={setValue}
            >
                <Switch.Thumb 
                className={`block 
                w-[21px] h-[21px] 
                bg-black 
                rounded-full 
                
                transition-transform 
                duration-100 
                translate-x-0.5
                will-change-transform 
                data-[state=checked]:translate-x-[18px]
                data-[state=checked]:bg-white
                `} />
            </Switch.Root>

        </div>
    );
}

export default BoolInput;