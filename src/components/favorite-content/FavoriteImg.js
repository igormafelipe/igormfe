import React from 'react';
import { useDispatch } from 'react-redux';
import { show } from './FavoriteDisplaySlicer';

function FavoriteImg(props) { 
  const outerDivStyle = {
    backgroundImage: `url(${props.src})`,
    backgroundSize: 'cover',
  };

  const dispatch = useDispatch();
  return (
    <div className="w-[33rem] h-5/6 mb-5 opacity-70 hover:opacity-100 hover:cursor-pointer transition-all aspect-square"
          onClick={() => dispatch(show(props))}
          style={outerDivStyle}>
       <div className="w-full h-1/6 bg-black relative top-1/2 flex items-center justify-center bg-opacity-70">
         <h1 className="text-2xl text-white">{props.title}</h1>
        </div>
    </div>
  );
}

export default FavoriteImg;