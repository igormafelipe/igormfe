import React from 'react';
import { useDispatch } from 'react-redux';
import { show } from './FavoriteDisplaySlicer';

function FavoriteImg(props) { 
  const dispatch = useDispatch();
  return (
    <img src={props.src} 
         className="w-[33rem] h-5/6 mb-5 opacity-60 hover:opacity-100 hover:cursor-pointer transition-all" 
         onClick={() => dispatch(show(props))}/>
  );
}

export default FavoriteImg;