// /hooks/useScrollAnimation.ts
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseScrollAnimationOptions {
  trigger?: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean | string | Element;
  pinSpacing?: boolean | string;
  onUpdate?: () => void;
  disabled?: boolean;
  [key: string]: any;
}

export const useScrollAnimation = (
  triggerRef: React.RefObject<HTMLElement>,
  options: UseScrollAnimationOptions,
  deps: any[] = [],
) => {
  useEffect(() => {
    if (!triggerRef.current) return;
    if (options.disabled) return;

    const scrollTrigger = ScrollTrigger.create({
      trigger: triggerRef.current,
      ...options,
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [triggerRef, options, ...deps]);
};
