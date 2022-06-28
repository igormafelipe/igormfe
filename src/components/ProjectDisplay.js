import React, { useState } from 'react';
import {BiRightArrow} from 'react-icons/bi';
import {BiLeftArrow} from 'react-icons/bi';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function ProjectDiv (props) { 
    const [selected, changeSelected] = useState(0);
    return (
        <div className="w-full">
             <Carousel>
                {props.images.map((image, index) => 
                    (<div>
                        <img src={image} />
                    </div>))}
            </Carousel>
        </div>
    );
}

export default ProjectDiv;