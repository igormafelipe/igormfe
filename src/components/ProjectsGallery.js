import React, { useState } from 'react';
import ProjectDiv from './ProjectDiv';
import {MdArrowForwardIos} from 'react-icons/md';
import {MdArrowBackIos} from 'react-icons/md';
import classnames from 'classnames/bind';

const TRANSITIONING_RIGHT = 0
const ACTIVE = 1

function mod(n, m) {
    return ((n % m) + m) % m;
}

function ProjectsGallery (props) {
    const [active, setActive] = useState(0);
    const [transitionState, setTransitionState] = useState(ACTIVE);

    const activeClass = classnames(
        "w-screen h-full flex flex-row space-x-4 items-center justify-center transition-all duration-300",
        {"opacity-100"  : transitionState === ACTIVE},
        {"opacity-0 translate-y-full"    : transitionState === TRANSITIONING_RIGHT},
    )

    const transition = (action) => {
        setTransitionState(TRANSITIONING_RIGHT);
        setTimeout(() => { setTransitionState(ACTIVE);
                           action(); }, 300);
    }

    const plusDiv = () => {
        setActive(mod((active + 1), props.projectList.length))
    }

    const minusDiv = () => {
        if (active === 0 ) {
            setActive(props.projectList.length) 
        }
        setActive(mod((active - 1), props.projectList.length));
    }

    return (
        <div className={activeClass}>
            <span onClick={() => transition(minusDiv)} className="hover:cursor-pointer">
                <MdArrowBackIos size={60}/>
            </span>
            <ProjectDiv images={props.projectList[active]["images"]} 
                        description={props.projectList[active]["description"]} 
                        title={props.projectList[active]["title"]}
                        tools={props.projectList[active]["tools"]} 
                        date={props.projectList[active]["date"]}/>
            <span onClick={() => transition(plusDiv)} className="hover:cursor-pointer">
                <MdArrowForwardIos size={60}/>
            </span>
        </div>
    );
}

export default ProjectsGallery;