"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";

export default function HeroSection() {
  return (
    <div className="pt-20">
      <div className="h-[25rem] w-full rounded-md flex md:items-center md:justify-center  relative overflow-hidden">
        <Spotlight
          className="-top-40 md:-top-20 left-0 md:left-60"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10 w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Abhishek Sharma
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            I{`'`}m currently pursuing BTech from Computer Science & Engineering
            department. I{`'`}m seeking a high quality environment where I can
            expand my skillsets by learning and exploring new things. I am a
            problem solver and I love challenges because they help me grow.
            Possess exceptional communication and interpersonal skills.
          </p>
        </div>
      </div>
    </div>
  );
}
