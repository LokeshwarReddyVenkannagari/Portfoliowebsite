import React from "react";
import { motion } from "framer-motion";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

const About = () => {
  return (
    <motion.main
      className="container mx-auto max-width pt-10 pb-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section>
        <motion.h1
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          About Me
        </motion.h1>
        <motion.p
          className="text-content py-8 lg:max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {personalDetails.about}
        </motion.p>
      </section>
      <section>
        <motion.h1
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Work Experience
        </motion.h1>
        {workDetails.map(
          ({ Position, Company, Location, Type, Duration }, index) => (
            <Work
              key={index}
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          )
        )}
      </section>
      <section>
        <motion.h1
          className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Education
        </motion.h1>
        {eduDetails.map(
          ({ Position, Company, Location, Type, Duration }, index) => (
            <Work
              key={index}
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          )
        )}
      </section>
    </motion.main>
  );
};

export default About;
