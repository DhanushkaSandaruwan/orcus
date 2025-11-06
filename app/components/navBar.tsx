"use client";
import OrcusIcon from "../assets/svg/OrcusIcon";
import { useState } from "react";
import { MobileMenuIcon } from "@/app/assets/svg/MobileMenuIcon";

export default function Navm() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-black/70 w-full h-20 border-b border-white/20 flex items-center justify-between px-[20px] lg:px-10">
      {/* Left: Logo */}
      <div className="flex items-center">
        <OrcusIcon />
      </div>

      <div className="flex w-full justify-between">
        {/* Center: Menu */}
        <div
          className={`w-full lg:w-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-7
                     px-10 py-[50px] lg:py-2 lg:rounded-[60px] outline outline-1 outline-white/20
                     absolute start-0 lg:static lg:ms-auto
                     bg-black/70
                     lg:bg-transparent
                     lg:opacity-100
                     ${open ? "top-20 opacity-100" : "-top-96 opacity-0"}`}
        >
          {["PLATFORM", "SOLUTIONS", "CUSTOMERS"].map((item) => (
            <a
              onClick={() => setOpen(false)}
              key={item}
              href={`#${item.toLowerCase()}`}
              className="flex items-center gap-[3px] text-white/60 text-xs font-normal font-['Inter'] leading-relaxed cursor-pointer hover:text-white transition-colors"
            >
              {item}
              {item === "PLATFORM" && (
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden opacity-60 lg:block"
                >
                  <path
                    d="M11.6845 5.55953L7.30953 9.93453C7.2689 9.97521 7.22065 10.0075 7.16754 10.0295C7.11442 10.0515 7.05749 10.0628 7 10.0628C6.9425 10.0628 6.88557 10.0515 6.83246 10.0295C6.77935 10.0075 6.7311 9.97521 6.69047 9.93453L2.31547 5.55953C2.23338 5.47744 2.18726 5.3661 2.18726 5.25C2.18726 5.1339 2.23338 5.02256 2.31547 4.94047C2.39756 4.85837 2.5089 4.81226 2.625 4.81226C2.7411 4.81226 2.85244 4.85837 2.93453 4.94047L7 9.00648L11.0655 4.94047C11.1061 4.89982 11.1544 4.86758 11.2075 4.84558C11.2606 4.82358 11.3175 4.81226 11.375 4.81226C11.4325 4.81226 11.4894 4.82358 11.5425 4.84558C11.5956 4.86758 11.6439 4.89982 11.6845 4.94047C11.7252 4.98112 11.7574 5.02937 11.7794 5.08248C11.8014 5.13559 11.8127 5.19251 11.8127 5.25C11.8127 5.30748 11.8014 5.36441 11.7794 5.41752C11.7574 5.47063 11.7252 5.51888 11.6845 5.55953Z"
                    fill="white"
                  />
                </svg>
              )}
            </a>
          ))}
        </div>

        {/* Right: Contact Button */}
        <div className="ms-auto p-1.5 rounded-xl outline outline-1 outline-white/20 backdrop-blur-sm">
          <button
            onClick={() => (window.location.href = "mailto:access@0rcus.com")}
            className="w-28 h-7 px-3.5 py-0.5 bg-rose-500 rounded-lg shadow-[inset_0px_0px_6px_3px_rgba(255,255,255,0.25)] outline outline-1 outline-white/20 flex items-center justify-center cursor-pointer"
          >
            <span className="text-white text-sm font-normal font-['Inter']">
              CONTACT
            </span>
          </button>
        </div>

        <button
          className="lg:hidden text-white ms-[10px]"
          onClick={() => setOpen(!open)}
        >
          <MobileMenuIcon />
        </button>
      </div>
    </nav>
  );
}
