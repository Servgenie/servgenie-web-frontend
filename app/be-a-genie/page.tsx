'use client';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Become from '@/components/GenieComponents/Become';
import Hero from '@/components/GenieComponents/GenieHero';
import Footer from '@/components/common/Footer';
import GetReady from '@/components/common/GetReady';

const GenieBenefits = dynamic(() => import('@/components/GenieComponents/GenieBenefits'), {
  ssr: false,
});
const Navbar = dynamic(() => import('@/components/common/Navbar'), { ssr: false });

const genieMenuItems = [
  { label: 'Become a Genie', sectionId: 'about' },
  { label: 'Genie Benefits', sectionId: 'features' },
];

const getReadyContent = {
  mobile: [
    "Unlock your earning",
    "potentials with",
    "$ervgenie, and help",
    "Wishers grant their",
    "wishes."
  ],
  tablet: [
    "Unlock your earning",
    "potentials with $ervgenie,",
    "and help Wishers grant",
    "their wishes."
  ],
  desktop: [
    "Unlock your earning potentials",
    "with $ervgenie, and help",
    "Wishers grant their wishes."
  ],
};

const Page = () => {
  const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY!;

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      <Navbar menuItems={genieMenuItems} showJoinButton={true} />
      {domLoaded && (
        <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
          <Hero />
          <Become />
          <GenieBenefits />
          <GetReady
            content={getReadyContent}
            isProvider={true}
            backgroundImage="/assets/genie/wave.png"
            waveImageAlt="wave"
          />
          <Footer menuItems={genieMenuItems} />
        </GoogleReCaptchaProvider>
      )}
    </>
  );
};

export default Page;
