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
      <p className="mb-3">
        My journey in tech began with a degree in <span className="font-medium">Software Engineering</span> from <span className="font-medium">Air University</span>. With nearly 2 years of experience as a <span className="font-medium">full-stack developer</span>, I specialize in a core stack of <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>. Additionally, I have hands-on experience with TypeScript and Prisma. <span className="italic">The problem-solving aspect</span> of programming is what excites me the most—I <span className="underline">love</span> the thrill of finding solutions to complex problems. I am continuously seeking to expand my knowledge and am currently looking for a <span className="font-medium">full-time position</span> as a software developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing video games, watching movies, and spending time with my dog. I also have a passion for <span className="font-medium">learning new things</span>. Recently, I've been getting into <span className="font-medium">photography</span> and <span className="font-medium">cooking new recipes</span>.
      </p>

    </motion.section>
  );
}
