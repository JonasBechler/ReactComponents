import React from 'react';
import { clickable_classnames } from '../BaseStyles.js';

const SliderInput = ({ max, min, value, setValue }) => {
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className='flex w-full h-full items-center'>
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={handleChange}
                className='w-full'
            />
        </div>
    );
};

export default SliderInput;
