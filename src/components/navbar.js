// Credit to Karin Fam
// https://github.com/karinfam

import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { hide } from './favorite-content/FavoriteDisplaySlicer';
import { untogle } from './workinfo-carousel/WorkInfoSlicer';


const pages = ['ABOUT', 'WORK'];
const navLinks = pages.map(page => <Link key={page} className="no-underline text-gray-300 font-semibold hover:text-gray-100" to={`${page}`}>{page}</Link>);

export function ResponsiveNavBar () {
  const dispatch = useDispatch();


  const resetState = () => {
    dispatch(hide());
    dispatch(untogle());
    console.log("hey");
  }
  return (
    <div className="bg-black border-b border-white">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
            <h1 className="font-extrabold text-3xl text-white">IMF</h1>
        </div>
        <nav className="md:block space-x-6" onClick={() => resetState()}>
          {navLinks}
        </nav>
      </div>
    </div>
  );
};