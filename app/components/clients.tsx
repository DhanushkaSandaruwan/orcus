export default function Clients() {
  return (
    <button className="cursor-pointer text-nowrap flex py-[78px] px-[90px] flex-col justify-center items-center gap-10 min-w-screen min-h-screen overflow-auto relative">
      <p className="flex flex-col justify-center shrink-0 text-[#FFF] font-inter text-[56px] font-medium leading-[1.16071em] w-[434px] h-12 text-center tracking-[-0.015em]">
        CUSTOMERS
      </p>
      <p className="text-[#FFF] font-inter text-xl font-normal leading-[1.55em] w-[486px] text-center tracking-[-0.0001em]">
        Trusted by blue-chip leaders worldwide. Built to scale for any team.
      </p>
      <div className="shrink-0 w-[990px] h-[401px] relative">
        <img
          src="/Avatar3x1.png"
          className="shrink-0 rounded-[20px] w-[217px] h-[217px] absolute left-[202px] top-[86px] max-w-none"
          alt="Avatar@3x 1"
        />
        <div className="bg-linear-[90deg,#1413150%,#FFF16.5%,#EAEAEA86.5%,#020103100%] w-[401px] absolute left-[419px] top-0 opacity-[60%]"></div>
        <div className="bg-linear-[90deg,#1413150%,#FFF16.5%,#EAEAEA86.5%,#020103100%] w-[401px] absolute left-[202px] top-0 opacity-[60%]"></div>
        <div className="bg-linear-[90deg,#1413150%,#FFF16.5%,#EAEAEA86.5%,#020103100%] w-[990px] absolute left-0 top-[86px] opacity-[60%]"></div>
        <div className="bg-linear-[90deg,#1413150%,#FFF16.5%,#EAEAEA86.5%,#020103100%] w-[990px] absolute left-0 top-[303px] opacity-[60%]"></div>
      </div>
      <div className="flex flex-col items-start gap-5 absolute right-[195px] bottom-[213px] w-[541px]">
        <p className="text-[#FFF] font-inter text-[23px] font-medium leading-[1.47826em] w-full tracking-[-0.0001em]">
          &quot;0rcus is the future of preemptive cybersecurity, delivered fast
          in boardroom language.&quot;
        </p>
        <div className="w-[289px] h-12 relative">
          <p className="flex flex-col justify-center shrink-0 text-[#FFF] font-inter text-md font-normal leading-[1.625em] w-[127px] h-[17px] absolute left-0 top-0 tracking-[-0.0001em]">
            Neuman Osman
          </p>
          <p className="text-[#FFF] font-inter text-sm font-normal leading-[1.85714em] w-[289px] h-[26px] absolute left-0 top-[22px] tracking-[-0.0001em]">
            Director of Wells Fargo Technology Banking
          </p>
        </div>
      </div>
      <div className="absolute left-[379px] bottom-[169px] rounded-[258px] bg-[rgba(254,44,94,0.50)] w-[253px] h-[258px]"></div>
    </button>
  );
}