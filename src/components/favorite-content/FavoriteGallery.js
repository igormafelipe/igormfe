import React from 'react';
import FavoriteImg from './FavoriteImg';

function FavoriteGallery(props) { 
  return (
    <div className='w-full h-5/6 flex flex-col'>
        <div className='w-full h-full flex flex-row space justify-center space-x-10 relative top-8'>
            {props.images.map((payload, index) => 
              <FavoriteImg src={payload["img"]} 
                           key={index} 
                           title={payload["title"]} 
                           body={payload["body"]}/>)
            }
        </div>
    </div>
  );
}

export default FavoriteGallery;