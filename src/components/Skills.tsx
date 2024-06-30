"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

export default function Skills() {
  const skills = [
    {
      title: "MERN Stack",
      link: "#",
    },
    {
      title: "NodeJS",
      link: "#",
    },
    {
      title: "ReactJS",
      link: "#",
    },
    {
      title: "NextJS",
      link: "#",
    },
    {
      title: "Python",
      link: "#",
    },
    {
      title: "Django",
      link: "#",
    },
    {
      title: "Java",
      link: "#",
    },
    {
      title: "C/C++",
      link: "#",
    },
    {
      title: "HTML/CSS",
      link: "#",
    },
    {
      title: "Java",
      link: "#",
    },
    {
      title: "JabaScript",
      link: "#",
    },
    {
      title: "OOPs",
      link: "#",
    },
    {
      title: "REST API",
      link: "#",
    },
    {
      title: "DBMS - MongoDB",
      link: "#",
    },
    {
      title: "DBMS - MySQL",
      link: "#",
    },
    {
      title: "DSA Problem Solving",
      link: "#",
    },
  ];

  return (
    <div className="text-white" id="skills">
      <p className="text-4xl text-center font-bold">Skills</p>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={skills} />
      </div>
    </div>
  );
}
