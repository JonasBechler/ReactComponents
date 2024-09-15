import { PlusIcon, MinusIcon } from '@radix-ui/react-icons'
import { clickable_classnames } from './BaseStyles.js'

const NumberInput = ({ increment, max, min, unit, value, setValue }) => {

    const incValue = (increment) => {
        let new_value = value + increment;
        if (max !== undefined) {
            new_value = Math.min(new_value, max);
        }
        if (min !== undefined) {
            new_value = Math.max(new_value, min);
        }
        setValue(new_value);
    }




    return (
        <div className='
        flex
        w-full h-full 
        '>
            <div className='
            flex 
            w-1/3 h-full
            items-center justify-center
            '>

                <div className='
                flex flex-grow
                items-center justify-start
                pl-1.5
                '>

                    <button
                        className={`
                        inline-flex 
                        rounded-full 
                        h-[25px] w-[25px]
                        items-center justify-center 
                        ` + clickable_classnames}
                        onClick={() => incValue(-increment)}>
                        <MinusIcon />
                    </button>
                </div>
            </div>
            {unit ? (
                <div className='
                    flex 
                    w-1/3 h-full
                    items-center justify-center
                    min-w-[100px]
                    text-lg
                    '>
                    <div className='flex pr-1 w-1/2 justify-end'>
                        {value}
                    </div>
                    <div className='flex pr-1 w-1/2 justify-start'>
                        {unit}
                    </div>
                </div>
            ) : (
                <div className='
                    flex 
                    w-1/3 h-full
                    items-center justify-center
                    min-w-[100px]
                    text-lg
                    '>
                    {value}

                </div>
            )
            }

            <div className='
            flex 
            w-1/3 h-full
            items-center justify-center
            '>

                <div className='
                flex flex-grow
                items-center justify-end
                pr-1.5
                '>

                    <button
                        className={`
                        inline-flex 
                        rounded-full 
                        h-[25px] w-[25px]
                        items-center justify-center 
                        ` + clickable_classnames}
                        onClick={() => incValue(increment)}>
                        <PlusIcon />
                    </button>

                </div>
            </div>

        </div>
    )
    /*
            <div className='flex items-center justify-around w-full'>
                <div className='flex items-center justify-center gap-2'>
                    <div>
                        {unit}
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
        */
}

export default NumberInput;