import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross1Icon, CrossCircledIcon } from '@radix-ui/react-icons';
import MyScrollArea from './MyScrollArea';

import { clickable_classnames } from './BaseStyles'

import {createGetText} from './BasicLanguage';

const MyDialog = ({ children, title, info, icon, scrollable, onSave, onDiscard, language }) => {
    if (onSave === undefined) {
        onSave = () => { console.log("Save was pressed"); }
    }

    const getText = createGetText(language?language:'en')

    const vh = 70;

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button className={`
                inline-flex 
                items-center justify-start
                h-[50px] 
                rounded-[4px] 
                leading-none 
                gap-2
                px-2
                w-[250px]
                `
                    + clickable_classnames}>
                    {(icon !== undefined) ? React.cloneElement(icon, { className: "min-w-8 min-h-8" }) : <div />}
                    <div className="flex w-full flex-col">
                        <div className="text-lg font-bold">
                            {title}
                        </div>
                        <div className="text-xs text-gray-500">
                            {info}
                        </div>
                    </div>

                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className='
                bg-blackA4 
                data-[state=open]:animate-overlayShow 
                fixed 
                inset-0'
                />
                <Dialog.Content className={`
                h-[`+ vh +`vh] 
                w-[70vw] 
                fixed 
                top-[50%] 
                left-[50%] 
                translate-x-[-50%] translate-y-[-50%] 
                data-[state=open]:animate-contentShow 
                rounded-[6px] 
                bg-white
                shadow-black 
                shadow-[0_1px_50px] 
                p-[20px] 
                shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] 
                focus:outline-none
                `}>
                    <Dialog.Title />
                    <Dialog.Description />
                    <div className={`
                    flex flex-col 
                    justify-center
                    h-[`+ vh-5 +`vh]
                    `}>
                        <div className={`
                        flex 
                        justify-between items-center 
                        px-1
                        h-[6vh]
                        `}>
                            <div className="flex text-lg pl-2 gap-5">
                                <div className='font-bold'>
                                    {title}
                                </div>
                                <div className='text-gray-500'>
                                    {info}
                                </div>
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
                                    <Cross1Icon className='w-5 h-5' />
                                </button>
                            </Dialog.Close>
                        </div>
                        <div className={`
                        flex 
                        flex-grow 
                        h-[`+ (vh-17) +`vh]
                        `}>
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
                            className={`
                            flex 
                            justify-end 
                            items-center
                            gap-2
                            h-[6vh]
                            px-1

                            `}>

                            {onDiscard ? (
                                <Dialog.Close asChild>
                                    <button
                                        className={`
                                    flex
                                    items-center justify-center 
                                    h-[5vh]
                                    bg-green-400 
                                    text-green11 
                                    rounded-[4px] 
                                    px-[15px] 
                                    leading-none 
                                    `+ clickable_classnames}
                                        onClick={onDiscard}
                                    >
                                        {getText("dialog_discard")}
                                    </button>
                                </Dialog.Close>
                            ) : (
                                <div />
                            )}
                            <Dialog.Close asChild>
                                <button
                                    className={`
                                    flex
                                    items-center justify-center 
                                    h-[5vh] 
                                    bg-green-400 
                                    text-green11 
                                    rounded-[4px] 
                                    px-[15px] 
                                    leading-none 
                                    `+ clickable_classnames}
                                    onClick={onSave}
                                >
                                    {getText("dialog_save")}
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
