import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";
import work1 from '../assets/Your Tok HUB.png';
import chi1 from '../assets/chioma1.png';
import chi2 from '../assets/chioma2.png';
import chi3 from '../assets/chioma3.png';
import chi4 from '../assets/chioma4.png';

const Work = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const selectedControls = useAnimation();
    const worksControls = useAnimation();
    const gridItemsControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            selectedControls.start("visible");
            setTimeout(() => {
                worksControls.start("visible");
                gridItemsControls.start("visible");
            }, 1000); // Adjust the delay according to your preference
        }
    }, [isInView, selectedControls, worksControls, gridItemsControls]);

    // Define an array of image paths for your grid items
    const gridItemImages = [chi1, chi2, chi3, chi4];
    const demoLinks = ["https://chioma-ugwu.notion.site/Lunchly-A-lunch-reward-app-for-employees-e8fe3af14056486faad6942dd18123ab?pvs=4", "https://chioma-ugwu.notion.site/SigniFy-A-sign-language-translation-app-e3ee27b5383d4814887b12ec3f41e9fe", "https://chioma-ugwu.notion.site/Tifi-tv-A-website-for-a-video-editing-agency-0d782f73c1874b29b131743ce93c050c?pvs=4", "https://chioma-ugwu.notion.site/Niya-Skincare-b662cf5a0ce24515b33a2e3299616468?pvs=4"];
    const codeLinks = ["https://example.com/code1", "https://example.com/code2", "https://example.com/code3", "https://example.com/code4"];

    return (
        <div ref={ref} name='work' className='w-full h-full pt-60 text-white bg-[#424242]'>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={selectedControls}
                transition={{ duration: 1.0 }}
                className='w-full mx-auto p-4'
            >
                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                    }}
                >
                    <div className='pb-2 border-b text-4xl font-bold text-gray border-gray-400 w-full sm:text-7xl'>
                        <p>Selected</p>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={worksControls}
                transition={{ duration: 1.0, delay: 0.5 }} // Adjust the delay according to your preference
                className='flex justify-center items-center pt-3 pb-1 border-b text-4xl font-bold text-gray border-gray-400 w-full sm:text-7xl'
            >
                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                    }}
                >
                    <p>Works</p>
                </motion.div>
            </motion.div>

            <motion.div
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={gridItemsControls}
                transition={{ duration: 1.0, delay: 0.5 }} // Adjust the delay according to your preference
                className='grid sm:grid-cols-1 md:grid-cols-2 gap-20 pt-14'
            >
                {/* Map through the image paths and render each as a grid item */}
                {gridItemImages.map((image, index) => (
                    <div className=''>
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1.0, delay: 0.5 * (index + 1) }}
                        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        className='shadow-lg shadow-white group container rounded-md flex justify-center w-3/4 h-60 items-center mx-auto pt-16 content-div'
                    >
                        
                        {/*hover*/}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 },
                            }}
                            className='opacity-0 group-hover:opacity-100'
                        >
                            
                            <div className='pt-8 text-center'>
                                <a href={demoLinks[index]} target="_blank" rel="noopener noreferrer">
                                    <button className='text-center w-40 h-15 rounded-lg px-4 py-3 m-2 bg-black text-gray-100 font-bold text-lg'>Demo</button>
                                </a>
                               {/* <a href={codeLinks[index]} target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-gray-100 font-bold text-lg'>Code</button>
                                </a>
                               */}
                            </div>
                        </motion.div>
                    </motion.div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Work;
