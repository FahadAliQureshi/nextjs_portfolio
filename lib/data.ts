import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import yunahomesImg from "@/public/yunaTwo.png";
import boseImg from "@/public/boseImg.png";
import pearlMeat from "@/public/pearlMeat.png";
import obs from "@/public/obs.png";
import carRental from "@/public/carRental.png";
import challenge from "@/public/challenge.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Developer",
    location: "OBS Technologia - Islamabad, Pakistan",
    description:
      "Developed and maintained frontend components using React.js and Next.js. Collaborated closely with the design team to implement UI/UX features. Integrated APIs and managed state using Redux Toolkit.",
    icon: React.createElement(FaReact),
    date: "October 2022 - October 2023",
  },
  {
    title: "Full-stack Developer",
    location: "App In Snap - Islamabad, Pakistan",
    description:
      "Building responsive web applications using React.js and Next.js. Developing backend services with Node.js and Express.js. Working with MySQL and MongoDB for database management.",
    icon: React.createElement(CgWorkAlt),
    date: "October 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Yuna Homes Real Estate",
    description:
      "Developed the user interface and integrated APIs using React.js.",
    tags: ["React"],
    imageUrl: yunahomesImg,
  },
  // {
  //   title: "Wendi App Dashboard",
  //   description:
  //     "Implemented dashboard components and UI elements with React.js and Material UI.",
  //   tags: ["React", "Material UI"],
  //   imageUrl: yunahomesImg,
  // },
  {
    title: "Car Rentals",
    description:
      "Developed the user interface and integrated APIs for a car rental using React.js and Sass.",
    tags: ["React"],
    imageUrl: carRental,
  },
  {
    title: "Pearl Meat",
    description:
      "Created and designed the landing page using Next.js.",
    tags: ["Next.js"],
    imageUrl: pearlMeat,
  },
  {
    title: "OBS Website",
    description:
      "Developed the company's landing page using Next.js and Sass.",
    tags: ["Next.js", "Sass"],
    imageUrl: obs,
  },
  {
    title: "Technical Challenge Site",
    description:
      "Designed and implemented the challenge site using React.js.",
    tags: ["React", "Audio"],
    imageUrl: challenge,
  },
  {
    title: "Bose",
    description:
      "Developed the UI using Next.js, Tailwind, and TypeScript.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    imageUrl: boseImg,
  },
  // Add more projects as needed
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  // "Apollo",
  "Express",
  // "PostgreSQL",
  // "Python",
  // "Django",
  "TypeORM",
  "Sequelize ORM",
  "Framer Motion",
] as const;
