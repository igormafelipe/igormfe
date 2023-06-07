import React from 'react';
import eu_praia from '../../images/igor_praia.jpg';
import ProfileInfo from './profile-info';
import Carousel from '../carousel';

import { AiOutlineCalendar } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { GiBrazilFlag } from 'react-icons/gi';
import { RiComputerLine } from 'react-icons/ri';
import { IoSchoolSharp } from 'react-icons/io5';

function ProfileCard () { 
    return (
        <div className="w-full h-full bg-transparent text-white flex">
            <div className="w-1/4 h-full bg-black flex flex-col items-center border-x-2 border-white overflow-hidden absolute left-5">

                <div className="h-auto w-auto pb-9 pt-5">
                    <h1 className="text-2xl xl:text-3xl bg-clip-text text-white pt-2 text-center font-mono">
                        Hello, I'm Igor
                    </h1>
                </div>

                <img src={eu_praia} className="w-3/5 rounded-full border-solid border-2 border-white 2xl:w-2/3"/>

                <div className="h-full w-auto relative bg-transparent top-9">
                    <ProfileInfo text="Software Engineer" icon={CgProfile}/>
                    <ProfileInfo text="23 Years Old" icon={AiOutlineCalendar}/>
                    <ProfileInfo text="Born in Brazil" icon={GiBrazilFlag}/>
                    <ProfileInfo text="Computer Science" icon={RiComputerLine}/>
                    <ProfileInfo text="Tufts University" icon={IoSchoolSharp}/>
                </div>
                <Carousel />
            </div>
        </div>
    );
}

export default ProfileCard;