import React from "react";
import { useSelector } from "react-redux/es/exports";
import SpecificDataCard from "../../common/SpecificDataCard/SpecificDataCard";
import sunset from './../../../sunset.png';
import sunrise from './../../../sunrise.png';

export default () => {
    const { weather } = useSelector((state)=>state.weather);

    const astro = weather.forecast.forecastday[0].astro

    return(
        <div className="flex justify-around">
            <SpecificDataCard name="Sunrise" info={astro.sunrise} img={sunrise} />
            <SpecificDataCard name="Sunset" info={astro.sunset} img={sunset} />
        </div>
    )
}