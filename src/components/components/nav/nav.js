import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Nav(){

    const {loading, weather, error} = useSelector((state)=>state.weather);

    return(
        <nav>
            <i class="fa-solid fa-magnifying-glass"></i>
            {weather.location.name}
        </nav>
    )
}