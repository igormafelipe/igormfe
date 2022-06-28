import React from 'react';
import { useSelector } from 'react-redux';
import RestartButton from './restart-button/RestartButton';

function AboutMeContent (props) {
    const gifSrc = useSelector((state) => state.restartButton.gifState);
    return (
        <div className="w-full h-full bg-black text-white">
            <img className="w-full h-full absolute top-0" src={gifSrc}/>
            <RestartButton/>
        </div>
    );
}

export default AboutMeContent;