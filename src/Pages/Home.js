import React from "react";
import { motion } from "framer-motion";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;

  return (
    <motion.main
      className="container mx-auto max-w-screen-lg section md:flex justify-between items-center"
      initial={{ opacity: 0, x: "-60%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <div>
        <motion.h1
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          initial={{ opacity: 0, x: "-60%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 2, ease: "easeOut" }}
        >
          Hi,👋
          <br />
          My Name is
        </motion.h1>
        <motion.h1
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          initial={{ opacity: 0, x: "-60%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 2, ease: "easeOut" }}
        >
          {name}
        </motion.h1>
        <motion.h2
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          initial={{ opacity: 0, x: "-60%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 2, ease: "easeOut" }}
        >
          {tagline}
        </motion.h2>
      </div>
      <motion.div
        className="mt-8 md:mt-0 md:ml-8"
        initial={{ opacity: 0, x: "200%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 2, ease: "easeOut" }}
      >
        <motion.img
          className="w-full md:w-2/3 lg:w-1/2 mx-auto rounded-full shadow-lg"
          src={img}
          alt={name}
          initial={{ opacity: 0, x: "200%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 2, ease: "easeOut" }}
        />
      </motion.div>
    </motion.main>
  );
}

export default Home;
