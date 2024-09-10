import React from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';

import { QuestionMarkIcon, Cross2Icon } from '@radix-ui/react-icons';

const HoverInfo = ({title, info}) => (
  <HoverCard.Root>
    <HoverCard.Trigger asChild>
        <div className="flex justify-center items-center text-lg font-bold rounded-full p-2 border-2 border-light-blue-500">
        <QuestionMarkIcon className="w-4 h-4" />
        </div>

    </HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content
        className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-2 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
        sideOffset={5}
      > 
        <div className="flex flex-col gap-2">
                <div className="flex justify-start items-center text-lg font-bold bg-blue-500 text-white p-2">
                    {title}
                </div>
                <div className="flex justify-start items-center text-sm bg-blue-500 text-white p-2">
                    {info}
                </div>
        </div>
        

        <HoverCard.Arrow className="fill-white" />
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
);

export default HoverInfo;
