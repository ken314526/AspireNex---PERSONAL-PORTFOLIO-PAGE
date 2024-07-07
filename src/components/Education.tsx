"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import aboutData from "@/data/about.json";

export default function Education() {
  return (
    <div>
      <p className="text-4xl text-center font-bold">Education</p>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
        {aboutData.about.map((data) => (
          <CardContainer key={data.board} className="inter-var">
            <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-700  w-full h-64 flex flex-col items-start justify-center sm:w-[30rem] sm:h-[18rem] rounded-xl p-6">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white dark:text-neutral-500"
              >
                {data.degree}
              </CardItem>
              <div className="flex flex-row items-center w-full justify-between">
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-white text-sm max-w-sm mt-2 dark:text-neutral-500"
                >
                  {data.board}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-white text-sm max-w-sm mt-2 dark:text-neutral-500"
                >
                  {data.year}
                </CardItem>
              </div>
              <CardItem
                as="p"
                translateZ="60"
                className="text-white text-sm max-w-sm mt-2 dark:text-neutral-500"
              >
                Domain: {data.domain}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-white text-sm max-w-sm mt-2 dark:text-neutral-500"
              >
                {data.from}
              </CardItem>
              {data?.percentage && (
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-white text-sm max-w-sm mt-2 dark:text-neutral-500"
                >
                  {data.percentage}
                </CardItem>
              )}
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
