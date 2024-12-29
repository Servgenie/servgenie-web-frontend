'use client';

import React, { useRef, useEffect, useState } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';

interface LottieHoverProps {
  width?: number | string;
  height?: number | string;
  animationData: unknown;
  isPlaying?: boolean;
}

const LottieHoverAnimation: React.FC<LottieHoverProps> = ({
  width = '100%',
  height = '100%',
  animationData,
  isPlaying = false,
}) => {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(1.5);

      if (isPlaying && !isAnimating) {
        setIsAnimating(true);
        lottieRef.current.play();
      }
      if (!isPlaying && isAnimating) {
        lottieRef.current.play();
      }
    }
  }, [isPlaying, isAnimating]);

  const handleComplete = () => {
    if (lottieRef.current) {
      lottieRef.current.goToAndStop(20, true);
      if (!isPlaying) {
        setIsAnimating(false);
      }
    }
  };

  return (
    <div style={{ width, height, cursor: 'pointer' }}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        autoplay={false}
        onComplete={handleComplete}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default LottieHoverAnimation;
