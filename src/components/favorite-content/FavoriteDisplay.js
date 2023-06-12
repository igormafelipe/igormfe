import React from 'react';
import { XIcon } from '@heroicons/react/solid';
import { useDispatch, useSelector } from 'react-redux';
import { hide } from './FavoriteDisplaySlicer';

function FavoriteDisplay(props) { 
  const showing = useSelector((state) => state.favoriteDisplay.showing);
  const imageSrc = useSelector((state) => state.favoriteDisplay.imageSrc);
  const title = useSelector((state) => state.favoriteDisplay.title);
  const bodyText = useSelector((state) => state.favoriteDisplay.bodyText);
  const dispatch = useDispatch();

  const showingClass = "w-full h-full bg-transparent backdrop-blur-md absolute top-0 left-0 flex flex-row items-center justify-center";
  const hiddenClass = showingClass + " hidden";

  return (
    <div className={showing ? showingClass : hiddenClass}>
      <div className="relative top-0 w-5/6 h-5/6 flex flex-row">
        <div className="w-1/2 h-full relative top-0 left-0">
          <img className="absolute top-0 left-0 w-full h-full" src={imageSrc}/>
        </div>
        <div className="w-3/4 h-full relative left-0 top-0 bg-gray-200 overflow-auto">
          <div className="h-auto w-full relative top-0 left-0">
            <h1 className="font-extrabold text-3xl text-gray-800 pt-1 text-center font-mono">
              {title}
            </h1>
          </div>
          <div className="h-auto w-full relative top-10 left-0 overflow-hidden">
            <h1 className="font-extrabold text-2xl text-gray-800 pt-1 text-left font-mono px-3">
              {bodyText}
            </h1>
          </div>
        </div>
        <span className="absolute top-1 left-1 hover:cursor-pointer bg-black rounded-full border-2 border-white" onClick={() => dispatch(hide())}>
         <XIcon className="h-10 w-10 hover:text-red-400 2xl:h-12 2xl:w-12 stroke-white"/>
        </span>
      </div>
    </div>
  );
}

export default FavoriteDisplay;