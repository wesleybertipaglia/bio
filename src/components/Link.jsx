import React from "react";
import { ArrowUpRight} from "@phosphor-icons/react";

export default function Link(props) {
    const IconComponent = props.icon;
    return (
        <div className="bg-white rounded p-1 shadow hover:scale-105 transition-all">
            <a href={props.link} className="flex justify-between items-center" target="_blank" rel="noreferrer">
                <span className={`${props.bg} ${props.color} flex justify-center items-center text-2xl rounded h-12 aspect-square`}>
                    <IconComponent size={24} weight="fill" />
                    <img src={props.imgUrl} alt={props.imgAlt} />
                </span>
                
                <span>
                    {props.title}
                </span>

                <span>
                    <ArrowUpRight size={24} className="mr-1" />
                </span>
            </a>
        </div>
    )
}