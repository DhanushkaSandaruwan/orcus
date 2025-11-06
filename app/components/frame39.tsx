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
    <div className="flex flex-col items-center justify-center px-[50px] pb-20 pt-0 min-w-screen bg-[#000] gap-10 overflow-hidden">
      {/* === Top Row (3 Cards) === */}
      <div className="flex justify-center gap-5 w-full max-w-[1280px]">
        {topCards.map((card, i) => (
          <div
            key={i}
            className="relative w-1/3 min-h-[260px] rounded-[20px] p-[2px]
                       bg-gradient-to-br from-[#FFFFFF] to-[#FE2C5E]"
          >
            <div className="flex flex-col justify-center items-center text-center p-[50px] h-full rounded-[18px] bg-[#000]">
              <p className="text-[#FFF] font-montserrat text-[25px] font-semibold leading-[1.4em]">
                {card.title}
              </p>
              <p className="text-[rgba(255,255,255,0.70)] mt-3 font-montserrat text-md leading-[1.6em]">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* === Bottom Row (2 Cards) === */}
      <div className="flex justify-center gap-5 w-full max-w-[1280px]">
        {bottomCards.map((card, i) => (
          <div
            key={i}
            className="relative w-1/2 min-h-[260px] rounded-[20px] p-[2px]
                       bg-gradient-to-br from-[#FFFFFF] to-[#FE2C5E]"
          >
            <div className="flex flex-col justify-center items-center text-center p-[50px] h-full rounded-[18px] bg-[#000]">
              <p className="text-[#FFF] font-montserrat text-[25px] font-semibold leading-[1.4em]">
                {card.title}
              </p>
              <p className="text-[rgba(255,255,255,0.70)] mt-3 font-montserrat text-md leading-[1.6em] max-w-[400px]">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
