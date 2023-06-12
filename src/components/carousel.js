import React from 'react';
import { ViewGridIcon , UserIcon, ChatAltIcon, ChartBarIcon} from '@heroicons/react/solid';


import AboutIcon from './about-icons/AboutIcon';

const CarouselIcons = [ ViewGridIcon, ChartBarIcon, ChatAltIcon, UserIcon ];

function Carousel() { 
  return (
    <div className="w-screen h-auto items-center pt-5">
        <div className="flex flex-row space-x-10 justify-center items-center">
          {CarouselIcons.map((icon, index) => <AboutIcon icon={icon} id={index} key={index}/>)}
        </div>
    </div>
  );
}

export default Carousel;