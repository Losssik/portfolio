import { motion } from "motion/react";
import type { Project } from "../Projects/Projects";

type ProjectCardProp = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProp) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="project-card__overlay">
        <motion.div
          className="project-card__logo"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {project.logo}
        </motion.div>
        <motion.h3
          className="project-card__title"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          {project.title}
        </motion.h3>
        <div className="project-card__tags">
          {project.tags?.map((tag, index) => (
            <motion.span
              key={tag}
              className="project-card__tag"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.3 + index * 0.1,
              }}
              viewport={{ once: true }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <motion.div
          className="project-card__links"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
            >
              GitHub
            </a>
          )}
          {project.live_version && (
            <a
              href={project.live_version}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
            >
              Live
            </a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
