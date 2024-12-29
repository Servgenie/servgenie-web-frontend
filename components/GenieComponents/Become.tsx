'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useAnimation, useInView, motion } from 'framer-motion';
import useHover3d from '@/hooks/use-hover-3d';
import Image from 'next/image';

const Become = () => {
  const becomeAgenie = useRef(null);
  const hoverBecomeImgRef = useRef<HTMLDivElement>(null);
  const mainControls = useAnimation();
  const isInView = useInView(becomeAgenie, { once: false });
  const [isLargerDisplay, setLargerDisplay] = useState(false);

  const hoverBecomeImg = useHover3d(hoverBecomeImgRef, {
    x: 30,
    y: -40,
    z: 30,
  });

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    } else {
      mainControls.start('hidden');
    }
  }, [isInView, mainControls]);

  useEffect(() => {
    if (!window) return;

    if (window.innerHeight > 710) {
      setLargerDisplay(true);
    }
  }, []);

  return (
    <div
      className={`mx-auto mt-32 flex max-w-[93rem] flex-col-reverse gap-6 xs:mt-48 sm:mt-[14rem] md:mt-[16rem] lg:flex-row lg:gap-16 ${isLargerDisplay ? 'lg:mt-[12rem]' : 'lg:mt-[14rem]'} `}
      id="about"
      ref={becomeAgenie}
    >
      {/* desktop mode */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -10 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        ref={hoverBecomeImgRef}
        transition={{ duration: 0.3, delay: 0.2, ease: 'easeIn' }}
        className="relative ml-10 hidden flex-1 items-center justify-center lg:flex"
      >
        <Image
          src="/assets/genie/become/main.svg"
          alt="main image"
          style={{
            transform: hoverBecomeImg.transform,
          }}
          className="cursor-pointer"
          width={650}
          height={641}
        />
      </motion.div>

      {/* mobile and tablet view */}

      <motion.div
        variants={{
          hidden: { opacity: 0, x: -10 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: 0.2, ease: 'easeIn' }}
        className="relative flex flex-1 items-center justify-center lg:hidden"
      >
        <Image
          src="/assets/genie/become/main.svg"
          alt="main image"
          style={{}}
          className="cursor-pointer"
          width={650}
          height={641}
        />
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, x: 10 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: 0.2, ease: 'easeIn' }}
        className="flex flex-1 flex-col items-center justify-center gap-4 lg:items-start"
      >
        <p className="ps-bulky text-center text-[32px] leading-[30px] md:text-[56px] md:leading-[56px] lg:text-start lg:text-[72px] lg:leading-[86px]">
          Become a Genie <br /> with Servgenie
        </p>

        <p className="ps-slim hidden text-[12px] leading-[15px] text-[#2F2F2F] md:text-[18px] md:leading-[23px] lg:block lg:text-[24px] lg:leading-[34px]">
          At Servgenie, we empower you to turn your skills <br />
          into thriving opportunities. We provide the perfect <br />
          platform to use all your skills and talents to earn <br />
          and work on your own terms.
        </p>

        <p className="ps-slim block w-[90%] text-center text-[12px] leading-[15px] text-[#2F2F2F] md:text-[18px] md:leading-[23px] lg:hidden lg:text-[24px] lg:leading-[34px]">
          At Servgenie, we empower you to turn your skills into thriving opportunities. We provide
          the perfect platform to use all your skills and talents to earn and work on your own
          terms.
        </p>
      </motion.div>
    </div>
  );
};

export default Become;
