import React from "react";

export default function SpecificDataCard(props){
    return(
        <div className="flex flex-col">
            <div className="text-gray-600 font-bold">{props.name}</div>
            <div className="font-bold">{props.info}</div>
        </div>
    )
}