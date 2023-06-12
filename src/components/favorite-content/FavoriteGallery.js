import React from 'react';
import FavoriteImg from './FavoriteImg';

function FavoriteGallery(props) { 
  return (
    <div className='w-full h-[53rem] flex flex-col'>
        <div className='w-full h-full flex flex-row space justify-center space-x-10 relative top-5'>
            {props.images.map((payload, index) => 
              <FavoriteImg coverimg={payload["coverimg"]}
                           images={payload["images"]}
                           key={index} 
                           title={payload["title"]} 
                           body={payload["body"]}
                           skills={payload["skills"]}
                           github={payload["github"]}/>)
            }
        </div>
    </div>
  );
}

export default FavoriteGallery;