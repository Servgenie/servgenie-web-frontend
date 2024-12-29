'use client';

import { useAnimation, useInView, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import Button from '../common/Button';
import { scrollToSection } from '@/utils/navgiation';

const GenieHero = () => {
  const heroRef = useRef(null);
  const mainControls = useAnimation();
  const isInView = useInView(heroRef, { once: false });

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    } else {
      mainControls.start('hidden');
    }
  }, [isInView, mainControls]);

  return (
    <div
      className='relative mx-auto mt-3 max-w-[90rem] rounded-[24px] bg-[url("/assets/genie/hero/bg.png")] bg-cover bg-center py-20 pb-[30vh] xs:pb-[40vh] sm:rounded-[3rem] md:max-h-[90vh] md:pb-20 lg:max-h-[110vh]'
      id="home"
      ref={heroRef}
    >
      {/* wave container */}

      <div className="absolute -top-[13%] left-0 flex h-full w-full items-center justify-center overflow-hidden">
        <svg height="496" viewBox="0 0 1376 396" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            className="glow-a"
            opacity="0.05"
            d="M0 364C123.5 364 259.5 94 716.5 204.5C1233.2 329.436 1252.5 32.5 1376 32.5"
            stroke="url(#paint0_linear_545_370)"
            strokeWidth="64"
          />
          <defs>
            <linearGradient
              id="paint0_linear_545_370"
              x1="1324.88"
              y1="-21.1318"
              x2="1269.95"
              y2="444.89"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8F52FF" />
              <stop offset="1" stopColor="#1F9CD6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* text container */}

      <div className="flex h-[90%] w-full flex-col items-center justify-center gap-8">
        {/*   <motion.div
                    variants={{
                        hidden: { opacity: 0, },
                        visible: { opacity: 1, },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.3, delay: 0.2, ease: "easeIn" }}
                    className='ps-slim leading-[20px] text-[20px] border-2 border-[#8F52FF] rounded-full px-4 py-2 bg-white '>
                    Become a servgenie
                </motion.div>
 */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.3, delay: 0.4, ease: 'easeIn' }}
          className="ps-bulky text-center text-[32px] leading-[38px] text-[#111928] md:text-[56px] md:leading-[56px] lg:text-[96px] lg:leading-[96px]"
        >
          <p>Become our Genie!</p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.3, delay: 0.6, ease: 'easeIn' }}
          className="ps-slim text-center text-[12px] leading-[15px] text-[#6B7280] md:text-[18px] md:leading-[23px] lg:text-[24px] lg:leading-[30px]"
        >
          <p>Unlock your earning potential and endless opportunities with Servgenie.</p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.3, delay: 0.8, ease: 'easeIn' }}
          className="z-50"
        >
          <Button text="Join Now" variant="gradient" onClick={() => scrollToSection('join')} />
          {/* <JoinNowButton /> */}
        </motion.div>
      </div>

      {/* img container */}

      {/* desktop and tablet */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: 0.2, ease: 'easeIn' }}
        className="mt-[-5rem] hidden max-h-screen w-full items-center justify-center gap-3 sm:flex lg:gap-8"
      >
        <div className="flex flex-col gap-4">
          <Image
            height={295}
            width={243}
            src="/assets/genie/hero/1.png"
            className="h-64 w-auto md:h-auto"
            alt="hero image"
          />
          <Image
            height={295}
            width={243}
            src="/assets/genie/hero/2.png"
            className="h-32 w-auto md:h-auto"
            alt="hero image"
          />
        </div>

        <div className="mt-16 hidden md:block">
          <Image height={295} width={243} src="/assets/genie/hero/3.png" alt="hero image" />
        </div>

        <div className="mt-[14rem]">
          <Image
            height={295}
            width={243}
            src="/assets/genie/hero/4.png"
            className="h-64 md:h-auto"
            alt="hero image"
          />
        </div>

        <div className="mt-16 hidden md:block">
          <Image height={295} width={243} src="/assets/genie/hero/5.png" alt="hero image" />
        </div>

        <div className="flex flex-col gap-4">
          <Image
            height={295}
            width={243}
            src="/assets/genie/hero/6.png"
            className="h-64 w-auto md:h-auto"
            alt="hero image"
          />
          <Image
            height={295}
            width={243}
            src="/assets/genie/hero/7.png"
            className="h-32 w-auto md:h-auto"
            alt="hero image"
          />
        </div>
      </motion.div>

      {/* mobile */}

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: 0.2, ease: 'easeIn' }}
        className="absolute mx-auto mt-[0rem] flex max-h-screen w-full items-center justify-center sm:hidden md:gap-3 lg:gap-8"
      >
        <Image
          height={295}
          width={243}
          src="/assets/genie/hero/mobile-pg.svg"
          alt="mobile hero"
          className="w-full"
        />
      </motion.div>
    </div>
  );
};

export default GenieHero;
