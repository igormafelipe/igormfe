import React from 'react';
import {VscTriangleDown} from 'react-icons/vsc';

function ProfileInfo (props) { 
    return (
        <div className='w-full h-auto flex flex-col items-center relative pt-5 border-dashed px-6'>
            <h1 className="text-center font-bold text-white text-xl">
                {props.title}
            </h1>
            <VscTriangleDown size={20}/>
            {props.description.map((t) => 
                <h1 className="text-center font-bold text-white text-base">
                    {t}
                </h1>
            )}
        </div>
    );
}

export default ProfileInfo;