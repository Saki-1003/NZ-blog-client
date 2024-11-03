"use client";
import React from "react";
import { useEffect, useRef } from "react";

const ScrollReveal = ({ children, move, delay, duration, className }) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    async function animate() {
      if (sectionRef.current) {
        //Dynamic import
        const sr = (await import("scrollreveal")).default;
        sr().reveal(sectionRef.current, {
          duration: duration,
          delay: delay,
          opacity: 0,
          origin: move,
          distance: "100px",
          viewFactor: 0.2,
        });
      }
    }
    animate();
  }, [sectionRef]);
  return (
    <div className={`${className}`} ref={sectionRef}>
      {children}
    </div>
  );
};
export default ScrollReveal;
