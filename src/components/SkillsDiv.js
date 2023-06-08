import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { SkillBars } from 'react-skills';
import SkillBar from 'react-skillbars';
import { skillsData, skillsColor } from '../texts/SkillBarContent';

// Resume information in a separate file.
// Make just skeleton of what div will be like.
function ResumeDiv (props) {     
    const divState = useSelector((state) => state.button.divState[props.id]);
    const [reloadKey, setReloadKey] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setReloadKey(divState == "selected");
            console.log("divState has changed: '", reloadKey);
        }, 200);
        return () => clearTimeout(timeoutId);
    }, [divState])

    return (
        <div className='w-full h-full bg-black'>
            <h1 className="text-2xl xl:text-3xl bg-clip-text text-white pt-2 text-center font-mono pb-10">
                Skills
            </h1>
            {
             reloadKey && 
             <SkillBar skills={skillsData} height={30} colors={skillsColor}/>
            }
        </div>
    );
}

export default ResumeDiv;