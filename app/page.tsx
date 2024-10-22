"use client";

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import GetReady from "@/components/section/Home/GetReady";
import WhatIsServgenie from "@/components/section/Home/WhatIsServgenie";
import Hero from '@/components/section/Home/Hero';

const GoogleReCaptchaProvider = dynamic(
  () => import('react-google-recaptcha-v3').then(mod => mod.GoogleReCaptchaProvider),
  { ssr: false }
);


const WhatWeOffer = dynamic(
  () => import('@/components/section/Home/WhatWeOffer'),
  { ssr: false }
);

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY!;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
        <Navbar />
        <Hero />
        <WhatIsServgenie />
        <WhatWeOffer />
        <GetReady />
        <Footer />
      </GoogleReCaptchaProvider>
    </>
  );
}
