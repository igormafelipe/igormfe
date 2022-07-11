import React from 'react';

function ProjectDiv (props) {
    return (
        <div className='w-1/2 h-full flex flex-col py-3 transition-all'>
            <div className='w-full h-auto text-gray-100'>
                <h1 className="text-center font-bold text-2xl pt-5">
                    {props.title}
                </h1>
                <h1 className="text-left font-bold text-xl px-10 pt-5">
                    {props.description}
                </h1>
                <h1 className="text-center font-bold text-xl px-10 pt-5">
                    Date Developed: {props.date}
                </h1>
                <h1 className="text-center font-bold text-xl px-10 pt-5">
                    Tools Used: {props.tools}
                </h1>
            </div>
            <div className='w-full h-full pt-8'>
                <img src={props.images[0]} className="w-full"/>
            </div>
        </div>
    );
}

export default ProjectDiv;