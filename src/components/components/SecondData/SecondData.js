import React from "react";
import SpecificDataCard from "../../common/SpecificDataCard/SpecificDataCard";
import { useSelector } from "react-redux";

export default function SecondData(){
    const {weather} = useSelector((state)=>state.weather);

    return(
        <div className="grid grid-cols-3 justify-items-center rounded-xl my-2 bg-white py-3 drop-shadow-md">
            <SpecificDataCard name="wind" info={`${weather.current.wind_kph} m/h`} />
            <SpecificDataCard name="Humidity" info={`${weather.current.humidity} km`} />
            <SpecificDataCard name="Visibility" info={`${weather.current.vis_km} %`} />
        </div>
    )
}