import type { Project } from "../Projects/Projects";

type ProjectCardProp = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProp) => {
  return (
    <div className="project-card">
      <div className="project-card__overlay">
        <div className="project-card__logo">{project.logo}</div>
        <h3 className="project-card__title">{project.title}</h3>

        <p className="project-card__tags">
          {project.tags?.map((tag) => (
            <p className="project-card__tag">{tag}</p>
          ))}
        </p>
        <div className="project-card__links">
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
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
