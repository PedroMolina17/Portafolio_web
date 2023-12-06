"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectsTag from "./ProjectsTag";
import { motion, useInView } from "framer-motion";
const projectData = [
  {
    id: "1",
    title: "Crud React",
    description: "React + SQL + Bootstrap",
    image: "/images/projects/Project_1.png",
    tag: ["Projects"],
    gitUrl: "https://github.com/PedroMolina17/Crud_React.git",
    previewUrl: "/images/projects/Project_1.png",
  },
  {
    id: "2",
    title: "Portalio Web",
    description: "React + Tailwind",
    image: "/images/projects/Project_2.png",
    tag: ["Projects"],
    gitUrl: "https://github.com/PedroMolina17/Crud_React.git",
    previewUrl: "/images/projects/Project_2.png",
  },
  {
    id: "3",
    title: "Cognitive Class",
    description: "SQL and Relational Database",
    image: "/images/certificates/Certificate_1c.png",
    tag: ["Certificates"],
    gitUrl: "/",
    previewUrl: "/images/certificates/Certificate_1c.png",
  },
  {
    id: "4",
    title: "Microsoft",
    description: "Fundamentos de desarrollo",
    image: "/images/certificates/Certificate_2c.png",
    tag: ["Certificates"],
    gitUrl: "/",
    previewUrl: "/images/certificates/Certificate_2c.png",
  },
  {
    id: "5",
    title: "AWS",
    description: "Getting started on Data Analitycs",
    image: "/images/certificates/Certificate_3c.png",
    tag: ["Certificates"],
    gitUrl: "/",
    previewUrl: "/images/certificates/Certificate_3c.png",
  },
  {
    id: "6",
    title: "Fundación Telefonica",
    description: "HTML5 + CSS",
    image: "/images/certificates/Certificate_4c.png",
    tag: ["Certificates"],
    gitUrl: "/",
    previewUrl: "/images/certificates/Certificate_4c.png",
  },
  {
    id: "7",
    title: "Fundación Telefonica",
    description: "Programacion con JavaScript",
    image: "/images/certificates/Certificate_5c.png",
    tag: ["Certificates"],
    gitUrl: "/",
    previewUrl: "/images/certificates/Certificate_5c.png",
  },
  {
    id: "8",
    title: "Fundación Telefonica",
    description: "Wordpress",
    image: "/images/certificates/Certificate_6c.png",
    tag: ["Certificates"],
    gitUrl: "/",
    previewUrl: "/images/certificates/Certificate_6c.png",
  },
  {
    id: "9",
    title: "Mimo",
    description: "Web Development",
    image: "/images/certificates/Certificate_7c.png",
    tag: ["Certificates"],
    gitUrl: "/",
    previewUrl: "/images/certificates/Certificate_7c.png",
  },
  {
    id: "10",
    title: "Mimo",
    description: "PYTHON",
    image: "/images/certificates/Certificate_8c.png",
    tag: ["Certificates"],
    gitUrl: "/",
    previewUrl: "/images/certificates/Certificate_8c.png",
  },
  {
    id: "11",
    title: "Mimo",
    description: "SQL",
    image: "/images/certificates/Certificate_9c.png",
    tag: ["Certificates"],
    gitUrl: "/",
    previewUrl: "/images/certificates/Certificate_9c.png",
  },
  {
    id: "12",
    title: "Mimo",
    description: "HTML",
    image: "/images/certificates/Certificate_10c.png",
    tag: ["Certificates"],
    gitUrl: "/",
    previewUrl: "/images/certificates/Certificate_10c.png",
  },
  {
    id: "13",
    title: "Portalio Web",
    description: "JavaScript",
    image: "/images/certificates/Certificate_11c.png",
    tag: ["Certificates"],
    gitUrl: "/",
    previewUrl: "/images/certificates/Certificate_11c.png",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("Projects");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTabChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4 ">
        Project Section
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
        <ProjectsTag
          onClick={handleTabChange}
          name="Projects"
          isSelected={tag === "Projects"}
        />
        <ProjectsTag
          onClick={handleTabChange}
          name="Certificates"
          isSelected={tag === "Certificates"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 flex-wrap">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
