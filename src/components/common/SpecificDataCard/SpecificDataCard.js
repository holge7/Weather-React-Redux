import React from "react";

export default function SpecificDataCard(props){
    return(
        <div className="flex flex-col items-center">
            <div className="text-gray-600 font-bold ">{props.name}</div>
            <i className={`${props.icon} my-1`}></i>
            {props.img && <img src={props.img} alt="Logo" className="w-20" />}
            <div className="font-bold my-1">{props.info}</div>
        </div>
    )
}