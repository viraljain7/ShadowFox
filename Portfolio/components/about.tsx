"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      {/* 

    
 

*/}

      <p className="mb-3">
        I'm currently pursuing my{" "}
        <span className="font-medium">
          B.Tech in Computer Science Engineering.
        </span>
        Alongside my studies, I've been enthusiastically learning{" "}
        <span className="font-medium">full-stack web development</span>through a
        coding bootcamp and Documentions.{" "}
        <span className="italic">My passion for programming stems from</span>{" "}
        <span className="underline">
          {" "}
          the challenge of problem-solving and the satisfaction of finding
          effective solutions.
        </span>{" "}
        My core tech stack includes
        <span className="font-medium">
          React, NextJs, Node.js, MongoDB, Express, Framer Motion, Tailwind CSS,
          and ShadeCN UI/UX, among others.
        </span>
        . I am also familiar with TypeScript . I'm dedicated to staying abreast
        of the latest technologies and constantly enhancing my skills. I'm
        looking forward to transitioning into a{" "}
        <span className="font-medium">career in software development</span>
        and am actively seeking opportunities in the field.
      </p>
    </motion.section>
  );
}
