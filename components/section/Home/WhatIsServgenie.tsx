'use client';

import React, { useEffect, useRef } from 'react';
import { useAnimation, useInView, motion } from 'framer-motion';

const WhatIsServgenie = () => {
  const whatIsServgenieRef = useRef(null);
  const mainControls = useAnimation();
  const isInView = useInView(whatIsServgenieRef, { once: false, margin: '-30%' });

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    } else {
      mainControls.start('hidden');
    }
  }, [isInView, mainControls]);

  return (
    <div className="mx-auto mt-[10vh] max-w-[95rem] lg:mt-64" id="about" ref={whatIsServgenieRef}>
      <div className="servgenieDiv relative flex w-full flex-col-reverse overflow-hidden lg:flex-row lg:pl-10">
        <img
          src="/assets/wave2.png"
          alt="wave"
          className="wave absolute right-0 top-[30%] hidden w-[110%] sm:block lg:top-0"
        />

        <motion.div
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.3, delay: 0.2, ease: 'easeIn' }}
          className="flex flex-1 flex-col items-center justify-center gap-6 pl-2 sm:gap-8 sm:pl-10 lg:items-start"
        >
          <h1 className="ps-bulky hidden text-[3.8rem] leading-[69px] lg:block">
            What is <br /> Servgenie?
          </h1>

          <h1 className="ps-bulky mt-10 block w-[100%] text-center text-[2rem] leading-8 md:text-[56px] lg:hidden">
            What is Servgenie?
          </h1>

          <p className="md-[80%] ps-slim mx-auto w-[90%] text-center text-[1rem] leading-5 text-[#6B7280] sm:mx-0 sm:leading-8 sm:text-[#2F2F2F] md:text-[24px] lg:w-[70%] lg:text-start lg:text-2xl">
            Servgenie aims to revolutionize the service market by providing a one-stop platform to
            find and hire skilled freelancers, giving you access to a wide range of services, all in
            one place.
            <br />
            <br />
            As our “Wisher”, you can make one request for multiple tasks, and our verified
            professionals aka “Genies” will grant it.
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.3, delay: 0.3, ease: 'easeIn' }}
          className="relative flex flex-1 items-center justify-center lg:justify-start lg:pl-12"
        >
          {/* desktop */}
          <img
            src="/assets/whatServgenie/main.png"
            alt="whatServgenie"
            className="hidden sm:block"
          />

          <motion.img
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.3, delay: 0.8, ease: 'easeIn' }}
            src="/assets/whatServgenie/2svg.svg"
            alt="whatServgenie"
            className="card2 absolute right-[5%] top-[30%] hidden sm:block lg:right-[10%]"
          />
          <motion.img
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.3, delay: 1, ease: 'easeIn' }}
            src="/assets/whatServgenie/1svg.svg"
            alt="whatServgenie"
            className="card1 absolute left-[5%] top-[50%] hidden sm:block lg:-left-[20%]"
          />
          <motion.img
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.3, delay: 1.2, ease: 'easeIn' }}
            src="/assets/whatServgenie/3svg.svg"
            alt="whatServgenie"
            className="card3 absolute bottom-[15%] right-[5%] hidden sm:block lg:right-[10%]"
          />

          {/*mobile and tablet*/}

          <motion.img
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.3, delay: 0.3, ease: 'easeIn' }}
            src="/assets/whatServgenie/main.png"
            alt="whatServgenie"
            className="mx-auto w-[80%] sm:hidden"
          />

          <motion.img
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.3, delay: 0.8, ease: 'easeIn' }}
            src="/assets/whatServgenie/2svg.svg"
            alt="whatServgenie"
            className="absolute right-[5%] top-[5%] w-[60%] sm:hidden"
          />
          <motion.img
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.3, delay: 1.0, ease: 'easeIn' }}
            src="/assets/whatServgenie/1svg.svg"
            alt="whatServgenie"
            className="absolute left-[5%] top-[50%] w-[60%] sm:hidden"
          />
          <motion.img
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.3, delay: 1.2, ease: 'easeIn' }}
            src="/assets/whatServgenie/3svg.svg"
            alt="whatServgenie"
            className="absolute bottom-[5%] right-[5%] w-[60%] sm:hidden"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default WhatIsServgenie;
