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
        <div className='flex items-center justify-around w-full'>
            <div>

                <button
                    onClick={() => incValue(-increment)}>
                    <MinusIcon />
                </button>
            </div>
            <div className='flex items-center justify-center'>
                <div>
                    {value}
                </div>
                <div>
                    {unit}
                </div>
            </div>
            <div>

                <button className={""} onClick={() => incValue(increment)}>
                    <PlusIcon />
                </button>
            </div>
        </div>
    )
}

export default NumberInput;