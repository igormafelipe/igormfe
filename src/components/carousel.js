import React, { useState } from 'react';
import {IoPersonSharp} from 'react-icons/io5';
import {MdOutlineFavoriteBorder} from 'react-icons/md';
import {IoGameControllerOutline} from 'react-icons/io5';
import {BiBrain} from 'react-icons/bi';

import AboutIcon from './about-icons/AboutIcon';

const CarouselIcons = [IoPersonSharp, MdOutlineFavoriteBorder, IoGameControllerOutline];

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