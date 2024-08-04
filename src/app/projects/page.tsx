"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Link from "next/link";
import projectsData from "@/data/projects.json";

export default function page() {
  return (
    <div className="py-12 pt-24">
      <p className="text-4xl text-center font-bold">Projects</p>
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-1 md:mx-2 mx-2 lg:grid-cols-2 gap-4">
        {projectsData.projects.map((p) => (
          <CardContainer
            key={p.id}
            className="inter-var w-full h-auto sm:w-[30rem] sm:h-[24rem]"
          >
            <CardBody className="flex flex-col justify-center items-center dark:bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-full h-full rounded-xl p-6">
              <CardItem
                translateZ="50"
                className="text-xl font-bold dark:text-neutral-600 text-white"
              >
                {p.name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="dark:text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300"
              >
                {p.description}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="dark:text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300"
              >
                Technologies Used: {p.technologiesUsed}
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href={p.link}
                target="_blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white mt-4"
              >
                Go →
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
