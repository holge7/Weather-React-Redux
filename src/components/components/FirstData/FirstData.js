import React from "react";
import { useSelector } from "react-redux";

export default function FirstData(){
    const weather = useSelector((state)=>state.weather);
    let hour = getTextHour(weather.weather.location.localtime)

    return(
    <div className="grid grid-cols-2 rounded-xl bg-[#506BF8] text-white my-2 drop-shadow-md p-2">
        <div id="meta_data" className="flex flex-col ml-5 col-span-1">
            <img src={weather.weather.current.condition.icon} className="h-20 w-20"></img>
            <h2 className="text-xl ">{weather.weather.current.condition.text}</h2>
            <h4 className="text-sm">{hour}</h4>
        </div>
        <div id="temperature" className="justify-self-end col-span-1">
            <div id="temperature_real" className="text-7xl font-bold">{weather.weather.current.temp_c}º</div>
            <div id="temperature_feel" className="">Feels like {weather.weather.current.feelslike_c}º</div>
        </div>
      </div>
    )
}

const getTextHour = (date) => {
    let hour = date.split(" ")[1].split(":")[0];
    if (hour > 9 && hour < 12) return "Moorning"
    else if(hour >= 12 && hour <= 20) return "Evening"
    else return "Night"
}