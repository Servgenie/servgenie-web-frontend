'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

interface WordAnimationProps {
  variant: 'desktop' | 'tablet' | 'mobile';
  content: { mobile: string[]; desktop: string[]; tablet: string[] };
}

const WordAnimation: React.FC<WordAnimationProps> = ({ variant, content }) => {
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Add initial state setup
    if (animationRef.current) {
      const spans = animationRef.current.querySelectorAll(`.${variant}TextSpan`);
      spans.forEach((span) => {
        gsap.set(span, { color: '#11192866' });
      });
    }

    const initAnimation = () => {
      const ctx = gsap.context(() => {
        const spans = gsap.utils.toArray(`.${variant}TextSpan`);

        const config = {
          desktop: {
            start: 'top center+=100',
            end: 'bottom center-=100',
          },
          tablet: {
            start: 'top 60%',
            end: 'bottom 40%',
          },
          mobile: {
            start: 'top 70%',
            end: 'bottom 30%',
          },
        };

        gsap.fromTo(
          spans,
          {
            color: '#11192866',
          },
          {
            color: '#000000',
            stagger: variant === 'mobile' ? 0.03 : 0.05,
            scrollTrigger: {
              trigger: animationRef.current,
              start: config[variant].start,
              end: config[variant].end,
              scrub: true,
              invalidateOnRefresh: true,
              once: false,
            },
          },
        );
      }, animationRef);

      return ctx;
    };

    let ctx: gsap.Context;
    const timer = setTimeout(() => {
      ctx = initAnimation();
      ScrollTrigger.refresh();
    }, 1500);

    const resizeObserver = new ResizeObserver(() => {
      ScrollTrigger.refresh(true);
    });

    if (variant !== 'desktop') {
      resizeObserver.observe(document.body);
    }

    return () => {
      clearTimeout(timer);
      ctx?.revert();
      resizeObserver.disconnect();
    };
  }, [variant]);

  const textSizeClasses =
    variant === 'desktop'
      ? 'text-[72px] leading-[86px]'
      : variant === 'tablet'
        ? 'text-[56px] leading-[67px]'
        : 'text-[30px] leading-[41px]';

  const visibilityClasses =
    variant === 'desktop'
      ? 'hidden lg:flex'
      : variant === 'tablet'
        ? 'hidden md:flex lg:hidden'
        : 'flex md:hidden';

  return (
    <div
      ref={animationRef}
      className={`${visibilityClasses} w-full ${textSizeClasses} ps-medium ps-bulky flex-col items-center justify-center`}
    >
      {content[variant].map((line, index) => (
        <div key={index} className="flex text-center">
          {line.split('').map((char, idx) =>
            char === ' ' ? (
              <span key={idx} className={`${variant}TextSpan`}>
                &nbsp;
              </span>
            ) : char === '$' ? (
              <Image
                width={56}
                height={90}
                key={idx}
                src="/assets/logo.svg"
                alt="logo"
                className={
                  variant === 'mobile'
                    ? 'mx-1 mt-1 w-[25px]'
                    : variant === 'tablet'
                      ? 'mx-1 mt-1 w-[40px]'
                      : 'mx-1 mt-1 w-[55px]'
                }
              />
            ) : (
              <span key={idx} className={`${variant}TextSpan`}>
                {char}
              </span>
            ),
          )}
        </div>
      ))}
    </div>
  );
};

export default WordAnimation;
