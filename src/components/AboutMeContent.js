import React from 'react';
import { useSelector } from 'react-redux';
import RestartButton from './restart-button/RestartButton';
import TempImg from '../images/igor_eu.png';
import GitHub from '../images/favorite_page/github.png';
import { AiFillLinkedin } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { toggle, untoggle } from './about-icons/buttonSlice';

function AboutMeContent (props) {
    const dispatch = useDispatch();

    const NavigateToProjects = () => {
        dispatch(untoggle());
        dispatch(toggle(0));

        dispatch(hide());
    }

    const gifSrc = useSelector((state) => state.restartButton.gifState);
    return (
        <div className="w-full h-full bg-black text-white overflow-hidden">
            <div className="w-full h-full bg-black text-white text-2xl">
                <div className="w-full h-autp bg-black flex flex-row">
                    <img src={TempImg} className="w-[17rem]"/>
                    <div>
                        <h1 className='px-10 py-10 text-left'>
                            Hi, I'm Igor. A software engineer!
                        </h1>
                        <h1 className='px-10 py-10'>
                            I help entrepeneurs leverage technology to automate workflows and stramline administrations
                        </h1>
                        <h1 className='px-10 py-10'>
                            I am a tech-driven problem solver, specializing in using technology as a tool to address challenges faces by small entrepeneurs.
                        </h1>
                    </div>
                </div>
                <div className="w-full h-[32rem] bg-black flex align-center justify-center pt-5">
                    <img className="w-auto h-full" src={gifSrc}/>
                    <RestartButton/>
                </div>
                <div className="w-full h-1/3 bg-black flex flex-row justify-center align-bottom space-x-10">
                    <a href={"https://github.com/igormafelipe"} target="_blank">
                        <img src={GitHub} 
                            className="rounded-full w-24 h-24 hover:cursor-pointer animate-pulse hover:animate-none"/>
                    </a>
                    <button className="bg-black w-40 h-20 text-white border border-white hover:bg-yellow-500 hover:border-yellow-500 hover:text-black rounded animate-pulse hover:animate-none"
                            onClick={() => NavigateToProjects()}>
                        Projects
                    </button>
                    <a href={"https://www.linkedin.com/in/igormafelipe/"} target="_blank">
                        <AiFillLinkedin
                            className="rounded-full w-24 h-24 hover:cursor-pointer animate-pulse hover:animate-none"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AboutMeContent;