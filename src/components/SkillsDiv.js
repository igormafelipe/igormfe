import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { SkillBars } from 'react-skills';

// Resume information in a separate file.
// Make just skeleton of what div will be like.
function ResumeDiv (props) {     
    const color = '#61C9A8';
    const divState = useSelector((state) => state.button.divState[props.id]);
    const [reloadKey, setReloadKey] = useState(false);
    const skillsData = [
        {
            name: 'ReactJS',
            level: 95,
            color: color,
        },
        {
            name: 'ReactNative',
            level: 34,
            color: color,
        },
        {
            name: 'Pandas',
            level: 12,
            color: color,
        },
        {
            name: 'SQL',
            level: 34,
            color: color,
        },
        {
            name: 'BLA',
            level: 98,
            color: color,
        },
        {
            name: 'BLi',
            level: 100,
            color: color,
        },
        {
            name: 'dsadsa',
            level: 67,
            color: color,
        },
        {
            name: 'fds',
            level: 78,
            color: color,
        },
        {
            name: 'gfdgfd',
            level: 74,
            color: color,
        },
        {
            name: 'eqweqw',
            level: 81,
            color: color,
        },
        {
            name: '123wqewqeqw',
            level: 92,
            color: color,
        },
    ]

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setReloadKey(divState == "selected");
            console.log("divState has changed: '", reloadKey, divState);
        }, 100);
        return () => clearTimeout(timeoutId);
    }, [divState])

    return (
        <div className='w-full h-full bg-black'>
            <h1 className="text-2xl xl:text-3xl bg-clip-text text-white pt-2 text-center font-mono pb-10">
                Skills
            </h1>
            {reloadKey && <SkillBars key={reloadKey} skills={skillsData} spacing={30} labelsWidth={110}/>}
        </div>
    );
}
5
export default ResumeDiv;