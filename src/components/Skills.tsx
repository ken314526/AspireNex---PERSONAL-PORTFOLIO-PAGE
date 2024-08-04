"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import skillsData from "@/data/skills.json";

export default function Skills() {
  return (
    <div className="pt-24 text-neutral-50" id="skills">
      <p className="text-4xl text-center font-bold">Skills</p>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={skillsData.skills} />
      </div>
    </div>
  );
}
