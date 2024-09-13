import React from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';

const MyScrollArea = ({ children }) => {
	const scrollbar_classnames = `
		flex 
		select-none 
		touch-none 
		p-0.5 
		transition-colors 
		duration-[160ms] 
		ease-out 
		bg-green-300
		hover:bg-green-400
		data-[orientation=vertical]:w-2.5 
		data-[orientation=horizontal]:flex-col 
		data-[orientation=horizontal]:h-2.5
		`;

	const scrollthumb_classnames = `
		flex-1 
		bg-white
		rounded-[10px] 
		relative before:content-[''] 
		before:absolute before:top-1/2 
		before:left-1/2 before:-translate-x-1/2 
		before:-translate-y-1/2 
		before:w-full 
		before:h-full 
		before:min-w-[44px] 
		before:min-h-[44px]
		`;

	return (
		<ScrollArea.Root
			className="
			flex flex-1 
			w-full h-full 
			overflow-hidden 
			flex-grow
			">
			<ScrollArea.Viewport
				className="
				flex flex-grow
				overflow-hidden 
				pr-3
				">

				{children}

			</ScrollArea.Viewport>
			<ScrollArea.Scrollbar className={scrollbar_classnames} orientation="vertical" >
				<ScrollArea.Thumb className={scrollthumb_classnames} />
			</ScrollArea.Scrollbar>
			<ScrollArea.Scrollbar className={scrollbar_classnames} orientation="horizontal" >
				<ScrollArea.Thumb className={scrollthumb_classnames} />
			</ScrollArea.Scrollbar>
			<ScrollArea.Corner className="bg-blackA5" />
		</ScrollArea.Root>
	);
}

export default MyScrollArea;
