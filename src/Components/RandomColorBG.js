import * as Switch from '@radix-ui/react-switch';


const RandomColorBG = ({}) => {
    const get_random_color = () => {
        const random_color = Math.floor(Math.random() * 16777215).toString(16);
        return `#${random_color}`;
    }
    return (
        <div className='flex w-full h-full items-center justify-center' style={{ backgroundColor: get_random_color() }}>
        </div>
    );
}

export default RandomColorBG;