import React from 'react';

import HoverInfo from './HoverInfo';

const MyLabel = ({ children, name, info, id }) => {
    return (
        <div className='
        flex wrap
        w-full min-h-8
        gap-2'>
            <div className='
            flex 
            w-1/2 
            items-center justify-end'>
                <div></div>
                <div className='
                    flex flex-grow
                    items-center justify-end 
                    text-xl
                    whitespace-nowrap'
                    
                    htmlFor={"input_" + id}
                    >

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
