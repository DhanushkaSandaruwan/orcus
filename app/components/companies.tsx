"use client";
import { useEffect, useState } from "react";

const logos = [
  '/companies/Clip path group.png',
  '/companies/CNN_Business_logo-1.svg fill.png',
  '/companies/NASDAQ_Logo-1.svg fill.png',
  '/companies/The_Seattle_Times_logo-1.svg.png',
  '/companies/U.S._News__World_Report_logo-1.svg fill.png',
  '/companies/USA_Today_2020-01-29-1.svg fill.png',
  '/companies/Yahoo_Finance_logo-1.svg.png',
];

export default function Companies() {
  const [animationDuration, setAnimationDuration] = useState(33);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setAnimationDuration(40); // mobile slower
      else setAnimationDuration(33); // desktop faster
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-screen overflow-x-auto touch-pan-x scrollbar-none py-6">
      <div
        className="flex whitespace-nowrap gap-6 relative"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        style={{ "--animation-duration": `${animationDuration}s` } as any}
      >
        {/* Scrolling container */}
        <div className="flex animate-scroll gap-6">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`company-${index}`}
              className="h-16 inline-block pointer-events-none grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          display: flex;
          animation: scroll var(--animation-duration) linear infinite;
        }

        .animate-scroll:hover,
        .animate-scroll:focus-within {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
