import React from "react";

const TemplateContainer = ({ name, children }) => {
    

    return (
        <div className='w-1/4 h-[500px] border-2 rounded-lg p-2 m-2 bg-white shadow-md min-w-[500px]'>
            <div className="text-center text-lg h-1/6">
                {name}
            </div>
            <div className="flex flex-col justify-center items-center h-5/6 border-2 border-light-blue-500">
                {children}
            </div>

        </div>
    )
}

export default TemplateContainer;