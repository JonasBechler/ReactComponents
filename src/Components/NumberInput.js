import { PlusIcon, MinusIcon } from '@radix-ui/react-icons'

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
            w-1/2 h-full
            items-center justify-center
            '>

                <div className='
                flex flex-grow
                items-center justify-center
                '>

                    <button
                        onClick={() => incValue(-increment)}>
                        <MinusIcon />
                    </button>
                </div>
                <div className='pr-1'>
                    {value}
                </div>
            </div>
            <div className='
            flex 
            w-1/2 h-full
            items-center justify-center
            '>

                <div className='pl-1'>
                    {unit}
                </div>
                <div className='
                flex flex-grow
                items-center justify-center
                '>

                    <button className={""} onClick={() => incValue(increment)}>
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