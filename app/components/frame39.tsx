"use client"
import { useInView } from "react-intersection-observer";

export default function Frame39() {
  const topCards = [
    {
      title: "PENETRATION TESTING",
      desc: "Runs alongside to reveal real attacker paths and confirm fixes.",
    },
    {
      title: "RED TEAM OPERATIONS",
      desc: "Targets high-value scenarios to pressure-test detection and response.",
    },
    {
      title: "RISK BASELINE",
      desc: "Aligns priorities with business impact so the right closures happen first.",
    },
  ];

  const bottomCards = [
    {
      title: "OSINT INVESTIGATIONS",
      desc: "Surfaces external exposure and adversary signals.",
    },
    {
      title: "DATA REMOVAL",
      desc: "Shrinks public attack surface. Outcome AI verifies takedowns across 500+ global data brokers.",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-[70px] pb-20 pt-0 min-w-screen w-full bg-[#000] px-[20px] lg:px-[50px]">
      {/* === Top Row (3 Cards) === */}
      <div className="grid grid-flow-col grid-cols-1 grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 w-full max-w-[1280px] gap-x-[20px] gap-y-[70px] justify-center">
        {topCards.map((card, i) => (
          <AnimatedCard key={i} title={card.title} desc={card.desc} />
        ))}
      </div>

      {/* === Bottom Row (2 Cards) === */}
      <div className="grid grid-flow-col grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 w-full max-w-[1100px] gap-x-[20px] gap-y-[70px] justify-center">
        {bottomCards.map((card, i) => (
          <AnimatedCard key={i} title={card.title} desc={card.desc} />
        ))}
      </div>
    </div>
  );
}

// AnimatedCard Component
function AnimatedCard({ title, desc }: { title: string; desc: string }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`relative min-h-[260px] rounded-[20px] p-[2px] grid
        bg-gradient-to-br from-[#FFFFFF] to-[#FE2C5E]
        w-full max-w-full transition-all duration-700
        transform ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
    >
      <div
        className="flex flex-col justify-center items-center text-center p-[50px] h-full rounded-[18px] bg-[#000]
          transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(254,44,94,0.5)]"
      >
        <p className="text-[#FFF] font-montserrat text-[25px] font-semibold leading-[1.4em]">
          {title}
        </p>
        <p className="text-[rgba(255,255,255,0.70)] mt-3 font-montserrat text-md leading-[1.6em]">
          {desc}
        </p>
      </div>
    </div>
  );
}
