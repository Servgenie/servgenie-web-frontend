'use client';

import Lottie from 'lottie-react';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAnimation, useInView, motion } from 'framer-motion';
import { Lottie1, Lottie2, Lottie3, Lottie4 } from '@/assets/lotties';

const WhatWeOffer = () => {
  const [activeOffer, setActiveOffer] = useState(1);
  const [visisted2, setVisisted2] = useState(false);
  const [visisted3, setVisisted3] = useState(false);
  const [visisted4, setVisisted4] = useState(false);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const whatWeOfferRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const mainControls = useAnimation();
  const isInView = useInView(whatWeOfferRef, { once: false });

  useEffect(() => {
    if (!window) return;

    if (window.innerWidth < 1080) return;

    const maxSVGHeight = 340;

    const scrollDiv = ScrollTrigger.create({
      trigger: whatWeOfferRef.current,
      start: 'top top',
      end: 'bottom bottom',
      pin: '.scrollDiv',
      pinSpacing: true,
      onUpdate: (self) => {
        const progress = self.progress * 100;

        const newHeight = (progress / 100) * maxSVGHeight;

        gsap.to('.fill-rect', {
          height: newHeight,
          y: 0,
          duration: 0.1,
          ease: 'none',
          fill: '#8F52FF',
        });

        // set active index
        if (progress < 25) {
          setActiveOffer(1);
        } else if (progress > 25 && progress < 58) {
          setActiveOffer(2);
          setVisisted2(true);
        } else if (progress > 58 && progress < 85) {
          setActiveOffer(3);
          setVisisted3(true);
        } else if (progress > 85) {
          setActiveOffer(4);
          setVisisted4(true);
        }

        if (progress < 25) {
          gsap.to('.rightDiv-1', {
            y: '2vh',
            opacity: 1,
            duration: 1,
          });

          // forces next div out of the scroll
          gsap.to('.rightDiv-2', {
            y: '45vh',
            opacity: 1,
            duration: 1,
          });
        } else if (progress > 25 && progress < 63) {
          // forces prev div out of the scroll
          gsap.to('.rightDiv-1', {
            y: '-100rem',
            opacity: 0,
            duration: 1,
          });

          gsap.to('.rightDiv-2', {
            y: '-25rem',
            opacity: 1,
            duration: 1,
          });

          // forces next div out of the scroll
          gsap.to('.rightDiv-3', {
            y: '45vh',
            opacity: 1,
            duration: 1,
          });
        } else if (progress > 63 && progress < 85) {
          // forces prev div out of the scroll
          gsap.to('.rightDiv-2', {
            y: '-100rem',
            opacity: 0,
            duration: 1,
          });

          gsap.to('.rightDiv-3', {
            y: '-53rem',
            opacity: 1,
            duration: 1,
          });

          // forces next div out of the scroll
          gsap.to('.rightDiv-4', {
            y: '15vh',
            opacity: 1,
            duration: 1,
          });
        } else if (progress > 55) {
          gsap.to('.rightDiv-3', {
            y: '-150rem',
            opacity: 0,
            duration: 1,
          });

          gsap.to('.rightDiv-4', {
            y: '-81rem',
            opacity: 1,
            duration: 1,
          });
        }
      },
    });

    scrollTriggerRef.current = scrollDiv;

    return () => {
      scrollDiv.kill();
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    } else {
      mainControls.start('hidden');
    }
  }, [isInView, mainControls]);

  const scrollToSection = (index: number) => {
    if (typeof window == 'undefined') return;

    const progress = (index - 1) * 0.25 + 0.125; // Center of each section
    if (scrollTriggerRef.current) {
      let scrollPosition =
        scrollTriggerRef.current.start +
        (scrollTriggerRef.current.end - scrollTriggerRef.current.start) * progress;

      if (index == 3) {
        scrollPosition = scrollPosition + 80;
      }
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      className="mx-auto mt-[56px] w-[95%] lg:mt-[9rem] lg:h-[400vh]"
      id="features"
      ref={whatWeOfferRef}
    >
      <div className="scrollDiv flex h-full w-full flex-col gap-[57px] rounded-[24px] bg-[#EDE8FF] py-4 sm:rounded-[3rem] lg:max-h-[48rem]">
        <div className="mx-auto mt-10 flex h-[10%] w-[95%] items-center justify-between px-6 md:mt-[20px] lg:mt-[56px] lg:max-w-[85rem]">
          <p className="ps-bulky mx-auto w-[100%] text-center text-[2.2rem] leading-[30px] sm:text-[4rem] sm:leading-[86px]">
            What we offer
          </p>
        </div>

        {/* cards */}

        {/* for desktop */}

        <div className="relative mx-auto mb-10 hidden max-w-[85rem] overflow-hidden lg:flex lg:max-h-[80rem]">
          {/* left div */}

          <div className="absolute left-9 top-16 -z-10">
            <svg
              width="6"
              height="340"
              viewBox="0 0 6 340"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="6" height="340" rx="3" fill="white" />
              <rect className="fill-rect" width="6" height="0" y="0" rx="3" fill="#8F52FF" />
            </svg>
          </div>

          <div className="flex flex-1 flex-col justify-center gap-6">
            <div
              onClick={() => scrollToSection(1)}
              className="flex w-full cursor-pointer items-center justify-center gap-4 pl-5"
            >
              <div
                className={`flex h-[36px] w-[48px] items-center justify-center self-start rounded-full border-2 border-[#8F52FF] px-2.5 ${
                  activeOffer === 1 ? 'bg-[#8F52FF] text-white' : 'bg-white text-black'
                }`}
              >
                <p className="ps-bulky text-[20px] leading-[28px]">1</p>
              </div>

              <div className="flex flex-col gap-1 self-end">
                <p className="ps-bulky text-[24px] leading-[28px] text-[#101828]">Any wish</p>

                <p className="ps-slim w-[80%] text-[16px] leading-[20.8px] text-[#727171]">
                  Servgenie offers a broad task scope, streamlining access to any service you
                  require. If you can hashtag it, you can wish for it. Why need several apps, when
                  you can do all of it in one?
                </p>
              </div>
            </div>

            <div
              onClick={() => scrollToSection(2)}
              className="flex w-full cursor-pointer items-center justify-center gap-4 pl-5"
            >
              <div
                className={`flex items-center justify-center self-start rounded-full px-2.5 py-0.5 ${
                  activeOffer === 2 ? 'bg-[#8F52FF] text-white' : 'bg-white text-black'
                } ${visisted2 && 'border-2 border-[#8F52FF]'} `}
              >
                <p className="ps-bulky text-[20px] leading-[28px]">2</p>
              </div>

              <div className="flex flex-col gap-1 self-end">
                <p className="ps-bulky text-[24px] leading-[28px] text-[#101828]">Ease of Use</p>

                <p className="ps-slim w-[80%] text-[16px] leading-[20.8px] text-[#727171]">
                  Finding help doesn’t have to be complicated. No need to answer pages of questions,
                  and confirm with providers one by one. Just make your wish, tag it, and our genies
                  will come to you.
                </p>
              </div>
            </div>

            <div
              onClick={() => scrollToSection(3)}
              className="flex w-full cursor-pointer items-center justify-center gap-4 pl-5"
            >
              <div
                className={`flex items-center justify-center self-start rounded-full px-2.5 py-1 ${
                  activeOffer === 3 ? 'bg-[#8F52FF] text-white' : 'bg-white text-black'
                } ${visisted3 && 'border-2 border-[#8F52FF]'} `}
              >
                <p className="ps-bulky text-[20px] leading-[28px]">3</p>
              </div>

              <div className="flex flex-col gap-1 self-end">
                <p className="ps-bulky text-[24px] leading-[28px] text-[#101828]">
                  Verified & Trusted{' '}
                </p>

                <p className="ps-slim w-[80%] text-[16px] leading-[20.8px] text-[#727171]">
                  We prioritize your safety. Servgenie requires providers to pass identity
                  verification and background checks. And to give you the extra confidence to trust
                  our Genies, their ratings, reviews, and success rates are visible on their
                  profile.
                </p>
              </div>
            </div>

            <div
              onClick={() => scrollToSection(4)}
              className="flex w-full cursor-pointer items-center justify-center gap-4 pl-5"
            >
              <div
                className={`flex h-[36px] w-[48px] items-center justify-center self-start rounded-full ${
                  activeOffer === 4 ? 'bg-[#8F52FF] text-white' : 'bg-white text-black'
                } ${visisted4 && 'border-2 border-[#8F52FF]'} `}
              >
                <p className="ps-bulky text-[20px] leading-[28px]">4</p>
              </div>

              <div className="flex flex-col gap-1 self-end">
                <p className="ps-bulky text-[24px] leading-[28px] text-[#101828]">
                  Price Negotiation
                </p>

                <p className="ps-slim w-[80%] text-[16px] leading-[20.8px] text-[#727171]">
                  As the Wisher, you get to seal the deal! Wishes receive bids from Genies, allowing
                  you to select or negotiate for the best deal.
                </p>
              </div>
            </div>
          </div>

          {/* right div */}

          <div className="rightParentDiv relative flex flex-1 flex-col items-center justify-start overflow-hidden">
            <div className="rightDiv-1 min-h-[442px] w-[608px] rounded-[48px] bg-white">
              <div className="flex h-full w-full items-center justify-center">
                <Lottie animationData={Lottie2} className="h-[85%]" loop={true} autoPlay={true} />
              </div>
            </div>

            <div className="rightDiv-2 min-h-[442px] w-[608px] rounded-[48px] bg-white">
              <div className="flex h-full w-full items-center justify-center">
                <Lottie animationData={Lottie1} className="h-[85%]" loop={true} autoPlay={true} />
              </div>
            </div>

            <div className="rightDiv-3 min-h-[442px] w-[608px] rounded-[48px] bg-white">
              <div className="flex h-full w-full items-center justify-center">
                <Lottie animationData={Lottie3} className="h-[85%]" loop={true} autoPlay={true} />
              </div>
            </div>

            <div className="rightDiv-4 min-h-[442px] w-[608px] rounded-[48px] bg-white">
              <div className="flex h-full w-full items-center justify-center">
                <Lottie animationData={Lottie4} className="h-[85%]" loop={true} autoPlay={true} />
              </div>
            </div>
          </div>
        </div>

        {/* for tablet and mobile */}

        <div className="flex h-full w-full flex-col flex-wrap items-center justify-center gap-9 sm:flex-row lg:hidden">
          {/* card 1 */}

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.3, delay: 0.2, ease: 'easeIn' }}
            className="flex w-[95%] flex-col items-center justify-center gap-2 rounded-[2.5rem] bg-white p-4 md:h-[460px] md:w-[330px] lg:h-[480px] lg:w-[419px]"
          >
            <Lottie animationData={Lottie2} className="w-[95%]" />

            <h1 className="ps-bulky text-center text-[2rem]">Any wish</h1>
            <p className="ps-slim text-center text-[1rem] leading-6 text-[#727171]">
              Servgenie offers a broad task scope, streamlining access to any service you require.
              If you can hashtag it, you can wish for it. Why need several apps, when you can do all
              of it in one?
            </p>
          </motion.div>

          {/* card 2 */}

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.3, delay: 0.5, ease: 'easeIn' }}
            className="relative flex w-[95%] flex-col items-center justify-center gap-2 rounded-[2.5rem] bg-white p-4 md:h-[460px] md:w-[330px] lg:h-[480px] lg:w-[419px]"
          >
            <Lottie animationData={Lottie1} className="w-[95%]" />

            <h1 className="ps-bulky text-center text-[2rem]">Ease of Use</h1>
            <p className="ps-slim text-center text-[1rem] leading-6 text-[#727171]">
              Finding help doesn’t have to be complicated. No need to answer pages of questions, and
              confirm with providers one by one. Just make your wish, tag it, and our genies will
              come to you.
            </p>
          </motion.div>

          {/* card 3 */}

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.3, delay: 0.8, ease: 'easeIn' }}
            className="relative flex w-[95%] flex-col items-center justify-center gap-2 rounded-[2.5rem] bg-white p-4 md:h-[460px] md:w-[330px] lg:h-[480px] lg:w-[419px]"
          >
            <Lottie animationData={Lottie3} className="w-[95%]" />

            <h1 className="ps-bulky text-center text-[2rem]">Verified & Trusted</h1>
            <p className="ps-slim text-center text-[1rem] leading-6 text-[#727171]">
              We prioritize your safety. Servgenie requires providers to pass identity verification
              and background checks. For additional trust, their ratings, and reviews, can also be
              found on their profile.
            </p>
          </motion.div>

          {/* card 4 -> right now only available on mobile and desktop*/}

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.3, delay: 1, ease: 'easeIn' }}
            className="relative flex w-[95%] flex-col items-center justify-center gap-2 rounded-[2.5rem] bg-white p-4 md:h-[460px] md:w-[330px] lg:hidden lg:h-[480px] lg:w-[419px]"
          >
            <Lottie animationData={Lottie4} className="w-[95%]" />

            <h1 className="ps-bulky text-center text-[2rem]">Price Negotiation</h1>
            <p className="ps-slim text-center text-[1rem] leading-6 text-[#727171]">
              As the Wisher, you get to seal the deal! Wishes receive bids from Genies, allowing you
              to select or negotiate for the best deal.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
