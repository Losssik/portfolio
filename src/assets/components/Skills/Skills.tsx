import { motion } from "framer-motion";

type Skill =
  | "HTML"
  | "CSS"
  | "REACT"
  | "JAVASCRIPT"
  | "REST API"
  | "RWS"
  | "WORDPRESS"
  | "BEM"
  | "SASS"
  | "TYPE SCRIPT"
  | "TAILWIND"
  | "NODE.JS"
  | "MONGO DB"
  | "GIT";

const masteredSkills: Skill[] = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "REACT",
  "REST API",
  "RWS",
  "BEM",
  "SASS",
  "GIT",
  "WORDPRESS",
];

const learningSkills: Skill[] = [
  "TYPE SCRIPT",
  "TAILWIND",
  "NODE.JS",
  "MONGO DB",
];

const Skills = () => {
  return (
    <section className="skills">
      <motion.h2
        className="header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        skills
      </motion.h2>
      <div className="skills__flex">
        <div className="skills__mastered">
          <h3 className="skills__title">skill mastered</h3>
          <ul className="skills__list">
            {masteredSkills.map((skill, index) => (
              <motion.li
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.3 + index * 0.2,
                }}
                viewport={{ once: true }}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="skills__learning">
          <h3 className="skills__title">currently learning</h3>
          <ul className="skills__list skills__list--learning">
            {learningSkills.map((skill, index) => (
              <motion.li
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.3 + index * 0.2,
                }}
                viewport={{ once: true }}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
