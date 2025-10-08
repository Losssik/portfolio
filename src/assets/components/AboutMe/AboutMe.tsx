import cvFile from "../../files/cv.pdf";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className="about-me">
      <h1 className="about-me__name"> Przemyslaw Bialk </h1>
      <motion.span
        className="about-me__description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
        }}
      >
        Frontend REACT Developer
      </motion.span>
      <div className="about-me__links">
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
      </div>
    </section>
  );
};

export default AboutMe;
