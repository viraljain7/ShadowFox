import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Front-End Developer @ Parul University",
    location: "Vadodara, India",
    description:
      "I honed my skills as a front-end developer for 6 months, focusing on React, TypeScript, Next.js, and Node.js at Parul University, where I excelled in optimizing performance and delivering high-impact solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "June-Dec 2023",
  },
  {
    title: "Full-Stack Developer  ",
    location: "Vadadara,India",
    description:
      "I'm currently contributing to open-source projects while freelancing as a full-stack developer. My tech stack includes React, Next.js, TypeScript, Tailwind CSS, NodeJs, Express,and MongoDB. I'm also actively seeking full-time opportunities.",

    icon: React.createElement(FaReact),
    date: "Jan 2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
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
  "github",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Apollo",
  "Express",
  "Framer Motion",
  "Docker",
] as const;
