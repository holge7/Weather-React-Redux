import React from "react";
import SpecificDataCard from "../../common/SpecificDataCard/SpecificDataCard";
import { useSelector } from "react-redux";

export default function SecondData(){
    const {weather} = useSelector((state)=>state.weather);

    return(
        <div className="grid grid-cols-3 border border-4 border-black justify-items-center">
            <SpecificDataCard name="wind" info={weather.current.wind_kph} />
            <SpecificDataCard name="Humidity" info={weather.current.humidity} />
            <SpecificDataCard name="Visibility" info={weather.current.vis_km} />
        </div>
    )
}