export default function CtaSection() {
  return (
    <div className="relative w-full h-[473px]">
      {/* Background rectangle */}
      <div className="absolute inset-0 rounded-[10px]" />

      {/* Hero image */}
      <img
        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        src="/Pattern1.png"
        alt="Hero"
      />

      <div className="min-h-screen w-full relative bg-black">
        {/* Crimson Shadow Background with Top Glow */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255, 80, 120, 0.25), transparent 70%), #000000",
          }}
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center gap-6">
          {/* Title */}
          <h1 className="text-white font-inter text-[56px] font-medium leading-[1.16] text-center tracking-[-0.015em]">
            Join the Waitlist
          </h1>

          {/* Form */}
          <div className="flex py-[19px] px-4 items-center gap-2.5 rounded-lg border border-[rgba(255,255,255,0.15)] min-w-3/12 overflow-auto relative">
            <button className="cursor-pointer text-nowrap flex py-[5px] px-[15px] justify-center items-center gap-2 absolute right-[5px] top-1 rounded-lg bg-[#FFF] w-[97px]">
              <p className="text-[#000] font-inter text-[15px] font-medium leading-[2.0666700000000002em] w-fit tracking-[-0.0101em]">
                Submit
              </p>
            </button>
            <p className="flex flex-col justify-center shrink-0 text-[rgba(255,255,255,0.50)] font-inter text-md font-normal leading-[1.625em] w-[158px] h-[11px] tracking-[-0.0001em]">
              Your business email
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
