// /components/common/Navbar.tsx
'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Logo from './Logo';
import { motion, useAnimation, useInView } from 'framer-motion';
import { X } from 'lucide-react';
import { scrollToSection } from '@/utils/navgiation';
import { images } from '@/constants/assets';
import Button from './Button';

interface NavbarProps {
  menuItems: { label: string; sectionId: string }[];
  showJoinButton?: boolean;
  showBeAGenieButton?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  menuItems,
  showJoinButton = true,
  showBeAGenieButton = false,
}) => {
  const navbarRef = useRef(null);
  const mainControls = useAnimation();
  const isInView = useInView(navbarRef, { once: false });
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      mainControls.start(isInView ? 'visible' : 'hidden');
    }
  }, [isInView, mainControls]);

  return (
    <div className="z-60 relative my-6 flex h-20 w-full justify-center bg-transparent">
      <div
        className={`absolute z-40 mx-auto w-full max-w-[24rem] rounded-[30px] bg-white py-3 shadow-[2px_4px_22px_-7px_rgba(143,82,255,0.4)] sm:max-w-[85rem]`}
        id="navbar"
        ref={navbarRef}
      >
        <div className="flex w-full items-center justify-between pl-5 pr-3">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -10 },
              visible: { opacity: 1, x: 0 },
            }}
            initial={'hidden'}
            animate={mainControls}
            transition={{ duration: 0.3, delay: 0.2, ease: 'easeIn' }}
          >
            <Logo />
          </motion.div>
          {
            <ul className="ps-slim ml-20 hidden items-center gap-10 font-medium leading-6 lg:flex">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{
                    duration: 0.3,
                    delay: 0.2 + index * 0.2,
                    ease: 'easeIn',
                  }}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="cursor-pointer"
                >
                  {item.label}
                </motion.li>
              ))}
            </ul>
          }
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 10 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.3, delay: 0.3, ease: 'easeIn' }}
            className="hidden gap-3 lg:flex"
          >
            {showBeAGenieButton && (
              <Button text="Be a Genie" variant="outline" href="/be-a-genie" />
            )}
            {showJoinButton && (
              <Button text="Join Now" variant="gradient" onClick={() => scrollToSection('join')} />
            )}
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 10 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            className="mr-5 cursor-pointer lg:hidden"
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
          className={`z-30 mx-auto flex w-full overflow-hidden transition-all duration-500 lg:hidden ${
            openMobileMenu ? 'h-auto' : 'h-0'
          }`}
        >
          <ul className="ps-slim mx-auto flex w-[98%] flex-col items-center justify-center gap-7 rounded-b-[24px] bg-white py-8 text-[18px] leading-[21px]">
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
                <Button text="Be a Genie" variant="outline" href="/be-a-genie" />
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
