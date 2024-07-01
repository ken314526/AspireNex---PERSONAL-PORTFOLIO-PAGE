"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import projectData from "@/data/projects.json";

export default function SlidingProjects() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col items-center justify-center relative overflow-hidden">
      <p className="text-4xl text-center pb-16 font-bold">Projects</p>
      <InfiniteMovingCards
        items={projectData.projects}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
