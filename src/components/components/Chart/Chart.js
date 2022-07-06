import React, { useEffect } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useRef } from "react";

export default (props) => {

  const test = useRef()

  return (
    <div ref={test} className="overflow-x-scroll">
      <LineChart width={1600} height={200} data={props.data} margin={{bottom: 30, right:60}}> 
        <CartesianGrid horizontal="" vertical="true" stroke="#bfbfbf"/>
        <Line isAnimationActive={false} type="monotone" dataKey="temp" stroke="#D1D1D2" strokeWidth="2" dot={<CustomizedDot div={test} />}/>
        <XAxis dataKey="hour" strokeWidth="0" tick={<CustomizedTick data={props.data} />}  />
        <YAxis tick={{display:"none"}} domain={['dataMin - 2', 'dataMax +2']} type="number" strokeWidth="0" />
      </LineChart>
    </div>
  )
}

const CustomizedTick = (props) => {
  const { x, y, payload } = props;
  const date = new Date().getHours();

  const findTempByHour=(hour, props)=>{
    let element = props.data.find((e)=>e.hour == hour)
    return element.temp;
  }

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} fill="#666">
        <tspan textAnchor="middle" x="0" fontWeight="bold" fill="#000000">
          {findTempByHour(payload.value, props)}º
        </tspan>
        <tspan textAnchor="middle" x="0" dy="20" fontWeight="600" fill={payload.value == date ? "#716AFE" : "#CFCFD0"}>
          {payload.value == date ? "NOW" : payload.value+"h"}
        </tspan>
      </text>
    </g>
  )
}

const CustomizedDot = (props) => {
  const { cx, cy } = props;

  let hour = props.payload.hour 
  const currentHour = new Date().getHours(); 

  useEffect(()=>{
    if (hour == currentHour && props.div.current) {
      props.div.current.scrollLeft = cx-180;
    }
  })

  if (hour == currentHour) {
    return ( 
      <circle key={cx} fill="#CCC9FC" opacity={1} stroke="#716AFE" strokeWidth='4' cx={cx} cy={cy} r='7' ></circle>
    );
  } 

  return (
    <circle key={cx} fill="#F7F7FA" stroke="#434344" strokeWidth='2' cx={cx} cy={cy} r='5' className="drop-shadow-md"></circle>  
  ); 
};