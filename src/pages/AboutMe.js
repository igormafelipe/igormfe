import React from 'react';
import profilePic from '../images/profile_pic.jpg';
import AboutMeContent from '../components/aboutme-page/AboutMeContent';
import GamingContent from '../components/GamingContent';
import FavoritesContent from '../components/FavoritesContent';

import Footer from "./Footer";
import AboutDiv from '../components/aboutme-page/about-div';
import ProfileCard from '../components/ProfileCard';

function AboutMe() {  
  return (
    <div className="h-auto container-fluid bg-black overflow-hidden">
      {/* Mobile */}
      <div className='lg:hidden'>
        <div className="w-screen h-auto bg-black relative top-0">
          <div className="w-screen h-auto flex p-5 justify-center pr-10">
            <img src={profilePic} className="w-32 h-32 rounded-full border-solid border-2 border-white"></img>
            <h1 className="font-extrabold text-4xl text-white py-9 pl-7 font-mono">Hello!</h1>
          </div>
        </div>
        <div className="w-full h-auto bg-black text-white text-left md:text-center">
          <h3 className="text-xl text-white px-7 pl-10 py-3">
            I'm Igor Mafra Felipe, a computer science senior at Tufts University. I enjoy learning 
            new skills, solving logical problems, and mentoring others.
          </h3>
          <h3 className="text-xl text-white px-7 pl-10 py-3">
            I'm passionated about video games, and am a bit competitive. I almost became a professional league of legends player in 2016.
          </h3>
          <h3 className="text-xl text-white px-7 pl-10 py-3">
            Outside of work I enjoy soccer, working out, travel, hiking, drawing,
            cooking, and anime.
          </h3>
        </div>
        <div className='w-full h-auto px-7 py-3 text-white'>
          <h3 className='text-center font-bold border-t border-black'>Education</h3>
          <h3 className='text-center'>Tufts University, CS and Entrepreneurship</h3>
          <h3 className='text-center'>Class of 2023, 3.91 GPA</h3>
        </div>
        <div className='w-full h-auto px-7 py-3 text-base border-black flex flex-col text-white'>
          <h3 className='text-center font-bold border-t border-black'>Locations</h3>
          <h3 className='text-center'>Massachusetts, USA</h3>
          <h3 className='text-center'>Minas Gerais, Brazil</h3>
        </div>
        <div className='w-full h-auto px-7 py-3 border-black text-white'>
          <h3 className='text-center font-bold border-t border-black'>Favorite Fruit</h3>
          <h3 className='text-center'>Mango</h3>
        </div>
        <div className='w-full h-auto px-7 py-3 border-black text-white'>
          <h3 className='text-center font-bold border-t border-black'>Reading</h3>
          <h3 className='text-center'>The Power of Now</h3>
          <h3 className='text-center'>I Will Teach You To Become Rich</h3>
        </div>
        <div className='w-full h-auto px-7 py-3 border-black text-white pb-7'>
          <h3 className='text-center font-bold border-t border-black'>Quick Facts</h3>
          <h3 className='text-center'>First Generation Student</h3>
          <h3 className='text-center'>Born in MG, Brazil</h3>
        </div>
      </div>

      {/* Desktop */}
      <div className='h-screen w-screen hidden lg:flex lg:flex-col'>
        <div className='w-full h-[90vh] flex flex-col items-center relative top-2'>

          <ProfileCard/>

          {/* These divs are affected by the Carousel. They are shown/hidden as 
              icons are pressed */}
          <AboutDiv id={0} content={<AboutMeContent/>} color="bg-black"/>
          <AboutDiv id={1} content={<FavoritesContent/>} color="bg-black"/>
          <AboutDiv id={2} content={<GamingContent/>} color="bg-black"/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default AboutMe;