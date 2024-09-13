import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon, CrossCircledIcon } from '@radix-ui/react-icons';
import MyScrollArea from './MyScrollArea';

const MyDialog = ({ children, title, icon, scrollable, onSave }) => {
    if (onSave === undefined) {
        onSave = () => { console.log("Save was pressed"); }
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className="
                inline-flex 
                items-center justify-center 
                h-[35px] 
                rounded-[4px] 
                bg-white 
                px-[15px] 
                font-medium 
                leading-none 
                shadow-black 
                shadow-[0_1px_3px] 
                hover:bg-mauve3 
                focus:shadow-[0_0_0_2px] 
                focus:shadow-black 
                focus:outline-none
                gap-2
                w-1/2
                text-lg
                ">
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
                                    className="
                                    inline-flex 
                                    items-center justify-center 
                                    text-violet11 
                                    hover:bg-violet4 
                                    appearance-none 
                                    focus:shadow-violet7 
                                    focus:shadow-[0_0_0_0px] 
                                    focus:outline-none"
                                    aria-label="Close"
                                >
                                    <CrossCircledIcon className='w-8 h-8' />
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
                                    className='
                                    flex
                                    items-center justify-center 
                                    h-[35px] 
                                    bg-green4 
                                    text-green11 
                                    hover:bg-green5 
                                    focus:shadow-green7 
                                    rounded-[4px] 
                                    px-[15px] 
                                    font-medium 
                                    leading-none 
                                    focus:shadow-[0_0_0_2px] 
                                    focus:outline-none
                                    '
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
