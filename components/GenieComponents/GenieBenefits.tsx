'use client';
import React, { useEffect, useRef, useState } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAnimation, useInView, motion } from 'framer-motion';

import Lottie from 'lottie-react';
import useWindowSize from '@/hooks/use-window';
import {
  Lottie1,
  Lottie2,
  Lottie3,
  Lottie4,
  LottieGenie1,
  LottieGenie2,
  LottieGenie3,
  LottieGenie4,
} from '../../assets/lotties';
import { images } from '@/constants/assets';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const GenieBenefits = () => {
  const GenieBenefits = useRef(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const scrollIndicator = useRef<HTMLDivElement>(null);

  const mainControls = useAnimation();
  const isInView = useInView(GenieBenefits, { once: false });
  const [arrowIndex, setArrowIndex] = useState(1);
  const [visitedIndex, setVisitedIndex] = useState(1);

  const { width } = useWindowSize();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    } else {
      mainControls.start('hidden');
    }
  }, [isInView, mainControls]);
  useEffect(() => {
    if (!window) return;

    if (width < 1024) {
      return;
    }

    const scrollDiv = ScrollTrigger.create({
      trigger: '#features',
      start: `top top`,
      end: 'bottom bottom',
      pinSpacing: true,
      pin: '.scrollDiv',
      onUpdate: (self) => {
        const progress = self.progress * 100;

        if (scrollIndicator.current) {
          scrollIndicator.current.style.height = `${progress}%`;
        }

        if (progress < 25) {
          setArrowIndex(1);
          setVisitedIndex(1);

          gsap.to('.text-1', { color: '#101828', duration: 0.5 });
          gsap.to('.text-2, .text-3, .text-4', { color: '#6B7280', duration: 0.5 });

          gsap.to('.rightDiv-1', { y: '0%', opacity: 1, duration: 0.5 });
          gsap.to('.rightDiv-2', { y: '100%', opacity: 0, duration: 0.5 });
          gsap.to('.rightDiv-3', { y: '200%', opacity: 0, duration: 0.5 });
          gsap.to('.rightDiv-4', { y: '300%', opacity: 0, duration: 0.5 });
        } else if (progress >= 25 && progress < 50) {
          setArrowIndex(2);
          setVisitedIndex(2);

          gsap.to('.text-2', { color: '#101828', duration: 0.5 });
          gsap.to('.text-1, .text-3, .text-4', { color: '#6B7280', duration: 0.5 });

          gsap.to('.rightDiv-1', { y: '-100%', opacity: 0, duration: 0.5 });
          gsap.to('.rightDiv-2', { y: '-105%', opacity: 1, duration: 0.5 });
          gsap.to('.rightDiv-3', { y: '100%', opacity: 0, duration: 0.5 });
          gsap.to('.rightDiv-4', { y: '200%', opacity: 0, duration: 0.5 });
        } else if (progress >= 50 && progress < 75) {
          setArrowIndex(3);
          setVisitedIndex(3);

          gsap.to('.text-3', { color: '#101828', duration: 0.5 });
          gsap.to('.text-1, .text-2, .text-4', { color: '#6B7280', duration: 0.5 });

          gsap.to('.rightDiv-1', { y: '-200%', opacity: 0, duration: 0.5 });
          gsap.to('.rightDiv-2', { y: '-200%', opacity: 0, duration: 0.5 });
          gsap.to('.rightDiv-3', { y: '-210%', opacity: 1, duration: 0.5 });
          gsap.to('.rightDiv-4', { y: '100%', opacity: 0, duration: 0.5 });
        } else if (progress >= 75) {
          setArrowIndex(4);
          setVisitedIndex(4);

          gsap.to('.text-4', { color: '#101828', duration: 0.5 });
          gsap.to('.text-1, .text-2, .text-3', { color: '#6B7280', duration: 0.5 });

          gsap.to('.rightDiv-1', { y: '-300%', opacity: 0, duration: 0.5 });
          gsap.to('.rightDiv-2', { y: '-200%', opacity: 0, duration: 0.5 });
          gsap.to('.rightDiv-3', { y: '-300%', opacity: 0, duration: 0.5 });
          gsap.to('.rightDiv-4', { y: '-310%', opacity: 1, duration: 0.5 });
        }
      },
    });

    scrollTriggerRef.current = scrollDiv;

    return () => {
      scrollDiv.kill();
    };
  }, [width]);

  const scrollToSection = (index: number) => {
    if (typeof window == 'undefined') return;

    const progress = (index - 1) * 0.25 + 0.125; // Center of each section
    if (scrollTriggerRef.current) {
      let scrollPosition =
        scrollTriggerRef.current.start +
        (scrollTriggerRef.current.end - scrollTriggerRef.current.start) * progress;

      if (index == 3) {
        scrollPosition = scrollPosition + 50;
      }
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className="lg:h-[600vh]" ref={GenieBenefits} id="features">
      <div className='scrollDiv mx-auto max-w-[90rem] rounded-[48px] bg-[url("/assets/genie/hero/bg.png")] bg-cover bg-center pb-10 pt-12 lg:h-screen lg:pt-0'>
        <div className="flex w-full flex-col items-center justify-center gap-2 md:gap-4 lg:gap-4">
          <p className="ps-bulky text-center text-[32px] leading-[30px] text-[#111928] md:text-[56px] md:leading-[56px] lg:text-[52px] lg:leading-[86px]">
            Genie Benefits
          </p>
          <p className="ps-slim lg:leadnig-[30px] px-4 text-center text-[12px] leading-[15px] text-[#6B7280] md:text-[18px] md:leading-[23px] lg:text-[20px]">
            Here's why signing up as a Genie is the smart move to make:
          </p>
        </div>

        {/* card animations for destkop */}
        <div className="mt-12 hidden h-[75%] w-full overflow-hidden lg:flex">
          <div className="flex flex-1 flex-col items-start justify-center gap-6 pl-12">
            <div className="flex gap-6">
              <div
                className={`flex h-[80px] w-[80px] items-center justify-center rounded-full border-2 border-[#EDEDED] bg-white ${visitedIndex === 1 ? 'opacity-100' : ''} `}
              >
                <div
                  className={`flex h-[48px] w-[48px] items-center justify-center rounded-full transition-all duration-500 ${visitedIndex === 1 ? 'bg-[#8F52FF]' : 'border-2 border-[#EDEDED]'} `}
                >
                  {visitedIndex === 1 ? (
                    <Image
                      src={images.whiteStar.src}
                      width={images.whiteStar.width}
                      height={images.whiteStar.height}
                      alt={images.whiteStar.alt}
                    />
                  ) : (
                    <Image
                      src={images.grayStar.src}
                      width={images.grayStar.width}
                      height={images.grayStar.height}
                      alt={images.grayStar.alt}
                    />
                  )}
                </div>
              </div>

              <div
                className={`flex h-[80px] w-[80px] items-center justify-center rounded-full border-2 border-[#EDEDED] bg-white ${visitedIndex === 2 ? 'opacity-100' : ''} `}
              >
                <div
                  className={`flex h-[48px] w-[48px] items-center justify-center rounded-full transition-all duration-500 ${visitedIndex === 2 ? 'bg-[#8F52FF]' : 'border-2 border-[#EDEDED]'} `}
                >
                  {visitedIndex === 2 ? (
                    <Image
                      width={images.whiteBag.width}
                      height={images.whiteBag.height}
                      src={images.whiteBag.src}
                      alt={images.whiteBag.alt}
                    />
                  ) : (
                    <Image
                      width={images.grayBag.width}
                      height={images.grayBag.height}
                      src={images.grayBag.src}
                      alt={images.grayBag.alt}
                    />
                  )}
                </div>
              </div>

              <div
                className={`flex h-[80px] w-[80px] items-center justify-center rounded-full border-2 border-[#EDEDED] bg-white ${visitedIndex === 3 ? 'opacity-100' : ''} `}
              >
                <div
                  className={`flex h-[48px] w-[48px] items-center justify-center rounded-full transition-all duration-500 ${visitedIndex === 3 ? 'bg-[#8F52FF]' : 'border-2 border-[#EDEDED]'} `}
                >
                  {visitedIndex === 3 ? (
                    <Image
                      width={images.whiteFlag.width}
                      height={images.whiteFlag.height}
                      src={images.whiteFlag.src}
                      alt={images.whiteFlag.alt}
                    />
                  ) : (
                    <Image
                      width={images.grayFlag.width}
                      height={images.grayFlag.height}
                      src={images.grayFlag.src}
                      alt={images.grayFlag.alt}
                    />
                  )}
                </div>
              </div>

              <div
                className={`flex h-[80px] w-[80px] items-center justify-center rounded-full border-2 border-[#EDEDED] bg-white ${visitedIndex === 4 ? 'opacity-100' : ''} `}
              >
                <div
                  className={`flex h-[48px] w-[48px] items-center justify-center rounded-full transition-all duration-500 ${visitedIndex === 4 ? 'bg-[#8F52FF]' : 'border-2 border-[#EDEDED]'} `}
                >
                  {visitedIndex === 4 ? (
                    <Image
                      width={images.whiteBulb.width}
                      height={images.whiteBulb.height}
                      src={images.whiteBulb.src}
                      alt={images.whiteBulb.alt}
                    />
                  ) : (
                    <Image
                      width={images.grayBulb.width}
                      height={images.grayBulb.height}
                      src={images.grayBulb.src}
                      alt={images.grayBulb.alt}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="ps-bulky relative flex flex-col gap-2 text-3xl leading-[48px] xl:gap-8 xl:text-[40px]">
              <div
                className="text-1 flex cursor-pointer items-center gap-6 text-[#101828]"
                onClick={() => scrollToSection(1)}
              >
                <p>Be a Jack of All Trades </p>
                {arrowIndex === 1 && (
                  <Image
                    width={images.arrow.width}
                    height={images.arrow.height}
                    src={images.arrow.src}
                    alt={images.arrow.alt}
                    className="ml-4"
                  />
                )}
              </div>

              <div
                className="text-2 flex cursor-pointer items-center gap-6 text-[#6B7280]"
                onClick={() => scrollToSection(2)}
              >
                <p>Work Close, Earn Fast </p>
                {arrowIndex === 2 && (
                  <Image
                    width={images.arrow.width}
                    height={images.arrow.height}
                    src={images.arrow.src}
                    alt={images.arrow.alt}
                    className="ml-4"
                  />
                )}
              </div>

              <div
                className="text-3 flex cursor-pointer items-center gap-6 text-[#6B7280]"
                onClick={() => scrollToSection(3)}
              >
                <p>Set Your Own Rates </p>
                {arrowIndex === 3 && (
                  <Image
                    width={images.arrow.width}
                    height={images.arrow.height}
                    src={images.arrow.src}
                    alt={images.arrow.alt}
                    className="ml-4"
                  />
                )}
              </div>

              <div
                className="text-4 flex cursor-pointer items-center gap-6 text-[#6B7280]"
                onClick={() => scrollToSection(4)}
              >
                <p>Work on Your Terms</p>
                {arrowIndex === 4 && (
                  <Image
                    width={images.arrow.width}
                    height={images.arrow.height}
                    src={images.arrow.src}
                    alt={images.arrow.alt}
                    className="ml-4"
                  />
                )}
              </div>
              <div className="absolute -left-4 top-0 h-full w-[3px] -translate-x-1.5 transform rounded-sm bg-[#D6D6E7]">
                <div ref={scrollIndicator} className="h-0 w-[3px] rounded-sm bg-[#8F52FF]"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col items-center justify-start gap-8 overflow-hidden">
            <div className="rightDiv-1 flex min-h-[512px] w-[638px] flex-col items-center justify-center rounded-[48px] bg-white px-4 py-4">
              <Lottie animationData={LottieGenie1} className="" loop={true} autoPlay={true} />
              <p className="ps-slim w-[98%] self-end text-lg leading-5 text-[#6B7280] md:text-xl lg:leading-[29px]">
                With Servgenie, you’re not limited to one type of service. From being a fitness
                coach, bodyguard, caregiver, to taking on unique tasks like companionship, waiting
                in lines, and more, you can be a jack of all trades, and still be a master of many.{' '}
              </p>
            </div>

            <div className="rightDiv-2 flex w-[638px] flex-col items-center justify-center gap-4 overflow-hidden rounded-[48px] bg-white px-4 py-4 sm:min-h-[512px]">
              <Lottie animationData={LottieGenie2} className=" " loop={true} autoPlay={true} />
              <p className="ps-slim h-fit w-[98%] self-end text-lg leading-5 text-[#6B7280] md:text-xl lg:leading-[29px]">
                Our geo-location integration allows you to see on-demand requests from clients
                nearby, cutting down travel time and enabling you to complete tasks quickly. You can
                take multiple jobs in your area with ease, maximizing your earnings while minimizing
                travel hassles. Time is money, and we help you save both.
              </p>
            </div>

            <div className="rightDiv-3 flex min-h-[512px] w-[638px] flex-col items-center justify-center rounded-[48px] bg-white px-4 py-4">
              <Lottie animationData={LottieGenie3} className="h-full" loop={true} autoPlay={true} />
              <p className="ps-slim w-[98%] self-end text-lg leading-5 text-[#6B7280] md:text-xl lg:leading-[29px]">
                With Servgenie’s service bidding, you can initiate offers on available wishes and
                set the value for your work. You decide your worth, and we ensure you keep 100% of
                what you earn—plus tips! Payments are handled securely through our platform, so you
                can focus on delivering quality service while we take care of the rest.
              </p>
            </div>

            <div className="rightDiv-4 flex min-h-[512px] w-[638px] flex-col items-center justify-center gap-6 rounded-[48px] bg-white px-4 py-4">
              <Lottie animationData={LottieGenie4} className="" loop={true} autoPlay={true} />
              <p className="leading ps-slim w-[98%] self-end text-lg leading-5 text-[#6B7280] md:text-xl lg:leading-[29px]">
                Enjoy complete flexibility in your work. Choose the services you offer and jobs you
                take, decide when and where you work, and create a schedule that fits your
                lifestyle. It's all about freedom and independence—work on your terms and be your
                own boss!
              </p>
            </div>
          </div>
        </div>

        {/* card animations for mobile and tablet */}

        <div className="mt-10 flex w-full flex-wrap items-center justify-center gap-8 overflow-hidden lg:hidden xl:gap-6">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.3, delay: 0.5, ease: 'easeIn' }}
            className="relative flex w-[95%] flex-col items-center justify-center gap-2 rounded-[2.5rem] bg-white p-4 md:h-[380px] md:w-[330px] md:gap-4 lg:h-[480px] lg:w-[419px]"
          >
            <Lottie animationData={Lottie1} className="mb-4 w-[95%]" />

            <h1 className="ps-bulky text-center text-[24px] leading-[28px] md:text-[24px] md:leading-[28px]">
              Be a Jack of All Trades
            </h1>
            <p className="leading-3-[16px] ps-slim text-center text-[12px] leading-[16px] text-[#727171] md:text-[15px]">
              With Servgenie, you’re not limited to one type of service. From being a fitness coach,
              bodyguard, caregiver, to taking on unique tasks like companionship, waiting in lines,
              and more, you can be a jack of all trades, and still be a master of many.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.3, delay: 0.5, ease: 'easeIn' }}
            className="relative flex w-[95%] flex-col items-center justify-center gap-2 rounded-[2.5rem] bg-white p-4 md:h-[380px] md:w-[330px] md:gap-4 lg:h-[480px] lg:w-[419px]"
          >
            <Lottie animationData={Lottie2} className="mb-4 w-[95%]" />

            <h1 className="ps-bulky text-center text-[24px] leading-[28px] md:text-[24px] md:leading-[28px]">
              Work Close, Earn Fast
            </h1>
            <p className="leading-3-[16px] ps-slim text-center text-[12px] leading-[16px] text-[#727171] md:text-[15px]">
              Our geo-location integration allows you to see on-demand requests from clients nearby,
              cutting down travel time and enabling you to complete tasks quickly. You can take on
              multiple jobs in your area with ease, maximizing your earnings while minimizing travel
              hassles. Time is money, and we help you save both.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.3, delay: 0.5, ease: 'easeIn' }}
            className="relative flex w-[95%] flex-col items-center justify-center gap-2 rounded-[2.5rem] bg-white p-4 md:h-[380px] md:w-[330px] md:gap-4 lg:h-[480px] lg:w-[419px]"
          >
            <Lottie animationData={Lottie3} className="mb-4 w-[95%]" />

            <h1 className="ps-bulky text-center text-[24px] leading-[28px] md:text-[24px] md:leading-[28px]">
              Set Your Own Rates
            </h1>
            <p className="leading-3-[16px] ps-slim text-center text-[12px] leading-[16px] text-[#727171] md:text-[15px]">
              With Servgenie’s service bidding, you can initiate offers on available wishes and set
              the value for your work. You decide your worth, and we ensure you keep 100% of what
              you earn—plus tips! Payments are handled securely through our platform, so you can
              focus on delivering quality service while we take care of the rest.
            </p>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.3, delay: 0.5, ease: 'easeIn' }}
            className="relative flex w-[95%] flex-col items-center justify-center gap-2 rounded-[2.5rem] bg-white p-4 md:h-[380px] md:w-[330px] lg:h-[480px] lg:w-[419px]"
          >
            <Lottie animationData={Lottie4} className="mb-4 w-[95%]" />

            <h1 className="ps-bulky text-center text-[24px] leading-[28px] md:text-[24px] md:leading-[28px]">
              Work on Your Teams
            </h1>
            <p className="leading-3-[16px] ps-slim text-center text-[12px] leading-[16px] text-[#727171] md:text-[15px]">
              Enjoy complete flexibility in your work. Choose the services you offer and jobs you
              take, decide when and where you work, and create a schedule that fits your lifestyle.
              It's all about freedom and independence—work on your terms and be your own boss!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GenieBenefits;
