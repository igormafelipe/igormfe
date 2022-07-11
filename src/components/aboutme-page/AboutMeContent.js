import React from 'react';
import eu_praia from '../../images/igor_praia.jpg';
import ProfileInfo from './profile-info';
import {AiOutlineCalendar} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import {GiBrazilFlag} from 'react-icons/gi';
import {GoLocation} from 'react-icons/go';
import {RiComputerLine} from 'react-icons/ri';
import {IoSchoolSharp} from 'react-icons/io5';
import {GiReceiveMoney} from 'react-icons/gi';
import swot_analysis from '../../images/swot_analysis.png';

function AboutMeContent () { 
    return (
        <div className="w-full h-full bg-black text-white flex">
            <div className="w-1/3 h-full bg-black flex flex-col items-center border-x-2 border-white overflow-hidden">

                <div className="h-auto w-auto pb-9 pt-5">
                    <h1 className="text-3xl bg-clip-text text-white pt-2 text-center font-mono">
                        Hello, I'm Igor
                    </h1>
                </div>

                <img src={eu_praia} className="w-3/5 rounded-full border-solid border-2 border-white 2xl:w-2/3"/>

                <div className="h-full w-auto relative bg-transparent top-9">
                    <ProfileInfo text="Igor Mafra Felipe" icon={CgProfile}/>
                    <ProfileInfo text="23 Years Old" icon={AiOutlineCalendar}/>
                    <ProfileInfo text="Born in Brazil" icon={GiBrazilFlag}/>
                    <ProfileInfo text="Boston" icon={GoLocation}/>
                    <ProfileInfo text="Computer Science" icon={RiComputerLine}/>
                    <ProfileInfo text="Entrepreneurship" icon={GiReceiveMoney}/>
                    <ProfileInfo text="Tufts University" icon={IoSchoolSharp}/>
                </div>
            </div>

            <div className='w-4/6 bg-black border-solid border-r-2 border-white flex flex-row'>
                <div className="w-full h-full">
                    <img className="w-full h-full object-contain" src={swot_analysis}/>
                </div>
            </div>
        </div>
    );
}

export default AboutMeContent;