"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const details = [
  {
    board: "AKTU",
    degree: "B.Tech",
    year: "2022-2026",
    domain: "Computer Science and Engineering",
    from: "Pranveer Singh Institute of Technology",
  },
  {
    board: "ISC",
    degree: "Intermediate- 12",
    year: "2020-2022",
    domain: "Computer Science",
    from: "U.P. Kirana Seva Samiti Vidyalaya",
    percentage: "Percentage: 92%",
  },
  {
    board: "ICSE",
    degree: "Highschool- 10",
    year: "2020-2022",
    domain: "Computer Science",
    from: "U.P. Kirana Seva Samiti Vidyalaya",
    percentage: "Percentage: 91%",
  },
];

export default function About() {
  return (
    <div id="about">
      <p className="text-4xl text-center font-bold">About</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {details.map((data) => (
          <CardContainer key={data.board} className="inter-var">
            <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-700 dark:border-white border-gray-600 w-full h-64 flex flex-col items-start justify-center sm:w-[30rem] sm:h-[18rem] rounded-xl p-6 border">
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
