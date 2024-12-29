'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useAnimation, useInView, motion } from 'framer-motion';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import Link from 'next/link';
import WordAnimation from '../GenieComponents/WordAnimations';
import Image from 'next/image';
import Button from './Button';

interface GetReadyProps {
  content: {
    mobile: string[];
    tablet: string[];
    desktop: string[];
  };
  isProvider: boolean;
  backgroundImage: string;
  waveImageAlt: string;
}

const GetReady: React.FC<GetReadyProps> = ({
  content,
  isProvider,
  backgroundImage,
  waveImageAlt,
}) => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const getReadyRef = useRef(null);
  const mainControls = useAnimation();
  const isInView = useInView(getReadyRef, { once: false });

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
            IS_PROVIDER: isProvider ? 'Yes' : 'No',
            OPT_IN: true,
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response.status === 200) {
        toast.success("You've been subscribed!");
        setEmail('');
      }
    } catch {
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
      <Toaster position="top-right" toastOptions={{ duration: 5000 }} reverseOrder={false} />
      <Image
        src={backgroundImage}
        alt={waveImageAlt}
        className="absolute left-0 top-[20%] w-[110%] sm:top-[0%]"
        width={1376}
        height={396}
      />
      <div>
        <WordAnimation variant="desktop" content={content} />
        <WordAnimation variant="tablet" content={content} />
        <WordAnimation variant="mobile" content={content} />
      </div>

      <motion.form
        ref={getReadyRef}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        onSubmit={handleSubscribe}
        transition={{ duration: 0.3, delay: 0.6, ease: 'easeIn' }}
        className="ps-slim mt-[1rem] flex h-[56px] w-[95%] items-center justify-between rounded-[2rem] border-2 border-[#111928] py-1 pl-4 pr-1 sm:mt-0 md:w-[549px] lg:w-[458px]"
      >
        <input
          type="email"
          name="newsletter"
          id="newsletter"
          required
          placeholder="Enter your email address."
          className="h-full w-[90%] border-none outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button text="Submit" variant="solid" loading={loading} type="submit" />
        {/* <SubmitBtn loading={loading} /> */}
      </motion.form>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: 0.5, ease: 'easeIn' }}
        className="flex w-[95%] justify-center sm:w-[620px] sm:items-center"
      >
        <div className="ps-slim w-[483px] text-center text-sm leading-5 sm:text-[1rem]">
          By submitting this form you agree to receive Servgenie newsletters and accept our
          <Link
            className="pl-1 pr-1 text-[#358ede] hover:underline"
            target="_blank"
            href="/legal/terms"
          >
            terms
          </Link>
          and
          <Link
            className="pl-1 text-[#358ede] hover:underline"
            target="_blank"
            href="/legal/privacy-policy"
          >
            privacy policy
          </Link>
          .
        </div>
      </motion.div>
    </div>
  );
};

export default GetReady;
