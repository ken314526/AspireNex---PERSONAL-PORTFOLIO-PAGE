"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import experienceData from "@/data/experience.json";

export default function Internship() {
  return (
    <div className="pt-20">
      <p className="text-4xl text-center font-bold">Internship</p>
      <Link href={"/experience"}>
        <div className="md:mx-2 mx-2 gap-4">
          {experienceData.internship.map((p) => (
            <CardContainer
              key={p.id}
              className="inter-var w-full h-auto sm:w-[30rem] sm:h-[24rem]"
            >
              <CardBody className="flex flex-col justify-center items-center dark:bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-full h-full rounded-xl p-6">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold dark:text-neutral-600 text-white text-center"
                >
                  {p.role}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="dark:text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300 text-center"
                >
                  Company - {p.company}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="dark:text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300 text-center"
                >
                  Description - {p.description}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="dark:text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300 text-center"
                >
                  Duration - {p.duration}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="dark:text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300 text-center"
                >
                  Go →
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </Link>
    </div>
  );
}
