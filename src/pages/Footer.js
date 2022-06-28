import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';


function Footer() {  
  return (
    <div className="w-screen h-20 border-t border-white">
        <div className='px-6 py-4 bg-black flex flex-row justify-center border-white'>
            <h3 className="text-white font-extrabold text-xl font-mono px-7 py-2">
            igormafelipe@gmail.com
            </h3>
            <a href="https://www.linkedin.com/in/igor-mafra-felipe-4a31b5190/"><AiFillLinkedin size={40}/></a>
        </div>
    </div>
  );
}

export default Footer;