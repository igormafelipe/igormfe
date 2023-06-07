import React, { useState } from 'react';
import {IoPersonOutline} from 'react-icons/io5';
import {MdOutlineFavoriteBorder} from 'react-icons/md';
import {IoGameControllerOutline} from 'react-icons/io5';
import {BiBrain} from 'react-icons/bi';
import { ViewGridIcon , UserIcon, ChatAltIcon, DocumentTextIcon} from '@heroicons/react/solid';


import AboutIcon from './about-icons/AboutIcon';

const CarouselIcons = [ ViewGridIcon, DocumentTextIcon, ChatAltIcon, UserIcon ];

function Carousel(props) { 
  return (
    <div className="w-screen h-auto items-center pt-5">
        <div className="flex flex-row space-x-10 justify-center items-center">
          {CarouselIcons.map((icon, index) => <AboutIcon icon={icon} id={index} key={index}/>)}
        </div>
    </div>
  );
}

export default Carousel;