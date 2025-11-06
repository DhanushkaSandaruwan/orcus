"use client"
import { useState, useEffect } from "react";

const customers = [
  {
    quote: "0rcus is the future of preemptive cybersecurity, delivered fast in boardroom language.",
    name: "Neuman Osman",
    title: "Director of Wells Fargo Technology Banking",
    image: "https://placehold.co/217x217",
  },
  {
    quote: "Securing our infrastructure has never been easier, thanks to 0rcus.",
    name: "Alicia Tan",
    title: "CTO at FinTech Solutions",
    image: "https://placehold.co/217x217",
  },
  {
    quote: "0rcus helped us anticipate threats before they even appeared.",
    name: "David Chen",
    title: "VP of Security at GlobalBank",
    image: "https://placehold.co/217x217",
  },
];

export default function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % customers.length);
        setFade(true); // fade in new customer
      }, 500); // duration must match CSS fade-out
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const customer = customers[currentIndex];

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center relative text-white">
      {/* Title */}
      <div className="text-center">
        <div className="overflow-hidden text-6xl font-medium font-['Inter'] leading-[65px] mb-4">
          CUSTOMERS
        </div>
        <div className="text-xl font-normal font-['Inter'] leading-loose">
          Trusted by blue-chip leaders worldwide.
          <br />
          Built to scale for any team.
        </div>
      </div>

      {/* Grid + Content */}
      <div className="relative w-[1050px] h-[420px] mt-10 flex justify-center items-center">
        {/* Image */}
        <img
          key={customer.name}
          className={`absolute left-[260px] top-[160px] w-40 h-40 rounded-[20px] transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          src={customer.image}
          alt={customer.name}
        />

        {/* Grid lines */}
        <div className="absolute left-[460px] top-0 origin-top-left rotate-90 opacity-60 outline outline-1 outline-neutral-900 w-[500px]" />
        <div className="absolute left-[220px] top-0 origin-top-left rotate-90 opacity-60 outline outline-1 outline-neutral-900 w-[500px]" />
        <div className="absolute left-0 top-[140px] opacity-60 outline outline-1 outline-neutral-900 w-full" />
        <div className="absolute left-0 top-[340px] opacity-60 outline outline-1 outline-neutral-900 w-full" />

        {/* Text content */}
        <div
          key={customer.name + "-text"}
          className={`absolute left-[470px] top-[160px] flex flex-col justify-start items-start gap-1 max-w-[1000px] transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-2xl font-medium font-['Inter'] leading-loose">
            &quot;{customer.quote}&quot;
          </div>
          <div className="text-base font-normal font-['Inter'] leading-relaxed">
            {customer.name}
          </div>
          <div className="text-sm font-normal font-['Inter'] leading-relaxed">
            {customer.title}
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute left-[220px] top-[130px] w-64 h-64 bg-rose-500/50 rounded-full blur-[127px]" />
      </div>
    </div>
  );
}
