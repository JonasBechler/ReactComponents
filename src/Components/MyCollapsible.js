import React from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import { RowSpacingIcon, Cross2Icon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

const MyCollapsible = ({children, title}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible.Root 
    className="w-full bg-yellow-200 p-2"
    open={open} 
    onOpenChange={setOpen}>
      <div className='flex items-center justify-between'>
        <span className="text-lg ">
          {title}
        </span>
        <Collapsible.Trigger asChild>
          <button className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black">
            {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </button>
        </Collapsible.Trigger>
      </div>


      <Collapsible.Content>
        <div className="bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] rounded-md">
          {children}
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

export default MyCollapsible;
