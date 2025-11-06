"use client"
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function CtaSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async () => {
    if (!email) {
      setStatus("Please enter your email.");
      return;
    }
    setStatus("Submitting...");

    const { data, error } = await supabase
      .from("subscribers")
      .insert([{ email }]);

    if (error) {
      setStatus(error.message);
    } else {
      setStatus("Subscribed! 🎉");
      setEmail("");
    }
  };

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
            {/* Email Input */}
            <input
              type="email"
              placeholder="Your business email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex flex-col justify-center shrink-0 text-[rgba(255,255,255,0.50)] font-inter text-md font-normal leading-[1.625em] w-[158px] h-[11px] bg-transparent border-none outline-none"
            />

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="cursor-pointer text-nowrap flex py-[5px] px-[15px] justify-center items-center gap-2 absolute right-[5px] top-1 rounded-lg bg-[#FFF] w-[97px]"
            >
              <p className="text-[#000] font-inter text-[15px] font-medium leading-[2.0666700000000002em] w-fit tracking-[-0.0101em]">
                Submit
              </p>
            </button>
          </div>

          {/* Status Message */}
          {status && <p className="text-white mt-2">{status}</p>}
        </div>
      </div>
    </div>
  );
}
