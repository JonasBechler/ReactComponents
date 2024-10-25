import { LightningBoltIcon } from '@radix-ui/react-icons';

const BatteyState = ({ value, unit }) => {
    if (value === undefined) {
        return (<div/>);
    }
    return (
        <div className="
            flex 
            items-center justify-between 
            gap-2 
            min-w-[100px]
            ">

            <LightningBoltIcon className="w-6 h-6" />
            <div className="flex gap-1">
                <div className="flex justify-end">
                    {value}
                </div>
                <div className="flex justify-start w-8">
                    {unit}
                </div>
            </div>
        </div>
    );
}
export default BatteyState;
