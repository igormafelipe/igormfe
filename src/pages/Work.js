import React from 'react';
import Footer from "./Footer";

import { useSelector } from 'react-redux';
import ProjectsGallery from '../components/ProjectsGallery'
import ResumeDiv from '../components/ResumeDiv';
import WorkInfoCarousel from '../components/workinfo-carousel/WorkInfoCarousel';

import { projects } from '../texts/ProjectDescriptions'

function Work() {  
  const showing = useSelector((state) => state.workInfo.togled);
  const togledComponent = () => {
    if (showing === 0) {
      return <ResumeDiv/>
    } else {
      return <div className="w-screen flex flex-col items-center">
              <ProjectsGallery projectList={projects}/>
            </div>
    }
  };
  return (
    <div className="h-auto overflow-hidden container-fluid bg-black">
      <div className="md:hidden">
        <div className="w-screen h-auto bg-black relative top-0">
          <div className="w-screen h-auto flex justify-between p-5 flex flex-col">
              <h1 className="font-extrabold text-3xl text-center text-white pt-2 pb-6 font-mono">Hey, I'm Igor.</h1>
          </div>
        </div>
        <div className="w-full h-auto bg-black">
          <h3 className="text-xl text-white px-7 py-3 pl-10">
            I'm a computer science senior at Tufts University, studying a bit of everything.
          </h3>
          <h3 className="text-xl text-white px-7 py-3 pl-10">
            I have been an intern at Stone, and been part of Summer programs at Google and Red Ventures.
          </h3>
          <h3 className="text-xl text-white px-7 py-3 pl-10">
            I have been a TA for Computer Structures and Assembly Language for 2 years, and I am a TA for Data Structures during 2022 Summer
          </h3>
        </div>
        <div className='w-full h-auto px-7 py-3 text-base border-black flex flex-col text-white'>
          <h3 className='text-center font-bold pt-2 border-t border-black'>Skills</h3>
          <h3 className='text-center'>C, C++, Java, Python, JavaScript, HTML, CSS</h3>
          <h3 className='text-center'>React, React-Native, Functional Programming,</h3>
          <h3 className='text-center'>Marketing, Excell, Business Finances</h3>
        </div>
        <div className='w-full h-auto px-7 py-3 text-white'>
          <h3 className='text-center font-bold '>Experience</h3>
          <h3 className='text-center'>Google CSSI - 2019</h3>
          <h3 className='text-center'>Red Ventures Fellowship - 2020</h3>
          <h3 className='text-center'>Fire llc Internship - 2021</h3>
          <h3 className='text-center'>Stone Summer Internship - 2022</h3>
        </div>
        <div className='w-full h-auto px-7 py-3 border-black text-white'>
          <h3 className='text-center font-bold'>Languages</h3>
          <h3 className='text-center pb-2 border-b border-black'>Portuguese, English, Spanish</h3>
        </div>
        <div className='w-full h-auto px-7 py-3'>
          <h1 className="font-bold text-3xl"></h1>
        </div>
      </div>

      <WorkInfoCarousel component={togledComponent()}/>
      
      <Footer/>
    </div>
  );
}

export default Work;