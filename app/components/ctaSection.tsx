"use client";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useInView } from "react-intersection-observer";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function CtaSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleSubmit = async () => {
  if (!email) {
    setStatus("Please enter your email.");
    return;
  }

  setStatus("Submitting...");

  try {
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (data.success) {
      setStatus("Subscribed! 🎉");
      setEmail("");
    } else {
      setStatus("Error: " + data.error);
    }
  } catch (err) {
    setStatus("Something went wrong.");
  }
};

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Background rectangle */}
      <div className="absolute inset-0 rounded-[10px]" />

      {/* Hero image */}
      {/* <img
                src="/Pattern1.png"
                alt="Hero"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl animate-float"
            /> */}

      {/* Crimson Shadow Glow */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 150% at 50% -20%, #FE2C5E 0%, rgba(254,44,94,0.25) 60%, transparent 90%)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          backgroundSize: "100% auto", // wider than before for smoother edges
        }}
      />

      {/* Content */}
      <div
        ref={ref}
        className={`absolute z-100 inset-0 flex flex-col justify-center items-center gap-[70px] -translate-y-10 transition-all duration-700
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Title */}
        <h1 className="text-white font-inter text-[40px] sm:text-[56px] font-medium leading-[1.16] text-center tracking-[-0.015em] transition-transform duration-500 hover:scale-[1.02]">
          Join the Waitlist
        </h1>

        {/* Form */}
        <div className="flex flex-col gap-[10px]">
          <div className="flex py-[19px] px-4 items-center gap-2.5 rounded-lg border border-[rgba(255,255,255,0.15)] min-w-[300px] w-full max-w-[400px] overflow-auto relative transition-transform duration-300 hover:scale-[1.02]">
            <input
              type="email"
              placeholder="Your business email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex flex-col justify-center shrink-0 text-[rgba(255,255,255,0.50)] font-inter text-md font-normal leading-[1.625em] w-[158px] h-[20px] bg-transparent border-none outline-none"
            />

            <button
              type="button"
              onClick={handleSubmit}
              className="hidden cursor-pointer lg:flex py-[5px] px-[15px] justify-center items-center gap-2 absolute right-[5px] top-2 rounded-lg bg-[#FFF] w-[97px] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(254,44,94,0.5)]"
            >
              <p className="text-[#000] font-inter text-[15px] font-medium leading-[2.06667em] w-fit tracking-[-0.0101em]">
                Submit
              </p>
            </button>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="lg:hidden w-full cursor-pointer flex py-[5px] px-[15px] justify-center items-center gap-2 rounded-lg bg-[#FFF] w-[97px] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(254,44,94,0.5)]"
          >
            <p className="text-[#000] font-inter text-[15px] font-medium leading-[2.06667em] w-fit tracking-[-0.0101em]">
              Submit
            </p>
          </button>
        </div>

        {/* Status Message */}
        {status && (
          <p className="text-white mt-2 transition-opacity duration-500">
            {status}
          </p>
        )}
      </div>

      {/* Extra CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes pulseGlow {
          0%,
          100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-pulseGlow {
          animation: pulseGlow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );

  function SubmitButton() {
    return (
      <button
        type="button"
        onClick={handleSubmit}
        className="cursor-pointer flex py-[5px] px-[15px] justify-center items-center gap-2 absolute right-[5px] top-2 rounded-lg bg-[#FFF] w-[97px] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(254,44,94,0.5)]"
      >
        <p className="text-[#000] font-inter text-[15px] font-medium leading-[2.06667em] w-fit tracking-[-0.0101em]">
          Submit
        </p>
      </button>
    );
  }
}
