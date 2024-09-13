import React from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import { RowSpacingIcon, Cross2Icon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

import HoverInfo from './HoverInfo';

const MyCollapsible = ({ children, name, info }) => {
	const [open, setOpen] = React.useState(false);
	return (
		<Collapsible.Root
			className='
			w-full 
			bg-yellow-200
			'
			open={open}
			onOpenChange={setOpen}>

			<div
				className='
				flex wrap
				w-full h-[45px] 
				gap-2
				'>
				<div
					className='
					flex 
					w-1/2 
					items-center justify-end
					'>
					<div
						className='
						flex flex-grow
						items-center justify-end 
						text-xl
						'>

						{name}
					</div>
					<div
						className='
						flex 
						items-center justify-center 
						w-10
						'>
						<HoverInfo
							title={name}
							info={info}
						/>
					</div>
				</div>

				<div
					className='
					flex 
					w-1/2  
					items-center justify-end
					px-2
					'>

					<Collapsible.Trigger asChild>
						<button
							className='
							rounded-full 
							h-[25px] w-[25px]
							inline-flex 
							items-center justify-center 
							shadow-[0_2px_10px] 
							shadow-blackA4 
							outline-none 
							hover:bg-violet3 
							focus:shadow-[0_0_0_2px] 
							focus:shadow-black
							'>
							{open ? <ChevronUpIcon /> : <ChevronDownIcon />}
						</button>
					</Collapsible.Trigger>
				</div>
			</div>


			<Collapsible.Content>
				<div
					className='
					w-full
					'>

					<div
						className='
						flex flex-col
						justify-center items-center
						'>
						{children}
					</div>
				</div>
			</Collapsible.Content>
		</Collapsible.Root>
	);
};

export default MyCollapsible;
