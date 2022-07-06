import React from "react";
import SpecificDataCard from "../../common/SpecificDataCard/SpecificDataCard";
import { useSelector } from "react-redux";

export default function SecondData(){
    const {weather} = useSelector((state)=>state.weather);

    let currentHour = new Date().getHours();
    let forecastHours = weather.forecast.forecastday[0].hour
    let forecastCurrentHour = forecastHours.find((hour)=>{
        return hour.time.split(" ")[1].split(":")[0] == currentHour
    })

    const getUVString = (uv) => {
        if (uv<5) return 'Low'
        else if (uv<=8) return 'High'
        return 'Very high'
    }


    return(
        <div className="grid grid-cols-3 justify-items-center rounded-xl my-2 bg-white py-3 drop-shadow-md">
            <SpecificDataCard name="wind" info={`${weather.current.wind_kph} km/h`} icon='fa-solid fa-wind' />
            <SpecificDataCard name="Humidity" info={`${weather.current.humidity} km`} icon='fa-solid fa-droplet' />
            <SpecificDataCard name="UV" info={`${getUVString(forecastCurrentHour.uv)} `} icon='fa-solid fa-person-rays' />
        </div>
    )
}