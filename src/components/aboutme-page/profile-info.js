import React from 'react';

function ProfileInfo (props) { 
    return (
        <div className='w-auto h-auto flex flex-row bg-transparent items-center 2xl:pb-3'>
            {<props.icon size={35}/>}
            <h1 className="font-extrabold text-base bg-clip-text text-white text-left font-mono pl-1 pl-3 2xl:text-xl xl:text-lg">
                {props.text}
            </h1>
        </div>
    );
}

export default ProfileInfo;