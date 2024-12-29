// /components/common/Footer.tsx
'use client';
import React, { useEffect, useRef } from 'react';
import Logo from './Logo';
import { useAnimation, useInView, motion } from 'framer-motion';
import { scrollToSection } from '@/utils/navgiation';
import { images } from '@/constants/assets';
import Image from 'next/image';

interface FooterProps {
  menuItems: { label: string; sectionId: string }[];
}

const Footer: React.FC<FooterProps> = ({ menuItems }) => {
  const footerRef = useRef(null);
  const mainControls = useAnimation();
  const isInView = useInView(footerRef, { once: false });

  useEffect(() => {
    mainControls.start(isInView ? 'visible' : 'hidden');
  }, [isInView, mainControls]);

  const handleSocialsClick = (social: string) => {
    if (!window) return;
    const urls: Record<string, string> = {
      linkedin: 'https://www.linkedin.com/company/servgenie/about/',
      instagram: 'https://www.instagram.com/servgenie',
      threads: 'https://www.threads.net/@servgenie',
      facebook: 'https://www.facebook.com/servgenie.co/',
    };
    window.open(urls[social], '_blank');
  };

  return (
    <>
      <div
        className="md: mt-8 min-h-[30vh] md:h-[15vh] lg:mt-4 lg:h-[30vh] lg:px-[4rem]"
        ref={footerRef}
      >
        <div className="flex flex-col items-center justify-center gap-7 sm:flex-row sm:justify-between sm:gap-5 md:px-8 lg:px-0">
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.3, delay: 0.3, ease: 'easeIn' }}
          >
            <Logo />
          </motion.div>
          <ul className="ps-slim flex items-center justify-center gap-4 text-[14px] leading-7 sm:gap-8 sm:text-[16px]">
            {menuItems.map((item, index) => (
              <motion.li
                key={index}
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.2, ease: 'easeIn' }}
                className="cursor-pointer text-gray-700 hover:text-gray-900 hover:underline"
                onClick={() => scrollToSection(item.sectionId)}
              >
                {item.label}
              </motion.li>
            ))}
          </ul>
          <div className="flex items-center justify-center gap-[21px]">
            {['linkedin', 'instagram', 'fb', 'threads'].map((social, idx) => (
              <motion.img
                key={social}
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.3, delay: 0.5 + idx * 0.2, ease: 'easeIn' }}
                src={`/assets/footer/${social}.svg`}
                alt={social}
                className="cursor-pointer transition-all hover:scale-110 hover:opacity-100"
                onClick={() => handleSocialsClick(social)}
              />
            ))}
          </div>
        </div>
        <div className="my-7 w-full border"></div>
        <div className="flex items-start justify-between md:px-6 lg:px-0">
          <div className="ps-slim flex w-full flex-col items-center justify-center gap-2 px-6 text-[13px] leading-[14px] sm:px-0 sm:text-[16px] sm:leading-4">
            <motion.p
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.3, delay: 0.4, ease: 'easeIn' }}
              className="text-black"
            >
              © 2024 Servgenie® LLC.
            </motion.p>
          </div>
        </div>
      </div>
      <Image
        src={images.footerBackground.src}
        alt={images.footerBackground.alt}
        className="mx-auto hidden lg:block"
        width={images.footerBackground.width}
        height={images.footerBackground.height}
      />
      <Image
        src={images.footerBackground.src}
        alt={images.footerBackground.alt}
        className="mx-auto block w-[80%] sm:hidden"
        width={images.footerBackground.width}
        height={images.footerBackground.height}
      />
    </>
  );
};

export default Footer;
