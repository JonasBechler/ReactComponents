
import React from 'react';

import { LineChart, CartesianGrid, Line, XAxis, YAxis, Legend, Tooltip, Brush, ResponsiveContainer } from 'recharts';


const MyChart = ({ xType, yDomain, dataKeys, data }) => {


    const xDomain = () => {
        switch (xType) {
            case "days":
                return [0, 86400];
            case "months":
                return [0, 31];
            case "years":
                return [0, 12];
            default:
                return undefined;

        }
    }
    const xTicks = () => {
        switch (xType) {
            case "days":
                return [0, 21600, 43200, 64800, 86400];
            case "months":
                return [0, 7, 14, 21, 28];
            case "years":
                return [0, 3, 6, 9, 12];
            default:
                return undefined;
        }
    }
    const xFormatter = () => {
        switch (xType) {
            case "days":
                return (time) => {
                    let hours = Math.floor(time / 3600);
                    let minutes = Math.floor((time - hours * 3600) / 60);
                    let seconds = time - hours * 3600 - minutes * 60;
                    return hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
                };
            case "months":
                return (time) => {
                    return time.toString();
                };
            case "years":
                return (time) => {
                    return time.toString();
                };
            default:
                return (time) => time;
        }
    }




    return (

        <div className="flex flex-col w-full h-full gap-2">
            <ResponsiveContainer width="100%" height="100%">
            <LineChart
                data={data}
                margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
            >
                <XAxis dataKey="time"

                    type='number'
                    domain={xDomain()}
                    //domain={[0, 86400]}
                    ticks={xTicks()}
                    tickFormatter={xFormatter()}
                />
                <YAxis yAxisId="left" domain={yDomain} width={50}/>
                <CartesianGrid stroke="#ccc" strokeWidth={1} />
                {
                    dataKeys.map((dataKey, index) => {
                        
                        return(<Line yAxisId="left" type="monotone" dataKey={dataKey} stroke="#8884d8" dot={false} isAnimationActive={false} />)
                    })
                }
            </LineChart>
            </ResponsiveContainer>
        </div>

    );
}



export default MyChart;