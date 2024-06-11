import React from "react";
import { motion } from "framer-motion";
import { techStackDetails } from "../Details";

const Technologies = () => {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    postman,
    oracle,
    eclipse,
    intellij,
    java,
    python,
    nextjs,
    firebase,
  } = techStackDetails;

  const techStack = [
    { src: html, title: "HTML" },
    { src: css, title: "CSS" },
    { src: js, title: "JavaScript" },
    { src: react, title: "React" },
    { src: redux, title: "Redux" },
    { src: nextjs, title: "Next.js" },
    { src: tailwind, title: "Tailwind CSS" },
    { src: bootstrap, title: "Bootstrap" },
    { src: sass, title: "SASS" },
    { src: java, title: "Java" },
    { src: python, title: "Python" },
    { src: oracle, title: "Oracle" },
  ];

  const tools = [
    { src: vscode, title: "Visual Studio Code" },
    { src: git, title: "Git" },
    { src: github, title: "GitHub" },
    { src: intellij, title: "IntelliJ" },
    { src: npm, title: "NPM" },
    { src: postman, title: "Postman" },
    { src: eclipse, title: "Eclipse" },
    { src: firebase, title: "FireBase" },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section>
        <motion.h1
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tech Stack
        </motion.h1>
        <motion.p
          className="text-content py-2 lg:max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Technologies I've been working with recently
        </motion.p>
      </section>
      <motion.section
        className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {techStack.map((tech, index) => (
          <motion.img
            key={index}
            src={tech.src}
            title={tech.title}
            alt={tech.title}
            className="w-16 h-16"
            variants={itemVariants}
          />
        ))}
      </motion.section>
      <section>
        <motion.h1
          className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Tools
        </motion.h1>
      </section>
      <motion.section
        className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {tools.map((tool, index) => (
          <motion.img
            key={index}
            src={tool.src}
            title={tool.title}
            alt={tool.title}
            className="w-16 h-16"
            variants={itemVariants}
          />
        ))}
      </motion.section>
    </main>
  );
};

export default Technologies;
