"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Link from "next/link";

export default function page() {
  const projects = [
    {
      id: 1,
      name: "Facebook Clone",
      technologiesUsed:
        "ReactJS, NodeJS, ExpressJS, REST API, SocketIO, MongoDB, Mongoose, Hashing (for password security)",
      description:
        "A full-stack web application replicating the core features of the Facebook website using ReactJS, NodeJS, SocketIO, ExpressJS, MongoDB, Mongoose, REST API, and Hashing.",
      link: "https://github.com/ken314526/Facebook-Clone",
    },
    {
      id: 2,
      name: "SUB-ZZA Pizza Delivery",
      technologiesUsed:
        "ReactJS, NodeJS, ExpressJS, REST API, SocketIO, MongoDB, Mongoose, Hashing (for password security)",
      description:
        "SUB-ZZA Pizza Delivery is an online pizza ordering and delivery platform designed to provide users with a seamless and enjoyable experience. It incorporates modern web technologies to facilitate easy navigation, secure user authentication, and efficient order processing.",
      link: "https://github.com/ken314526/Sub-Zza-Food-Delivery-Application",
    },
    {
      id: 3,
      name: "Resume Generator",
      technologiesUsed: "ReactJS",
      description:
        "The Resume Generator is a modern web application built using React.js designed to simplify the resume creation process. It allows users to create professional resumes effortlessly with customizable templates and a user-friendly interface.",
      link: "https://github.com/ken314526/Resume-Generator",
    },
    {
      id: 4,
      name: "Movie Recommendation System",
      technologiesUsed:
        "Machine Learning, Python, Jupyter Notebook, NumPy, Pandas, NLTK, Scikit-learn, Requests, Streamlit, dotenv",
      description:
        "This project is a movie recommendation system developed using Python and Machine Learning. It utilizes the power of various libraries such as NumPy, Pandas, NLTK, Scikit-learn, and more. The recommendation system is built on a dataset available in the 'dataset' folder. Users are required to extract the files from the dataset folder and follow the instructions to run the system.",
      link: "https://github.com/ken314526/Movie-Recommendation-System",
    },
    {
      id: 5,
      name: "VisionTube",
      technologiesUsed:
        "ReactJS, ReduxJS, React Router DOM, React Icons, Axios, Tailwind CSS, Autoprefixer, PostCSS, TypeScript",
      description:
        "VisionTube is a YouTube clone web application built using ReactJS. It aims to provide users with a familiar video streaming experience similar to YouTube, with features such as video search, watch functionality, and a home page showcasing trending videos.",
      link: "https://github.com/ken314526/VisionTube",
    },
    {
      id: 6,
      name: "MelodyHub",
      technologiesUsed:
        "Next.js, React, React DOM, Framer Motion, mini-svg-data-uri, Simplex Noise, Tailwind CSS, PostCSS, TypeScript",
      description:
        "MelodyHub is a music academy website built with Next.js, providing a platform for music enthusiasts to explore courses, attend webinars, interact with instructors, and more.",
      link: "https://github.com/ken314526/MelodyHub",
    },
    {
      id: 7,
      name: "Personal Portfolio Page",
      technologiesUsed:
        "Next.js, React, React DOM, Framer Motion, mini-svg-data-uri, Simplex Noise, Tailwind CSS, PostCSS, TypeScript",
      description:
        "This web application is built using Next.js and Tailwind CSS. It includes a responsive navigation bar, a hero section, a portfolio showcase, an about page, and a contact form.",
      link: "https://github.com/ken314526/AspireNex---PERSONAL-PORTFOLIO-PAGE",
    },
  ];

  return (
    <div className="py-20 pt-18">
      <p className="text-4xl text-center font-bold">Projects</p>
      <div className="min-h-screen bg-black grid grid-cols-1 md:grid-cols-1 md:mx-2 mx-2 lg:grid-cols-2 gap-4">
        {projects.map((p) => (
          <CardContainer
            key={p.id}
            className="inter-var w-full h-auto sm:w-[30rem] sm:h-[24rem]"
          >
            <CardBody className="flex flex-col justify-center items-center dark:bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-black dark:border-white/[0.2] border-gray-600 w-full h-full rounded-xl p-6 border">
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
                target="__blank"
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
