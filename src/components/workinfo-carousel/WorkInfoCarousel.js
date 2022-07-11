import React from 'react';
import WorkInfoButton from './WorkInfoButton';
import { useDispatch, useSelector } from 'react-redux';
import { togle, untogle } from './WorkInfoSlicer';
import { ArrowCircleLeftIcon } from '@heroicons/react/solid';

const buttons = ["RESUME", "PROJECTS"];

function WorkInfoCarousel (props) { 
    const isTogled = useSelector((state) => state.workInfo.isTogled); 
    const componentTogledClass = "h-auto w-auto bg-black flex flex-row justify-center transition-all";
    const componentUntogledClass = componentTogledClass + " hidden";
    const buttonTogledClass = "h-screen w-screen bg-black flex flex-row items-center justify-center space-x-20 transition-all";
    const buttonUntogledClass = buttonTogledClass + " hidden";
    const componentClass = isTogled ? componentTogledClass : componentUntogledClass;
    const buttonClass = isTogled ? buttonUntogledClass : buttonTogledClass;
    const dispatch = useDispatch();
    const setButton = () => {
        dispatch(untogle());
    }
    return (
        <div className='h-auto min-h-screen w-auto md:flex hidden transition-all'>
            <div className={buttonClass}>
                {buttons.map((button, index) => 
                        <WorkInfoButton 
                            text={button} 
                            id={index}
                            key={index}
                        />
                )}
            </div>
            <div className={componentClass}>
                <span className="absolute top-20 right-3 hover:cursor-pointer z-10" 
                      onClick={setButton}>
                    <ArrowCircleLeftIcon className='h-14 w-14 hover:stroke-yellow-300 2xl:h-16 2xl:w-16 stroke-white'/>
                </span>
                {props.component}
            </div>
        </div>
    );
}

export default WorkInfoCarousel;