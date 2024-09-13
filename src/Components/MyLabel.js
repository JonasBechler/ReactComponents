import React from 'react';

import HoverInfo from './HoverInfo';

const MyLabel = ({ children, name, info, id }) => {

    const get_random_color = () => {
        const random_color = Math.floor(Math.random() * 16777215).toString(16);
        return `#${random_color}`;
    }

    return (
        <div className='
        flex wrap
        w-full h-12 
        gap-2'>
            <div className='
            flex 
            w-1/2 
            items-center justify-end'>
                <div className='
                flex flex-grow
                items-center justify-end 
                text-xl'
                    htmlFor={"input_" + id}>

                    {name}
                </div>
                <div className='
                flex 
                items-center justify-center 
                w-10'>
                    <HoverInfo
                        title={name}
                        info={info}
                    />
                </div>
            </div>

            <div className='
            flex 
            w-1/2  
            items-center justify-center
            px-2' 
            >
                {children}
            </div>
        </div>
    );

}

export default MyLabel;
