// Credit to Karin Fam
// https://github.com/karinfam

import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { hide } from './favorite-content/FavoriteDisplaySlicer';
import { untogle } from './workinfo-carousel/WorkInfoSlicer';
import { AiFillLinkedin } from 'react-icons/ai';
import { toggle, untoggle } from './about-icons/buttonSlice';


const pages = ['ABOUT', 'WORK'];
const mainDivId = 0;
const navLinks = pages.map(page => <Link key={page} className="no-underline text-gray-200 font-semibold hover:text-yellow-200" to={`${page}`}>{page}</Link>);

export function ResponsiveNavBar () {
  const dispatch = useDispatch();

  const resetState = () => {
    dispatch(hide());
    dispatch(untogle());
    console.log("hey");
  }

  const goToMain = () => {
      dispatch(untoggle());
      dispatch(toggle(mainDivId));
      dispatch(hide());
  }

  return (
    <div className="bg-black border-b border-white">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center hover:cursor-pointer space-x-2" onClick={() => goToMain()}>
          <a href="https://www.linkedin.com/in/igor-mafra-felipe-4a31b5190/">
            <AiFillLinkedin size={36}/>
          </a>
          <Link key={'ABOUT'} className="font-extrabold text-3xl text-white" to={'ABOUT'}>
              IMF
          </Link>
        </div>
        <nav className="md:block space-x-6" onClick={() => resetState()}>
          {navLinks}
        </nav>
      </div>
    </div>
  );
};