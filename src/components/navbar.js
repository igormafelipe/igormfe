// Credit to Karin Fam
// https://github.com/karinfam

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { hide } from './favorite-content/FavoriteDisplaySlicer';
import { setGif, restartGif } from './restart-button/restartButtonSlice';
import { AiFillLinkedin } from 'react-icons/ai';
import { toggle, untoggle } from './about-icons/buttonSlice';

export function ResponsiveNavBar (props) {
  const dispatch = useDispatch();

  const individualTogle = (id) => {
      dispatch(untoggle());
      dispatch(toggle(id));

      dispatch(hide());

      if (id === 3) {
          dispatch(restartGif());
          setTimeout(() => { dispatch(setGif()) }, 0);
      }
  }

  const pages = ['PROJECTS', 'SKILLS', 'CONTACT', 'ABOUT'];
  const pages_id = {'PROJECTS' : 0,
                    'SKILLS' : 1, 
                    'CONTACT' : 2,
                    'ABOUT' : 3}
                  
  const navLinks = pages.map((page) => (
    <Link
      key={page}
      className="no-underline text-gray-200 font-semibold hover:text-yellow-200"
      to={`${page}`}
      onClick={() => individualTogle(pages_id[page])} // Pass pages_id as a parameter
    >
      {page}
    </Link>
  ));

  return (
    <div className="bg-black border-b border-white">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center hover:cursor-pointer space-x-2" onClick={() => individualTogle(0)}>
          <a href="https://www.linkedin.com/in/igor-mafra-felipe-4a31b5190/">
            <AiFillLinkedin size={36}/>
          </a>
          <Link key={'ABOUT'} className="font-extrabold text-3xl text-white" to={'ABOUT'}>
              IMF
          </Link>
        </div>
        <nav className="md:block space-x-6">
          {navLinks}
        </nav>
      </div>
    </div>
  );
};