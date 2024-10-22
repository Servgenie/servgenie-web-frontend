"use client";

import React, { useEffect, useRef, useState } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import { useAnimation, useInView, motion } from "framer-motion";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const answers = [
  "/assets/hero/mobile/answer/1.svg",
  "/assets/hero/mobile/answer/2.svg",
  "/assets/hero/mobile/answer/3.svg",
  "/assets/hero/mobile/answer/4.svg",
  "/assets/hero/mobile/answer/5.svg",
  "/assets/hero/mobile/answer/6.svg",
  "/assets/hero/mobile/answer/1.svg",
  "/assets/hero/mobile/answer/2.svg",
  "/assets/hero/mobile/answer/3.svg",
  "/assets/hero/mobile/answer/4.svg",
  "/assets/hero/mobile/answer/5.svg",
  "/assets/hero/mobile/answer/6.svg",
]

const Mobile: React.FC = () => {
  const MobileHeroImageRef = useRef<HTMLDivElement>(null);
  const mainControls = useAnimation();
  const isInView = useInView(MobileHeroImageRef, { once: false });

  const [images, setImages] = useState({
    img1: "/assets/hero/mobile/1.png",
    img2: "/assets/hero/mobile/2.png",
    img3: "/assets/hero/mobile/5.svg",
    img4: "/assets/hero/mobile/3.png",
    img5: "/assets/hero/mobile/2.svg",
    img6: "/assets/hero/mobile/4.svg",
    img7: "/assets/hero/mobile/1.png",
    img8: "/assets/hero/mobile/2.png",
    img9: "/assets/hero/mobile/5.svg",
    img10: "/assets/hero/mobile/3.png",
    img11: "/assets/hero/mobile/2.svg",
    img12: "/assets/hero/mobile/4.svg",
  });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={MobileHeroImageRef}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.3, delay: 0.2, ease: "easeIn" }}
      className="flex gap-5  min-w-full sm:-mt-[150px] -mt-20 left-0 overflow-x-hidden"
    >
      <Splide
        options={{
          gap: "1rem",
          autoWidth: true,
          type: "loop",
          drag: "free",
          arrows: false,
          pagination: false,
          autoScroll: { pauseOnFocus: true, pauseOnHover: true, speed: .3 },
        }}
        extensions={{ AutoScroll }}
      >
        {Object.entries(images).map(([key, src], index) => (
          <SplideSlide key={key}>
            <div className="card-container">
              <div className="card">
                <div className="card-face card-front">
                  <img src={src} alt="Front image" />
                </div>
                <div className="card-face card-back">
                  <img src={answers[index]} alt="Back image" />
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </motion.div>
  );
};

export default Mobile;
