import cvFile from "../../files/cv.pdf";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className="about-me">
      <motion.h1
        className="about-me__name"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Przemysław Białk
      </motion.h1>
      <motion.span
        className="about-me__description"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.3,
        }}
      >
        Frontend REACT Developer
      </motion.span>
      <motion.div
        className="about-me__links"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.6,
        }}
      >
        <a
          href={cvFile}
          target="_blank"
          rel="noopener noreferrer"
          className="about-me__link"
        >
          My resume
        </a>
        <a
          href="https://github.com/Losssik"
          target="_blank"
          rel="noopener noreferrer"
          className="about-me__link"
        >
          Github
        </a>
      </motion.div>
    </section>
  );
};

export default AboutMe;
