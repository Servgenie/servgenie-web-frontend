"use client";

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
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const spans = gsap.utils.toArray(`.${variant}TextSpan`);
      gsap.fromTo(
        spans,
        { color: "#11192866" },
        {
          color: "#000000",
          stagger: 0.05,
          scrollTrigger: {
            trigger: animationRef.current,
            start:
              variant === 'desktop'
                ? "top+=200 bottom"
                : variant === 'tablet'
                ? "top-=1000 top"
                : "top-=350 top",
            end:
              variant === 'desktop'
                ? "top top"
                : variant === 'tablet'
                ? "top-=700 top"
                : "top-=150 top",
            scrub: true,
          },
        }
      );
    }, animationRef);

    return () => ctx.revert();
  }, [variant]);

  // Define the text size and leading classes based on the variant
  const textSizeClasses =
    variant === 'desktop'
      ? 'text-[72px] leading-[86px]'
      : variant === 'tablet'
      ? 'text-[56px] leading-[67px]'
      : 'text-[30px] leading-[41px]';

  // Define visibility classes based on the variant
  const visibilityClasses =
    variant === 'desktop'
      ? 'hidden lg:flex'
      : variant === 'tablet'
      ? 'hidden md:flex lg:hidden'
      : 'flex md:hidden';

  return (
    <div
      ref={animationRef}
      className={`${visibilityClasses} w-full ${textSizeClasses} ps-medium flex-col items-center justify-center ps-bulky`}
    >
      {content[variant].map((line, index) => (
        <div key={index} className="flex text-center">
          {line.split('').map((char, idx) =>
            char === ' '
              ? (
                <span key={idx} className={`${variant}TextSpan`}>&nbsp;</span>
              )
              : char === '$'
              ? (
                <Image
                width={56}
                height={90}
                  key={idx}
                  src="/assets/logo.svg"
                  alt="logo"
                  className={
                    variant === 'mobile'
                      ? 'w-[25px] mt-1 mx-1'
                      : variant === 'tablet'
                      ? 'w-[40px] mt-1 mx-1'
                      : 'w-[55px] mt-1 mx-1'
                  }
                />
              )
              : (
                <span key={idx} className={`${variant}TextSpan`}>{char}</span>
              )
          )}
        </div>
      ))}
    </div>
  );
};

export default WordAnimation;
