import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const leftControls = useAnimation();
  const rightControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      leftControls.start("visible");
      rightControls.start("visible");
    }
  }, [isInView, mainControls, leftControls, rightControls]);


  return (
    <div ref={ref} name='Experience' className='w-full h-full bg-[#424242] flex justify-center items-center'>
      <motion.div
        variants={{
          hidden: {opacity: 0, y: 90 },
          visible: {opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 4.0, delay: 0.25}}
      >
        <div className='w-full mx-auto p-4 pt-80'>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={leftControls}
            transition={{ duration: 1, delay: 0.5 }}
            className='pb-2 border-b text-4xl font-bold text-gray border-gray-400 sm:text-7xl'
          >
            Crafting 
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={rightControls}
            transition={{ duration: 1, delay: 0.5 }}
            className='flex justify-center items-center pt-3 pb-1 border-b text-4xl font-bold text-gray border-gray-400 sm:text-7xl'
          >
            Engaging
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={leftControls}
            transition={{ duration: 1, delay: 0.5 }}
            className='pb-2 border-b text-4xl font-bold text-gray border-gray-400 sm:text-7xl'
          >
            Experiences 
          </motion.div>
          <div className='flex flex-col justify-stretch items-center pt-14'>
            <div className='max-w-[90%] grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 text-[#6a5acd]'>
              <div name='left' className='text-left text-sm font-thin'>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate={leftControls}
                  transition={{ duration: 1, delay: 0.5 }}
                >
Product designer and tech writer with 2+ years creating and designing compelling brand stories                </motion.p>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate={leftControls}
                  transition={{ duration: 1, delay: 0.5 }}
                  className='pt-6 text-left'
                >
                  Toolbelt: Figma, Webflow, Framer. Adobe XD, Miro
                </motion.p>
              </div>
              <div name='right' className='text-center'>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate={rightControls}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <div className='flex flex-col space-y-4'>
                    <div className='border-b font-bold text-gray border-gray-400'>
                      <p className='font-bold text-gray'>Atomyum - UI/UX Designer</p>
                      <p>Nov 2023 -  DATE</p>
                    </div>
                    <div className='border-b font-bold text-gray border-gray-400'>
                      <p className='font-bold text-gray'>Zuri/HNG Internship - Product Design Intern</p>
                      <p>Sept, 2023 - Oct, 2023</p>
                    </div>
                    <div className='border-b font-bold text-gray border-gray-400'>
                      <p className='font-bold text-gray'>Gomada — Tech Writer & Editor</p>
                      <p>March, 2022 - May, 2023</p>
                    </div>
                    
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
