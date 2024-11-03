
import {clickable_classnames} from '../BaseStyles.js'

const ButtonInput = ({ id, onClick, children }) => {
    return (
        <div className='flex items-center'>
            <button
                className={`
                    px-4
                    h-[26px] 
                    bg-blackA6 
                    rounded-full 
                    relative 
                    data-[state=checked]:bg-black 
                    cursor-default
                    whitespace-nowrap
                    ` + clickable_classnames}
                id={id}
                onClick={onClick}

            >
                {children}
            </button>
            
        </div>
    );
}

export default ButtonInput;