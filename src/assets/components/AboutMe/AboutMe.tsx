import cvFile from "../../files/cv.pdf";

const AboutMe = () => {
  return (
    <section className="about-me">
      <h1 className="about-me__name"> Przemyslaw Bialk </h1>
      <span className="about-me__description">Frontend REACT Developer</span>
      <a href={cvFile} target="_blank" rel="noopener noreferrer">
        My resume
      </a>
      <a
        href="https://github.com/Losssik"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </section>
  );
};

export default AboutMe;
