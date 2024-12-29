'use client';

import { images } from '@/constants/assets';
import { scrollToSection } from '@/utils/navgiation';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  const handleLogoClick = () => {
    scrollToSection('navbar');
  };

  return (
    <Link href="/">
      <div className="flex cursor-pointer items-center gap-2" onClick={() => handleLogoClick()}>
        <Image
          src={images.logo3.src}
          alt={images.logo3.alt}
          className="w-[104px]"
          width={images.logo3.width}
          height={images.logo3.height}
        />
      </div>
    </Link>
  );
};

export default Logo;
