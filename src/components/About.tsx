"use client";
import React from "react";
import Education from "./Education";
import Internship from "./Internship";

export default function About() {
  return (
    <div className="pt-20" id="about">
      <p className="text-4xl text-center font-bold">About</p>
      <Internship />
      <Education />
    </div>
  );
}
