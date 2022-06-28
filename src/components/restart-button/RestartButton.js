
import React from 'react';
import { useDispatch } from 'react-redux';
import { setGif, restartGif } from './restartButtonSlice';
import { VscDebugRestart } from 'react-icons/vsc';

const iconSize = 50;

function RestartButton () { 
    const dispatch = useDispatch();
    let i = 0;

    const resetGif = () => {
        dispatch(restartGif());
        setTimeout(() => { dispatch(setGif()) }, 0);
    }

    return (
        <span onClick={() => resetGif()} className="hover:cursor-pointer absolute">
            <VscDebugRestart size={iconSize}/>
        </span>
    );
}

export default RestartButton;