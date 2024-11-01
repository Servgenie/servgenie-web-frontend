'use client';

import { ArrowUpRight } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import Desktop from './wordAnimations/Desktop';
import Tablet from './wordAnimations/Tablet';
import Mobile from './wordAnimations/Mobile';
import { useAnimation, useInView, motion } from 'framer-motion';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import Link from 'next/link';

const GetReady = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [onFocus, setOnFocus] = useState(false);

  const GetReadyRef = useRef(null);
  const mainControls = useAnimation();
  const isInView = useInView(GetReadyRef, { once: false });

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = executeRecaptcha && (await executeRecaptcha('newsletter_subscribe'));
    if (!token) {
      toast.error("We've detected a bot-like behavior. Please try again later.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.length === 0 || !emailRegex.test(email)) {
      toast.error('Please enter a valid email address!');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        '/api/subscribe',
        {
          email,
          attributes: {
            IS_PROVIDER: 'No', // valid value: 'Yes' or 'No', 'Yes' for Genies
            OPT_IN: true,
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response) {
        toast.success("You've been subscribed!");
        setEmail('');
      }
    } catch (error: any) {
      toast.error('An error occurred. Please try again!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    } else {
      mainControls.start('hidden');
    }
  }, [isInView, mainControls]);

  return (
    <div
      className="relative mt-[4rem] flex min-h-[55vh] w-full flex-col items-center justify-center gap-8 sm:mt-0 md:mt-20 md:min-h-[50vh] lg:h-screen"
      id="join"
    >
      <Toaster toastOptions={{ duration: 5000 }} position="top-right" reverseOrder={false} />
      <img
        src="/assets/wave.png"
        alt="wave"
        className="absolute left-0 top-[20%] w-[110%] sm:top-[0%]"
      />

      {/* for desktop */}
      <Desktop />

      {/* for tablet */}
      <Tablet />

      {/* for mobile */}
      <Mobile />

      <motion.form
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        onSubmit={(e) => handleSubscribe(e)}
        transition={{ duration: 0.3, delay: 0.6, ease: 'easeIn' }}
        className={`ps-slim mt-[1rem] flex h-[56px] w-[95%] items-center justify-between rounded-[2rem] border-2 py-1 pl-4 pr-1 sm:mt-0 md:w-[549px] lg:w-[458px] ${
          onFocus ? 'border-[#111928]' : 'border-[#D1D5DB]'
        }`}
        ref={GetReadyRef}
      >
        <input
          type="email"
          name="newsletter"
          id="newsletter"
          required
          placeholder="Enter Email ID"
          className="h-full w-[80%] border-none outline-none"
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className={`ps-slim group mr-1 flex h-[40px] w-[97px] cursor-pointer items-center justify-center gap-1 rounded-full bg-[#111928] text-sm text-white`}
        >
          {loading ? (
            <div className="flex items-center gap-1">
              <div className="loader"></div>
            </div>
          ) : (
            <>
              <p>Submit</p>
              <div className={`relative ml-1 mt-[.3rem] h-5 w-5 overflow-hidden text-white`}>
                <div className="absolute transition-all duration-200 group-hover:-translate-y-[14px] group-hover:translate-x-3">
                  <ArrowUpRight className="h-4 w-4" />
                  <ArrowUpRight className="h-4 w-4 -translate-x-3 -translate-y-0.5" />
                </div>
              </div>{' '}
            </>
          )}
        </button>
      </motion.form>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: 0.5, ease: 'easeIn' }}
        className="flex w-[95%] cursor-pointer items-start justify-between gap-5 sm:w-[620px] sm:items-center"
      >
        <p className="ps-slim text-center text-sm sm:text-[1rem]">
          By submitting this form you agree to receive Servgenie newsletters and accept that the
          email you provided will be used in accordance with the following
          <Link
            className="pl-1 text-blue-500 hover:underline"
            target="_blank"
            href="/legal/privacy-policy"
          >
            privacy policy
          </Link>
          .
        </p>
        <div className="flex items-center gap-2 border border-red-500"></div>
      </motion.div>
    </div>
  );
};

export default GetReady;
