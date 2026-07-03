"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export default function LenisAnimation({ children }) {
     useEffect(() => {
          const lenis = new Lenis({
               duration: 2,
               touchMultiplier: 2,
               smoothWheel: true,
          });

          const raf = (time) => {
               lenis.raf(time);
               requestAnimationFrame(raf);
          };
          requestAnimationFrame(raf);

          return () => {
               lenis.destroy();
          };
     }, []);
     return children;
}
