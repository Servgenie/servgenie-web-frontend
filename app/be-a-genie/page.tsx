"use client";
import dynamic from 'next/dynamic';
import Footer from '@/components/GenieComponents/Footer';
import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Become from '@/components/GenieComponents/Become';
import GetReady from '@/components/GenieComponents/GetReady';
import Hero from '@/components/GenieComponents/Hero';

const GenieBenefits = dynamic(() => import('@/components/GenieComponents/GenieBenefits'), { ssr: false });

const Page = () => {
    const reCaptchaKey = process.env.RECAPTCHA_KEY!;

    return (
        <>
            <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
                <Hero />
                <Become />
                <GenieBenefits />
                <GetReady />
                <Footer />
            </GoogleReCaptchaProvider>
        </>
    );
};

export default Page;
