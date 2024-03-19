import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView]);
  
  return (
    <div ref={ref} name='about' className='w-screen h-full bg-[#424242] text-[#6a5acd] flex justify-center items-center pt-40'>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 90 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="max-w-md p-4 md:p-8"
      >
        <p className='text-center text-base md:text-lg'>
          I am a Google Certified UX Designer passionate about crafting exceptional user experiences. At the start of 2023, I embraced a career shift from tech writing to UX design, a transition inspired by my deep interest in the field. My journey features transformative UX design internships with companies that have contributed significantly to honing my UI and UX skills. As a former tech writer, my unique perspective enriches my work as a UX designer. I blend the art of communication with the science of design to create user-centric solutions. My design process seamlessly merges User Experience with a sleek and intuitive User Interface, delivering innovative solutions while ensuring easy user interactions. When I'm not designing, you can find me curled up with a good fiction book or watching a particularly riveting psychological thriller. I'm based in Lagos, Nigeria, but I have been working remotely with brands and businesses around the world since 2019 and I am open to relocating should a role require it.
        </p>
      </motion.div>
    </div>
  );
}

export default About;
