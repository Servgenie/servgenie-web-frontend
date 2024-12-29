'use client';

import { useAnimation, useInView, motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import Mobile from './ImageCarousel/Mobile';
import { images } from '@/constants/assets';
import Image from 'next/image';
import Button from '@/components/common/Button';
import { scrollToSection } from '@/utils/navgiation';

const HomeHero = () => {
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
    <>
      <div
        className='relative mx-auto mt-3 min-h-[438px] w-[95%] rounded-[24px] bg-[url("/assets/hero/bg.png")] bg-cover bg-center sm:mt-4 sm:h-[594px] sm:rounded-[3rem] md:h-[602px]'
        id="home"
        ref={heroRef}
      >
        {/* wave container */}

        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center overflow-hidden">
          <svg
            width="1476"
            height="496"
            viewBox="0 0 1376 396"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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

        {/* hero text */}

        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.3, delay: 0.2, ease: 'easeIn' }}
          className="mx-auto flex h-fit max-w-[90rem] flex-col items-center justify-start gap-4 px-6 pt-[70px] sm:gap-6 md:gap-10"
        >
          <div className="font-bolder ps-bulky flex h-fit flex-col items-center text-center text-[32px] leading-tight text-[#111928] sm:text-[56px] lg:text-[5rem]">
            <div className="flex text-[40px] leading-[48px] sm:text-[56px] sm:leading-[56px] md:leading-[96px] lg:text-[6rem]">
              <p>Any wi</p>

              <Image
                width={images.logo.width}
                height={images.logo.height}
                src={images.logo.src}
                alt={images.logo.alt}
                className="mx-1 w-[35px] md:mt-6 md:w-[35px] lg:w-[50px]"
              />

              <p>h</p>
            </div>

            <p>Anytime, Anywhere</p>
          </div>

          <p className="ps-slim text-center text-sm leading-snug text-[#6B7280] xs:text-base sm:text-xl">
            Finding help doesn't have to be complicated. Make a wish, and our Genies will be at your
            fingertips.
          </p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.3, delay: 0.4, ease: 'easeIn' }}
            className="z-50 flex w-full items-center justify-center"
          >
            <Button text="Join Now" variant="gradient" onClick={() => scrollToSection('join')} />
          </motion.div>
        </motion.div>
      </div>
      <Mobile />
    </>
  );
};

export default HomeHero;
