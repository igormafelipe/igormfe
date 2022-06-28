import React from 'react';
import WorkInfoButton from './WorkInfoButton';
import { useDispatch, useSelector } from 'react-redux';
import { togle, untogle } from './WorkInfoSlicer';
import { RiArrowGoBackFill } from 'react-icons/ri';

const buttons = ["Resume", "Projects"];

function WorkInfoCarousel (props) { 
    const isTogled = useSelector((state) => state.workInfo.isTogled); 
    const componentTogledClass = "h-auto w-auto bg-black flex flex-row items-center justify-center transition-all";
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
                <span className="absolute top-20 left-5 hover:cursor-pointer" 
                      onClick={setButton}>
                    <RiArrowGoBackFill size={40}/>
                </span>
                {props.component}
            </div>
        </div>
    );
}

export default WorkInfoCarousel;