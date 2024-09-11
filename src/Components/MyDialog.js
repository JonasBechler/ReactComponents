import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

const MyDialog = ({ children, title, icon }) => (
    <Dialog.Root>
        <Dialog.Trigger asChild>
            <button className="shadow-black hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
                {(icon !== undefined) ? icon : <div/>}
                {title}

            </button>
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="bg-blackA4 data-[state=open]:animate-overlayShow fixed inset-0" />
            <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] h-[70vh] w-[70vw] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                <div className='flex flex-col gap-2 h-full'>
                    <div className='flex justify-between items-center p-2'>
                        <div className="text-lg font-bold p-2">
                            {title}
                        </div>
                        <Dialog.Close asChild>
                            <button
                                className="text-violet11 hover:bg-violet4 focus:shadow-violet7 inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                                aria-label="Close"
                            >
                                <Cross2Icon />
                            </button>
                        </Dialog.Close>
                    </div>
                    <div className="flex flex-1 bg-blue-500">
                        {children}
                    </div>
                    <div>
                        <div className="mt-[15px] flex justify-end">
                            <Dialog.Close asChild>
                                <button className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                                    Save changes
                                </button>
                            </Dialog.Close>
                        </div>
                    </div>



                </div>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
);

export default MyDialog;
