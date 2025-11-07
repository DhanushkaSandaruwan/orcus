"use client";
import Companies from "./companies";

export default function Hero() {
  const features = [
    { title: "Zero setup needed" },
    { title: "Run itself from start to finish" },
    { title: "On-demand expert, instant proof" },
  ];

  return (
    <div className="relative w-screen h-screen/2 overflow-hidden flex flex-col items-center justify-center">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/videos/back.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center gap-10 px-4 text-center mt-10">
        {/* Badge */}
        <div className="flex py-2 px-3.5 items-center gap-2 rounded-full border border-[rgba(255,255,255,0.15)] bg-black">
          <button className="bg-rose-500 rounded-full px-3 py-1 text-black font-bold text-xs">
            INTRODUCING
          </button>
          <p className="text-rose-500 font-medium text-md">
            Cybersecurity on autopilot
          </p>
        </div>

        {/* Heading */}
        <div className="flex flex-col items-center gap-1.5 sm:gap-2">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold uppercase text-white text-center">
            Outcome <span className="text-rose-500">AI</span>
          </h1>

          <p className="text-white text-xl sm:text-3xl font-semibold max-w-lg text-center">
            Press play → Protected
          </p>
        </div>

        {/* Features */}
        <div className="bg-white/10 backdrop-blur-md border-2 border-white/40 rounded-3xl px-8 py-6 flex flex-col gap-4 shadow-lg">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-rose-500 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 10 7"
                  fill="none"
                >
                  <path
                    d="M0.833252 3.33337L3.33325 5.83337L8.33325 0.833374"
                    stroke="black"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-white font-medium">{feature.title}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex flex-col items-center gap-3">
          <button
            onClick={() =>
              window.open("https://www.linkedin.com/in/nxadams", "_blank")
            }
            className="bg-white text-black px-4 py-2 rounded-lg font-medium"
          >
            Featured In
          </button>
          <p className="text-gray-400">Nic Adams, 0rcus CEO</p>
          <Companies />
        </div>
      </div>
    </div>
  );
}
