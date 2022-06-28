import React, { useState } from 'react';
import ExperienceDescription from './ExperienceDescription';
import IgorResume from '../images/igor_resume.jpg'

function ResumeDiv (props) { 
    const [isTogled, toggle] = useState(false);
    const [imgClass, setImgClass] = useState("w-2/3 transition-all xl:w-1/2");
    const zoomedClass = "h-auto min-h-screen w-screen bg-black flex flex-row items-center justify-center hover:cursor-zoom-out";
    const notZoomedClass = "h-auto min-h-screen w-screen bg-black flex flex-row items-center justify-center hover:cursor-zoom-in"
    const [divClass, setDivClass] = useState(notZoomedClass);
    const setImg = () => {
        console.log("hey");
        if (!isTogled) {
            toggle(true);
            setImgClass("w-4/5 transition-all xl:w-2/3");
            setDivClass(zoomedClass);
        } else {
            toggle(false);
            setImgClass("w-2/3 transition-all xl:w-1/2");
            setDivClass(notZoomedClass);
        }
    }
    return (
        <div className={divClass}>
            <img src={IgorResume} className={imgClass} onClick={setImg}/>
        </div>
    );
}

export default ResumeDiv;