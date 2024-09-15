import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross1Icon, CrossCircledIcon } from '@radix-ui/react-icons';
import MyScrollArea from './MyScrollArea';

import {clickable_classnames} from './BaseStyles'

const MyDialog = ({ children, title, icon, scrollable, onSave }) => {
    if (onSave === undefined) {
        onSave = () => { console.log("Save was pressed"); }
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className={`
                inline-flex 
                items-center justify-center 
                h-[35px] 
                rounded-[4px] 
                leading-none 
                gap-2
                w-[200px]
                text-lg
                `
                + clickable_classnames}>
                    {(icon !== undefined) ? React.cloneElement(icon, { className: "w-6 h-6" }) : <div />}
                    {title}

                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className='
                bg-blackA4 
                data-[state=open]:animate-overlayShow 
                fixed 
                inset-0'
                />
                <Dialog.Content className='
                h-[70vh] w-[70vw] 
                fixed 
                top-[50%] 
                left-[50%] 
                translate-x-[-50%] translate-y-[-50%] 
                data-[state=open]:animate-contentShow 
                rounded-[6px] 
                bg-red-200
                shadow-black 
                shadow-[0_1px_50px] 
                p-[25px] 
                shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] 
                focus:outline-none
                '>
                    <Dialog.Title />
                    <Dialog.Description />
                    <div className='
                    flex flex-col 
                    h-full
                    justify-center
                    bg-red-300
                    '>
                        <div className='
                        flex 
                        justify-between items-center 
                        h-[10%]
                        '>
                            <div className="text-lg font-bold pl-2">
                                {title}
                            </div>
                            <Dialog.Close asChild>
                                <button
                                    className={`
                                    rounded-full 
                                    inline-flex 
                                    p-1
                                    items-center justify-center 
                                    ` + clickable_classnames}

                                    aria-label="Close"
                                >
                                    <Cross1Icon className='w-6 h-6' />
                                </button>
                            </Dialog.Close>
                        </div>
                        <div className="flex h-[80%] ">
                            <div className="
                            flex
                            w-full h-full
                            max-w-full max-h-full
                            bg-white
                            ">
                                {scrollable
                                ?
                                    <MyScrollArea>
                                        {children}
                                    </MyScrollArea>
                                :
                                    children
                                }
                            </div>
                        </div>
                        <div
                            className='
                            flex 
                            justify-end 
                            items-center
                            h-[10%]
                            bg-red-300
                            '>

                            <Dialog.Close asChild>
                                <button
                                    className={`
                                    flex
                                    items-center justify-center 
                                    h-[35px] 
                                    bg-green-400 
                                    text-green11 
                                    rounded-[4px] 
                                    px-[15px] 
                                    leading-none 
                                    `+ clickable_classnames }
                                    onClick={onSave}
                                >
                                    Save changes
                                </button>
                            </Dialog.Close>
                        </div>



                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

export default MyDialog;
