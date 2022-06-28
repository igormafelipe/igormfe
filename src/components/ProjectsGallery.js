import React, { useState } from 'react';
import ProjectDiv from './ProjectDiv';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {AiOutlineArrowLeft} from 'react-icons/ai';

function mod(n, m) {
    return ((n % m) + m) % m;
}

function ProjectsGallery (props) {
    const [inUse, setUse] = useState(0);

    
    const plusDiv = () => {

        setUse((inUse + 1) % props.projectList.length)
    }

    const minusDiv = () => {
        if (inUse === 0 ) { setUse(props.projectList.length) };
        setUse(mod((inUse - 1), props.projectList.length));
    }

    return (
        <div className='w-screen h-full flex flex-row space-x-4 items-center justify-center transition-all'>
            <span onClick={minusDiv} className="hover:cursor-pointer">
                <AiOutlineArrowLeft size={40}/>
            </span>
            <ProjectDiv images={props.projectList[inUse]["images"]} 
                        description={props.projectList[inUse]["description"]} 
                        title={props.projectList[inUse]["title"]}
                        tools={props.projectList[inUse]["tools"]} 
                        date={props.projectList[inUse]["date"]}/>
            <span onClick={plusDiv} className="hover:cursor-pointer">
                <AiOutlineArrowRight size={40}/>
            </span>
        </div>
    );
}

export default ProjectsGallery;