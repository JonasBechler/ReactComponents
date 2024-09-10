import React from 'react';

import './Styles/MyInput.css';
import './Styles/MyDialog.css';
import './Styles/MyLabel.css';
import './Styles/MyScrollArea.css';

import { Skeleton, Spinner, Switch } from '@radix-ui/themes';
import { GearIcon, Cross2Icon, ReloadIcon, LockOpen2Icon, LockClosedIcon } from '@radix-ui/react-icons'
import * as Dialog from '@radix-ui/react-dialog';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import * as Label from '@radix-ui/react-label';
        

export const BoolInput = ({ config, value, setValue }) => {
    return (
        <div className='LabelExtraContainer'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Switch
                    checked={value}
                    onCheckedChange={() => setValue(!value)}
                />
            </div>
        </div>
    );
}




export const MySelect = ({ id, options, extras, value, onChange }) => {
    return (
        <div className='LabelExtraContainer'>
            <select className="Input" id={"selectinput_" + id} value={value} onChange={onChange}>
                {options.map((option, option_index) => {
                    return (
                        <option key={"select_" + id + "_" + option_index} value={option}>
                            {option}
                        </option>
                    );
                })}
            </select>

            {extras}
        </div >
    );
}


export const MyLabel = ({ name, id, Input }) => {

    return (
        <div className='LabelContainer'>
            <Label.Root className="LabelRoot" htmlFor={"input_" + id}>
                {name}
            </Label.Root>
            <div className="LabelInput">
                {Input}
            </div>
        </div>
    );

}


export const MyScrollArea = ({ Content }) => {
    return (
        <ScrollArea.Root className="ScrollAreaRoot">
            <ScrollArea.Viewport className="ScrollAreaViewport">
                <div style={{ padding: '15px 20px' }}>
                    {Content}
                </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
                <ScrollArea.Thumb className="ScrollAreaThumb" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
                <ScrollArea.Thumb className="ScrollAreaThumb" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner className="ScrollAreaCorner" />
        </ScrollArea.Root>

    );
}

export const MyDialog = ({ name, Content }) => {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <div className="Std_Button">
                    <div>
                        {name}
                    </div>
                    <GearIcon style={{ marginRight: 5 }} />
                </div>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content className="DialogContentContainer">
                    <Dialog.Title className="DialogTitle">
                        {name}
                    </Dialog.Title>

                    <div className="DialogContent">
                        {Content}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Dialog.Close asChild>
                            <button className="Std_Button OK">
                                Save changes
                            </button>
                        </Dialog.Close>
                    </div>
                    <Dialog.Close asChild>
                        <button className="IconButton Dialog_Close_Button" aria-label="Close" >
                            <Cross2Icon />
                        </button>
                    </Dialog.Close>


                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}


