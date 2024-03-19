import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed mt-6 top-0 left-1/2 transform -translate-x-1/2 w-[90%] h-[80px] flex justify-between items-center px-4 bg-[#242424] rounded-3xl md:w-[50%] text-gray-300 z-50'> {/* Increased z-index to 50 */}
      <div>
        <h1>Logo</h1>
      </div>

      {/* Menu */}
      <ul className={`hidden md:flex md:space-x-4 ${nav ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100'}`}>
        <li>Home</li>
        <li>About</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={`${nav ? 'fixed top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' : 'hidden'}`}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
