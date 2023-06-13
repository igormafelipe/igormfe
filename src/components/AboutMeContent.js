import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RestartButton from './restart-button/RestartButton';
import TempImg from '../images/igor_eu.png';
import GitHub from '../images/favorite_page/github.png';
import { AiFillLinkedin } from 'react-icons/ai';
import { toggle, untoggle } from './about-icons/buttonSlice';

function AboutMeContent() {
  const dispatch = useDispatch();

  const NavigateToProjects = () => {
    dispatch(untoggle());
    dispatch(toggle(0));

    dispatch(hide());
  }

  const gifSrc = useSelector((state) => state.restartButton.gifState);

  return (
    <div className="w-full h-full bg-black text-white overflow-auto" style={{ scrollbarWidth: "none", "-ms-overflow-style": "none" }}>
      <style>
        {`
          .w-full::-webkit-scrollbar {
            width: 0.5em;
            background-color: transparent;
          }

          .w-full::-webkit-scrollbar-thumb {
            background-color: transparent;
          }
        `}
      </style>
      <div className="w-auto h-auto bg-black text-white text-2xl py-10">
        <div className="w-full h-auto bg-black flex flex-row">
          <img src={TempImg} className="w-[17rem]" alt="Profile" />
          <div>
            <h1 className="px-10 py-10 text-left text-yellow-500">
              Hi, I'm Igor. A software engineer!
            </h1>
            <h1 className="px-10 py-10">
              I help entrepreneurs leverage technology to automate workflows and streamline administrations.
            </h1>
            <h1 className="px-10 py-10">
              I am a tech-driven problem solver, specializing in using technology as a tool to address challenges faced by small entrepreneurs.
            </h1>
          </div>
        </div>
        <div className="w-full h-auto bg-black flex justify-center bg-black space-x-10 relative bottom-0 border-white border-t-2 pt-10">
          <a href="https://github.com/igormafelipe" target="_blank" rel="noopener noreferrer">
            <img src={GitHub} className="rounded-full w-24 h-24 hover:cursor-pointer animate-pulse hover:animate-none" alt="GitHub" />
          </a>
          <button className="bg-black w-40 h-20 text-white border border-white hover:bg-yellow-500 hover:border-yellow-500 hover:text-black rounded animate-pulse hover:animate-none" onClick={NavigateToProjects}>
            Projects
          </button>
          <a href="https://www.linkedin.com/in/igormafelipe/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className="rounded-full w-24 h-24 hover:cursor-pointer animate-pulse hover:animate-none" />
          </a>
        </div>
      </div>
      <div className="w-full h-[32rem] bg-black flex align-center justify-center pt-5 border-white border-t-2">
          <div className="w-auto relative">
            <RestartButton />
            <img className="w-auto h-full" src={gifSrc} alt="GIF" />
          </div>
        </div>
    </div>
  );
}

export default AboutMeContent;
