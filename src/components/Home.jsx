import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { CiPaperplane } from 'react-icons/ci';
import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { FaBehanceSquare } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { HiOutlineMail } from 'react-icons/hi';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ x: '-100vw', opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
      className='relative bg-[#424242] pb-20 w-screen min-h-screen flex flex-col justify-center items-center text-center overflow-hidden'
    >
      {/* Floral Circles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(10)].map((_, index) => (
          <motion.div
            key={index}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              width: Math.floor(Math.random() * 100) + 50,
              height: Math.floor(Math.random() * 100) + 50,
              borderRadius: '50%',
              position: 'absolute',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              zIndex: -1,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: Math.random() * 10 + 10, loop: Infinity, ease: 'linear' }}
          />
        ))}
      </div>

      {/* Content */}
      <div className='relative z-10 w-screen max-w-lg'>
        <h1 className='text-[white] text-3xl sm:text-5xl pb-2'>Product <span className='text-[#6a5acd]'>Designer</span> </h1>
        <h1 className='text-white text-3xl sm:text-5xl pt-2'> <span className='text-[#6a5acd]'>Building</span> Things</h1>
        <p className='text-gray-200 pt-8'>Open for Work</p>

        <div className='flex justify-center pt-4'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='text-white group border-2 px-6 py-3 my-2 flex items-center rounded-2xl hover:bg-[#6a5acd]'
          >
            <span className='group-hover:scale-125 duration-300 rot'>
              <CiPaperplane className='mr-2 size-5' />
            </span>
            Lets Connect
          </motion.button>
        </div>

        {/* Social Media Buttons */}
        <div className='flex justify-center pt-4'>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/Cu19aaa"
            target="_blank"
            rel="noopener noreferrer"
            className='text-white mx-2 hover:text-[#6a5acd]'
          >
            <FaBehanceSquare size={40} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/chioma-ugwu-962354113?trk=contact-info"
            target="_blank"
            rel="noopener noreferrer"
            className='text-white mx-2 hover:text-[#6a5acd]'
          >
            <AiOutlineLinkedin size={40} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href=" http://chioma-ugwu.medium.com/ "
            className='text-white mx-2 hover:text-[#6a5acd]'
          >
            <FaMedium size={40} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
