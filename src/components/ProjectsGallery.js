import React, { useState } from 'react';
import ProjectDiv from './ProjectDiv';
import {MdArrowForwardIos} from 'react-icons/md';
import { ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/solid';
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
                <ChevronLeftIcon className='h-16 w-16 hover:stroke-yellow-300 2xl:h-18 2xl:w-18 stroke-white'/>
            </span>
            <ProjectDiv images={props.projectList[active]["images"]} 
                        description={props.projectList[active]["description"]} 
                        title={props.projectList[active]["title"]}
                        tools={props.projectList[active]["tools"]} 
                        date={props.projectList[active]["date"]}/>
            <span onClick={() => transition(plusDiv)} className="hover:cursor-pointer">
                <ChevronRightIcon className='h-16 w-16 hover:stroke-yellow-300 2xl:h-18 2xl:w-18 stroke-white'/>
            </span>
        </div>
    );
}

export default ProjectsGallery;