import React from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';

import { QuestionMarkIcon, QuestionMarkCircledIcon } from '@radix-ui/react-icons';

const HoverInfo = ({ title, info }) => {
  if (info === undefined) {
    return (<div />)
  }

  return (
    <div className='flex items-center justify-center'>

      <HoverCard.Root>
        <HoverCard.Trigger asChild>
          <div className="
            inline-flex 
            justify-center items-center">
            <QuestionMarkCircledIcon className="w-5 h-5" />
          </div>

        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCard.Content
            className="
            data-[side=bottom]:animate-slideUpAndFade 
            data-[side=right]:animate-slideLeftAndFade
            data-[side=left]:animate-slideRightAndFade 
            data-[side=top]:animate-slideDownAndFade 
            w-[300px] 
            bg-white 
            p-2 
            shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] 
            data-[state=open]:transition-all 
            rounded-xl
            "
            sideOffset={5}
          >
            <div className="
            flex flex-col 
            gap-2
            ">
              <div className="
              flex 
              justify-start items-center 
              text-lg font-bold 
              p-2
              ">
                {title}
              </div>
              <div className="
              flex 
              justify-start items-center 
              text-sm 
              p-2
              ">
                {info}
              </div>
            </div>


            <HoverCard.Arrow className="fill-white" />
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
    </div>
  );
}

export default HoverInfo;
