import React from 'react';

import HoverInfo from './HoverInfo';

const MyLabel = ({ children, name, info, id }) => {

    return (
        <div className='flex w-full wrap'>
            <div className='flex w-1/2 align-center justify-center gap-2'>
                <div className='flex text-center align-center justify-center whitespace-nowrap'
                    htmlFor={"input_" + id}>
                    {name}
                </div>
                <HoverInfo
                    title={name}
                    info={info}
                />
            </div>
            <div className="flex w-1/2 text-center align-center justify-center">
                {children}
            </div>
        </div>
    );

}

export default MyLabel;
