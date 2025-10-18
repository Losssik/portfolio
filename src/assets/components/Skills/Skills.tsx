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
          <h3>skill mastered</h3>
          <ul className="skills__list">
            {masteredSkills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skills__learning">
          <h3>currently learning</h3>
          <ul className="skills__list">
            {learningSkills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
