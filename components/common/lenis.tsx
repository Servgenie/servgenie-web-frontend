"use client";

import ReactLenis from "lenis/react";
import { PropsWithChildren, useEffect, useState } from "react";

function SmoothScrolling({ children }: PropsWithChildren) {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    // Check if the browser is Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    setIsSafari(isSafari);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        lerp: isSafari ? 0.01 : 0.08,
        duration: 1.5,
        smoothWheel: true
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;