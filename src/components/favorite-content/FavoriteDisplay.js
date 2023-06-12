import React from 'react';
import { XIcon } from '@heroicons/react/solid';
import { useDispatch, useSelector } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { hide } from './FavoriteDisplaySlicer';

function FavoriteDisplay(props) { 
  const showing = useSelector((state) => state.favoriteDisplay.showing);
  const title = useSelector((state) => state.favoriteDisplay.title);
  const bodyText = useSelector((state) => state.favoriteDisplay.bodyText);
  const imageArray = useSelector((state) => state.favoriteDisplay.imageArray);
  const skills = useSelector((state) => state.favoriteDisplay.skills);
  const dispatch = useDispatch();

  console.log(imageArray);

  const showingClass = "w-full h-full bg-transparent backdrop-blur-md absolute top-0 left-0 flex flex-row items-center justify-center";
  const hiddenClass = showingClass + " hidden";
  return (
    <div className={showing ? showingClass : hiddenClass}>
      <div className="relative top-0 w-full h-full flex flex-row">
        <div className="w-full h-full relative left-0 top-0 bg-black overflow-auto">
          <div className="h-auto w-full relative top-0 left-0">
            <h1 className="font-extrabold text-3xl text-yellow-500 pt-1 text-center font-mono">
              {title}
            </h1>
          </div>
          <div className="h-auto w-full relative top-10 left-0 overflow-hidden space-y-3 overflow-y-hidden">
            <h1 className="font-extrabold text-2xl text-white pt-1 text-left font-mono px-3">
              {bodyText}
            </h1>
            <h1 className="font-extrabold text-2xl text-yellow-500 pt-1 text-left font-mono px-3">
              Skills used: {skills}
            </h1>
          </div>
          <div className="h-1/3 bg-red relative top-20 flex align-center justify-center">
            <Carousel infiniteLoop={true}>
              { 
              imageArray != undefined &&
              imageArray.map((payload, idx) => 
                  <div>
                    <img src={payload["original"]}/>
                    <h1 className="legend">{payload["legend"]}</h1>
                  </div>)}
            </Carousel>
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