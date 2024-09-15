
import React from 'react';

import MyChart from './MyChart';

const data = [
    {
      time: 0,
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      time: 1,
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      time: 2,
      uv: 2000,
      pv: 3800,
      amt: 2290,
    },
    {
      time: 3,
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      time: 4,
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      time: 5,
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      time: 6,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

const MyChartExample = () => {
    return (

        <MyChart
            xType={undefined}
            yDomain={[0, 5000]}
            dataKeys={["uv", "pv"]}
            data={data}
        />
    );
}



export default MyChartExample;