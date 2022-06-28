import React from 'react';
import { Link } from "react-router-dom";


function TopicBox(props) {
    return (
        <div className="group w-1/2 cursor-pointer border-x-2 border-white hover:w-2/3 transition-all bg-slate-800 relative opacity-100">
            <Link to={props.linkTo}>
                <div className="w-full h-full flex flex-col relative top-0 left-0 justify-center items-center group-hover:opacity-100">
                    <img className="object-cover h-full opacity-75 group-hover:opacity-100" src={props.image} alt="E-Sports"/>
                    <div className="absolute top-1/2 text-6xl font-bold text-white 
                    group-hover:bg-black group-hover:opacity-100 transition-all group-hover:w-full group-hover:text-center duration-200 border-y-2 border-white pb-3 pt-1">
                        {props.description}
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default TopicBox;