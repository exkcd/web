"use client";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Magnetic } from "@/components/ui/magnetic";
import { PROJECTS, SKILLS, SOCIAL_LINKS, TOOLS, WORK_EXPERIENCE, EDUCATION } from "@/data/info";
import { motion } from "motion/react";
import Link from "next/link";

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const TRANSITION_SECTION = {
  duration: 0.3,
};

function MagneticSocialLink({ children, link }: { children: React.ReactNode; link: string }) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <Link
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-px rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </Link>
    </Magnetic>
  );
}

export default function Resume() {
  return (
    <motion.main className="mb-16 space-y-8" variants={VARIANTS_CONTAINER} initial="hidden" animate="visible">
      <p className="text-zinc-600 dark:text-zinc-400">
        Recent graduate of computer science at the University of Colorado Boulder. I am interested in data science,
        UX/UI design, information visualization, and machine learning.
      </p>
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h3 className="mb-3 text-lg font-medium">Selected Projects</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <Link key={project.id} href={project.link} data-id={project.id} target="_blank" rel="noopener noreferrer">
              <Card className="w-full max-w-sm bg-zinc-50 dark:bg-zinc-950">
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  <CardAction>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                    >
                      <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </CardAction>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </motion.section>
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h3 className="mb-3 text-lg font-medium">Experience</h3>
        <div className="flex flex-col space-y-2">
          <AnimatedBackground
            enableHover
            className="rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: "spring",
              bounce: 0,
              duration: 0.2,
            }}
          >
            {WORK_EXPERIENCE.map((job) => (
              <Link
                key={job.id}
                className="-mx-3 rounded-xl px-3 py-3 block"
                href={job.link}
                data-id={job.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative h-full w-full">
                  <div className="relative flex w-full flex-row justify-between">
                    <div>
                      <h4 className="font-normal dark:text-zinc-100">{job.title}</h4>
                      <p className="text-zinc-500 dark:text-zinc-400">{job.company}</p>
                    </div>
                    <div>
                      <span className="text-sm text-zinc-500 dark:text-zinc-400 shrink-0 ml-4">
                        {job.start} - {job.end}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h3 className="mb-3 text-lg font-medium">Education</h3>
        <div className="flex flex-col space-y-2">
          {EDUCATION.map((uni) => (
            <Card className="relative h-full w-full bg-zinc-50 dark:bg-zinc-950 ring-0 rounded-none" key={uni.id}>
              <CardHeader className="p-0">
                <CardTitle>{uni.name}</CardTitle>
                <CardDescription>{uni.degree}</CardDescription>

                <CardAction className="text-zinc-600 dark:text-zinc-400">
                  {uni.start} - {uni.end}
                </CardAction>
              </CardHeader>
              {uni.courses.map((course) => (
                <CardContent key={course} className="p-0">
                  - {course}
                </CardContent>
              ))}
              <CardFooter className="text-zinc-600 dark:text-zinc-400 p-0 border-t-0">GPA: {uni.gpa}</CardFooter>
            </Card>
          ))}
        </div>
      </motion.section>

      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION} className="space-y-0">
        <h3 className="mb-3 text-lg font-medium">Languages</h3>
        <div className="flex items-center justify-start space-x-1 mb-5 flex-wrap">
          {SKILLS.map((skill) => (
            <Badge variant={"outline"} key={skill}>
              {skill}
            </Badge>
          ))}
        </div>
        <h3 className="mb-3 text-lg font-medium">Tools</h3>
        <div className="flex items-center justify-start space-x-1 mb-5 flex-wrap">
          {TOOLS.map((skill) => (
            <Badge variant={"outline"} key={skill}>
              {skill}
            </Badge>
          ))}
        </div>
      </motion.section>

      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h3 className="mb-2 text-lg font-medium">Links</h3>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  );
}
