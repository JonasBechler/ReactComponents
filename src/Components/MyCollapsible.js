import React from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import { RowSpacingIcon, Cross2Icon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

import HoverInfo from './HoverInfo';

import {clickable_classnames} from './BaseStyles.js'

const MyCollapsible = ({ children, name, info, open, setOpen }) => {
	const [_open, _setOpen] = React.useState(false);
	return (
		<Collapsible.Root
			className='
			w-full 
			'
			open={(open!==undefined)?open:_open}
			onOpenChange={(setOpen!==undefined)?setOpen:_setOpen}
			>

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
					pr-3.5
					'>

					<Collapsible.Trigger asChild>
						<button
							className={`
							inline-flex 
							rounded-full 
							h-[25px] w-[25px]
							items-center justify-center 
							` + clickable_classnames}>
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
}

export default MyCollapsible;
