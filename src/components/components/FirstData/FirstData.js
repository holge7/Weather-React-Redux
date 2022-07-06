import React from "react";
import { useSelector } from "react-redux";

export default function FirstData(){
    const weather = useSelector((state)=>state.weather);
    let hour = getTextHour(weather.weather.location.localtime)


    return(
    <div className="grid grid-cols-3 rounded-xl bg-[#506BF8] text-white my-2 drop-shadow-md p-2 relative overflow-hidden">
        <svg className="absolute bottom-0 z-[-10]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
            <path fill="#3756f0" fillOpacity="1" d="M0,192L21.8,186.7C43.6,181,87,171,131,192C174.5,213,218,267,262,245.3C305.5,224,349,128,393,96C436.4,64,480,96,524,117.3C567.3,139,611,149,655,144C698.2,139,742,117,785,138.7C829.1,160,873,224,916,256C960,288,1004,288,1047,277.3C1090.9,267,1135,245,1178,229.3C1221.8,213,1265,203,1309,170.7C1352.7,139,1396,85,1418,58.7L1440,32L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path>
        </svg>
        <svg className="absolute bottom-0 z-[-5]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 250">
            <path fill="#1b39cf" fillOpacity="1" d="M0,224L40,218.7C80,213,160,203,240,165.3C320,128,400,64,480,69.3C560,75,640,149,720,181.3C800,213,880,203,960,208C1040,213,1120,235,1200,202.7C1280,171,1360,85,1400,42.7L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
        <div id="meta_data" className="flex flex-col ml-5 col-span-1 items-start">
            <img src={weather.weather.current.condition.icon} className="h-20 w-20 ml-[-10px]"></img>
            <h2 className="text-xl font-bold">{weather.weather.current.condition.text}</h2>
            <h4 className="text-sm">{hour}</h4>
        </div>
        <div id="temperature" className="justify-self-end self-center col-span-2 flex flex-col items-center">
            <div id="temperature_real" className="text-7xl font-bold">{weather.weather.current.temp_c}º</div>
            <div id="temperature_feel" className="">Feels like {weather.weather.current.feelslike_c}º</div>
        </div>
      </div>
    )
}

const getTextHour = (date) => {
    let hour = date.split(" ")[1].split(":")[0];
    if (hour >= 6 && hour < 12) return "Moorning"
    else if(hour >= 12 && hour <= 20) return "Evening"
    else return "Night"
}