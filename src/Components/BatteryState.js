import { LightningBoltIcon } from '@radix-ui/react-icons';

const BatteyState = ({ value, unit }) => {
    return (
        <div className="
            flex 
            items-center justify-between 
            gap-2 
            w-[100px]
            px-2
            text-lg font-bold text-white">

            <LightningBoltIcon className="w-6 h-6" />
            <div className="flex gap-1">
                <div className="">
                    {value}
                </div>
                <div className="">
                    {unit}
                </div>
            </div>
        </div>
    );
}
export default BatteyState;
