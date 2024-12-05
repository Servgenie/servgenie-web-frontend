// /components/common/Navbar.tsx
"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Logo from './Logo';
import { motion, useAnimation, useInView } from 'framer-motion';
import { X } from 'lucide-react';
import JoinNowButton from './JoinNowButton';
import BeAGenie from './BeAGenie';
import { scrollToSection } from '@/utils/navgiation';
import { images } from '@/constants/assets';

interface NavbarProps {
  menuItems: Array<{ label: string; sectionId: string }>;
  showJoinButton?: boolean;
  showBeAGenieButton?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ menuItems, showJoinButton = true, showBeAGenieButton = false }) => {
  const navbarRef = useRef(null);
  const mainControls = useAnimation();
  const isInView = useInView(navbarRef, { once: false });
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      mainControls.start(isInView ? "visible" : "hidden");
    }
  }, [isInView, mainControls]);
  
  return (
    <div className='h-20 bg-transparent relative z-60 w-full my-6 flex justify-center'>
      <div
        className={`w-full max-w-[24rem] sm:max-w-[85rem] py-3 rounded-[30px] mx-auto z-40 shadow-[2px_4px_22px_-7px_rgba(143,82,255,0.4)] absolute bg-white`}
        id='navbar'
        ref={navbarRef}
      >
        <div className='w-full flex items-center justify-between pl-5 pr-3'>
          <motion.div
            variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
            initial={'hidden'}
            animate={mainControls}
            transition={{ duration: 0.3, delay: 0.2, ease: 'easeIn' }}
          >
            <Logo />
          </motion.div>
          {<ul className='hidden lg:flex items-center gap-10 ml-20 font-medium leading-6 ps-slim'>
            {menuItems.map((item, index) => (
              <motion.li
                key={index}
                variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}
                initial='hidden'
                animate={mainControls}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.2, ease: 'easeIn' }}
                onClick={() => scrollToSection(item.sectionId)}
                className='cursor-pointer'
              >
                {item.label}
              </motion.li>
            ))}
          </ul>}
          <motion.div
            variants={{ hidden: { opacity: 0, x: 10 }, visible: { opacity: 1, x: 0 } }}
            initial='hidden'
            animate={mainControls}
            transition={{ duration: 0.3, delay: 0.3, ease: 'easeIn' }}
            className='hidden lg:flex gap-3'
          >
            {showBeAGenieButton && <BeAGenie />}
            {showJoinButton && <JoinNowButton />}
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, x: 10 }, visible: { opacity: 1, x: 0 } }}
            initial='hidden'
            animate={mainControls}
            className='lg:hidden cursor-pointer mr-5'
            transition={{ duration: 0.3, delay: 0.3, ease: 'easeIn' }}
          >
            {openMobileMenu ? (
              <X onClick={() => setOpenMobileMenu(false)} />
            ) : (
              <Image
                src={images.menuIcon.src}
                alt={images.menuIcon.alt}
                width={images.menuIcon.width}
                height={images.menuIcon.height}
                onClick={() => setOpenMobileMenu(true)}
              />
            )}
          </motion.div>
        </div>
        <div
          className={`flex lg:hidden w-full mx-auto z-30 transition-all duration-500 overflow-hidden ${
            openMobileMenu ? 'h-auto' : 'h-0'
          }`}
        >
          <ul className='w-[98%] mx-auto bg-white rounded-b-[24px] flex flex-col items-center justify-center gap-7 py-8 ps-slim leading-[21px] text-[18px]'>
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  scrollToSection(item.sectionId);
                  setOpenMobileMenu(false);
                }}
              >
                {item.label}
              </li>
            ))}
            {showBeAGenieButton && (
              <li>
                <BeAGenie />
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
