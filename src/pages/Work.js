import React from 'react';
import Footer from "./Footer";
import im1 from "../images/projects/123preach/im1.jpg";
import im1Web from "../images/projects/websiteimg/im1.png";
import arith from "../images/projects/arith.png";
import metroSim from "../images/metro_sim.jpg";
import stone from "../images/stone.jpg"

import { useSelector } from 'react-redux';
import ProjectsGallery from '../components/ProjectsGallery'
import ResumeDiv from '../components/ResumeDiv';
import WorkInfoCarousel from '../components/workinfo-carousel/WorkInfoCarousel';

const coursesList = 
[
  {
    "title" : "Assumption University",
    "description" : ["Cryptography, Big Data"],
  },
  {
    "title" : "Tufts University",
    "description" : ["Algorithms", "Data Structures", "Cybersecurity Fundamentals", "Machine Structure & Assembly-language Programming", "Software Engineering", "Programming Languages", "Operating Systems", "Introduction To Machine Learning And Data Mining", "Database Systems", "Computation Theory", "Engineering Leadership"],
  },
];

const skills = [
  {
    "title" : "Computer Science",
    "description" : ["C, C++, Java, Python, Assembly, JavaScript", "ML, HTML/CSS, React, React-Native", "VsCode, GitHub", "Excell", "Functional Programming, Pure OOP", "Operating Systems", "Paralel Programming, Concurrent Programming"],
  },
  {
    "title" : "Entrepeurnship",
    "description" : ["Marketing, Management, Finances"],
  },
  {
    "title" : "Languages",
    "description" : ["English, Portuguese, Spanish"] ,
  },
];

const projects = 
[
  { 
    'images' : [stone],
    'description' : 'To structure a new products operation, focusing on entrepreneurial and Leadership skills. Tasks included ensuring all necessary documentation is aligned to train the team, overseeing the necessary infrastructure in different platforms so the team members can provide a service of the highest quality, structuring the main processes to resolve any new problem the client may have, and suggesting improvements for the agent experience on Salesforce and Admin.',
    'tools' : 'Clickup, Workplace, DashBoard, SQL, Google Cloud, Google Sheets, Google Forms',
    'date' : '06/2022 - 09/2022',
    'title' : 'Stone Global Summer Internship',
  },
  { 
    'images' : [metroSim],
    'description' : 'A metro simulator where stations and trains can be modified, and passengers are given a boarding station and a destination. Trains function in parallel. Developed skills in parallel programming, locks, semaphores, and Java.',
    'tools' : 'Java',
    'date' : '09/2021',
    'title' : 'Metro Sim',
  },
  { 
    'images' : [metroSim],
    'description' : 'A metro simulator where stations and trains can be modified, and passengers are given a boarding station and a destination. Trains function in parallel. Developed skills in parallel programming, locks, semaphores, and Java.',
    'tools' : 'Java',
    'date' : '09/2021',
    'title' : 'Metro Sim',
  },
  { 
    'images' : [arith],
    'description' : 'As the name suggests, this program compressed and decompressed an image. The compressed image was 4 times smaller than the original, and the algorithm converted the image from pixels from RGB to a matrix of compressed 4 by 4 tiles, and then further compressed this matrix into 32 bit words.',
    'tools' : 'C',
    'date' : '06/2020',
    'title' : 'Image Compressor',
  },
  {
    'images' : [im1Web],
    'description' : 'I designed and developed a website to display who I am, what I do, and my skills. I hope to convey more than a single sheet of paper could, and to develop my skills in web development.',
    'tools' : 'JavaScript, Html, React, Redux, TailwindCss',
    'date' : '06/2022',
    'title' : 'Personal Website',
  },
  { 
    'images' : [im1],
    'description' : 'One of my first projects. A platform designed to help religious leaders around the globe to share their messages. Users were able to post new messages, attach videos, add friends, follow other accounts, and filter their feed based on keywords.',
    'tools' : 'Html, CSS, Python, JavaScript, Google App Engine, Data Store, Jinja2, WebApp2',
    'date' : '06/2019',
    'title' : '123Preach',
  },
];

const experiences = 
[
  {
    "title" : "Google CSSI, 2019",
    "description" : ["Completed a three-week intensive coding boot camp with developed skills in HTML, Python, CSS, JavaScript, Jinja2, webapp2, and Google App Engine/ Data Store."],
  },
  {
    "title" : "GDS Tech Fellowship, 2020",
    "description" : ["Completed a seven-week intensive coding boot camp with developed skills in HTML, Python, CSS, and JavaScript. Responsibilities within team-based web page development and data analysis."],
  },
  {
    "title" : "Fire LLC, 2021",
    "description" : ["Completed a 3 months internship with developed skills in react-native and python. Responsibilities within team-based full-stack mobile app development."],
  },
  {
    "title" : "Stone CO, ongoing",
    "description" : ["A 3 months internship with developed skills in business, entrepreneurship, banking system, customer interaction, leadership, product development, and management. Responsibilities within developing a new product for Stone CO."],
  },
];

const RESUME = 0;
const PROJECTS = 1;

function Work() {  
  const showing = useSelector((state) => state.workInfo.togled);
  const togledComponent = () => {
    if (showing === 0) {
      return <ResumeDiv title="Resume" 
                        skills={skills}
                        experiences={experiences}
                        courses={coursesList}
                        />
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