"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>SQL</li>
        <li>Oracle</li>
        <li>React</li>
        <li>Tailwind</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>Bootstrap</li>
      </ul>
    ),
  },

  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University Private San Juan Bautista - Graduate</li>
        <li>Icpna - Basic</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li> SQL and Relational Databases - Cognitive Class</li>
        <li>
          Fundamentos profesionales del desarrollo de software - Microsoft and
          LinkedIn
        </li>
        <li> Getting Started With Data Analytics on AWS - AWS</li>
        <li> Programacion con Javascript - Fundacion Telefonica</li>
        <li> Diseño web con HTML5 + CSS - Fundacion Telefonica</li>
        <li> Aprende Wordpress de manera sencilla - Fundacion Telefonica</li>
        <li> Web Development - Mimo</li>
        <li> Python - Mimo</li>
        <li> SQL - Mimo</li>
        <li> HTML - Mimo</li>
        <li> Javascript - Mimo</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/About.png"
          className="rounded-lg"
          width={500}
          height={500}
          alt="Pedro Molina"
          priority="secondary"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full-stack web developer who enjoys creating practical and
            efficient applications. I have experience with JavaScript, React,
            Python, HTML, CSS, Tailwind, Bootstrap, Git, and databases such as
            Oracle and SQL. I am someone who values teamwork and is interested
            in collaborating to develop applications that are effective and
            user-friendly.
          </p>
          <div className="flex flex-row mt-8 justify-start">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
