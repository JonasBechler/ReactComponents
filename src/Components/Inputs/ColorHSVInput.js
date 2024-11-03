import React, { useEffect, useState } from 'react';

import "./ColorHSVInput.css";


const ColorHSVInput = ({ min, max, value, setValue }) => {
    if (min === undefined) {
        min = 0;
    }
    if (max === undefined) {
        max = 100;
    }
    return (
        <input className="color-range w-full" 
        type="range" 
        min={min}
        max={max}
        value={value} onChange={(e) => setValue(e.target.value)} />
    );
}


export default ColorHSVInput;
