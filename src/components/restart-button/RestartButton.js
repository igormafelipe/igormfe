
import React from 'react';
import { useDispatch } from 'react-redux';
import { setGif, restartGif } from './restartButtonSlice';
import { RefreshIcon } from '@heroicons/react/solid';

function RestartButton () { 
    const dispatch = useDispatch();

    const resetGif = () => {
        dispatch(restartGif());
        setTimeout(() => { dispatch(setGif()) }, 0);
    }

    return (
        <span onClick={() => resetGif()} className="hover:cursor-pointer absolute">
            <RefreshIcon className='h-10 w-10 hover:text-yellow-300 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14'/>
        </span>
    );
}

export default RestartButton;