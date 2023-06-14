import React, {useState} from 'react';
import FavoriteGallery from './FavoriteGallery';
import { useSelector } from 'react-redux';

import FavoriteDisplay from './FavoriteDisplay';

import { projects } from '../../texts/ProjectDescriptions';
import { ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from '@heroicons/react/solid';

function FavoriteContent () {
    const [translationIdx, setTranslationIdx] = useState(2);
    const translateXvals = ["translate-x-[65rem]", 
                            "translate-x-[22rem]", 
                            "-translate-x-[21rem]", 
                            "-translate-x-[64rem]",
                            ];
    const translation = `w-full h-full flex flex-col ${translateXvals[translationIdx]} transition-all duration-300 bg-black`;
    const rightGaleryShift = () => setTranslationIdx((translationIdx + 1) % 4) ;
    const leftGaleryShift = () => setTranslationIdx((((translationIdx - 1) % 4) + 4) % 4);


    const offSet = useSelector((state) => state.favoriteDisplay.offset);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);

    const handleMouseDown = (event) => {
        setIsDragging(true);
        setStartX(event.clientX);
      };
    
      const handleMouseMove = (event) => {
        if (isDragging) {
          setTranslateX(offSet);
        }
      };
    
      const handleMouseUp = () => {
        setIsDragging(false);
      };

    return (
        <div className="w-full h-full bg-black text-white flex flex-col relative"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}>
            <div className='w-full h-auto text-center select-none'>
                <h1 className='font-extrabold text-2xl text-white pt-5 text-center font-mono 2xl:text-3xl'>
                    PROJECTS
                </h1>
            </div>
            <div className='w-full h-full flex flex-row relative overflow-hidden bg-black'
                >
                {/* Translate this div on X to have the gallery effect */}
                <div className={translation}>
                    <div className='w-full h-full flex flex-row space items-center justify-center'>
                        <FavoriteGallery projects={projects} title="PROJECTS"/>
                    </div>
                </div>
            </div>
            <span className="absolute bottom-10 left-1 hover:cursor-pointer bg-black rounded-full border-2 border-white" onClick={() => leftGaleryShift()}>
                <ChevronDoubleLeftIcon className="h-10 w-10 hover:text-yellow-400 2xl:h-12 2xl:w-12 stroke-white"/>
            </span>
            <span className="absolute bottom-10 right-1 hover:cursor-pointer bg-black rounded-full border-2 border-white" onClick={() => rightGaleryShift()}>
                <ChevronDoubleRightIcon className="h-10 w-10 hover:text-yellow-400 2xl:h-12 2xl:w-12 stroke-white"/>
            </span>
            <FavoriteDisplay/>
        </div>
    );
}

export default FavoriteContent;