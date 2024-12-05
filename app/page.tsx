"use client";

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Footer from "@/components/common/Footer";
// import Navbar from "@/components/common/Navbar";

import WhatIsServgenie from "@/components/section/Home/WhatIsServgenie";
import Hero from '@/components/section/Home/HomeHero';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import GetReady from '@/components/common/GetReady';
const Navbar = dynamic(() => import('@/components/common/Navbar'), { ssr: false })

const WhatWeOffer = dynamic(
  () => import('@/components/section/Home/WhatWeOffer'),
  { ssr: false }
);
const menuItems = [
  { label: 'About us', sectionId: 'about' },
  { label: 'Features', sectionId: 'features' },
];

const footerMenuItems = [
  { label: 'About us', sectionId: 'about' },
  { label: 'Features', sectionId: 'features' },
];

const getReadyContent = {
  mobile: ['Get Ready for', '$ervgenie Service', 'Magic is Just Around', 'the Corner!'],
  tablet: ['Get Ready for $ervgenie', 'Service Magic is Just Around', 'the Corner!'],
  desktop: ['Get Ready for $ervgenie', 'Service Magic is Just Around', 'the Corner!'],
};


export default function Home() {
  const [mounted, setMounted] = useState(false);
  const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

  if (!reCaptchaKey) {
    throw new Error('ReCaptcha key is missing in environment variables');
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
      <Navbar menuItems={menuItems} showBeAGenieButton={true} />
      <Hero />
        <WhatIsServgenie />
        <WhatWeOffer />
        <GetReady
  content={getReadyContent}
  isProvider={false}
  backgroundImage="/assets/wave.png"
  waveImageAlt="wave"
/>
        <Footer menuItems={footerMenuItems} />
      </GoogleReCaptchaProvider>
    </>
  );
}
