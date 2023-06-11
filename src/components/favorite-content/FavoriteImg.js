import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { show } from './FavoriteDisplaySlicer';

function FavoriteImg(props) { 
  const outerDivStyle = {
    backgroundImage: `url(${props.src})`,
    backgroundSize: 'cover',
  };

  const dispatch = useDispatch();
  const [isHover, setHover] = useState(false);

  return (
    <div  className="w-[30rem] h-5/6 mb-5 aspect-square"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}>
      {/* Image DIV */}
      {
        !isHover &&
        <div className="w-full h-full opacity-70 hover:opacity-100 hover:cursor-pointer transition-all"
            style={outerDivStyle}>
            <div className="w-full h-1/6 bg-black relative top-1/2 flex items-center justify-center bg-opacity-70">
              <h1 className="text-2xl text-white">{props.title}</h1>
            </div>
        </div>
      }

      {/* Information DIV */}
      {
        isHover &&
        <div className="w-full h-full cursor-pointer"
            onClick={() => dispatch(show(props))}
            style={outerDivStyle}>
            <div className="w-full h-full hover:h-full bg-black bg-opacity-70 transition-all">
              <h1 className="text-2xl text-white text-center relative top-5">{props.title}</h1>
              {/*Overview of project*/}
              <h1 className="text-2xl text-white text-center relative top-20">{props.body}</h1>
              {/*Skills used*/}
              {/* <h1 className="text-2xl text-white text-center relative top-20">{props.body}</h1> */}
              {/*Github and button to see more*/}
              {/* <h1 className="text-2xl text-white text-center relative top-20">{props.body}</h1> */}
            </div>
        </div>
      }

    </div>
  );
}

export default FavoriteImg;