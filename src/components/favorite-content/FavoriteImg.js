import React from 'react';
import { useDispatch } from 'react-redux';
import { show } from './FavoriteDisplaySlicer';

function FavoriteImg(props) { 
  const dispatch = useDispatch();
  return (
    <img src={props.src} 
         className="w-1/4 h-5/6 mb-5 hover:scale-125 hover:cursor-pointer transition-all" 
         onClick={() => dispatch(show(props))}/>
  );
}

export default FavoriteImg;