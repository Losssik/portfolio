import type { Project } from "../Projects/Projects";

type ProjectCardProp = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProp) => {
  return (
    <div
      className="project-card"
      style={{
        backgroundImage: `url(${project.image})`,
      }}
    >
      <div className="project-card__overlay">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        <p className="project-card__tags">
          {project.tags?.map((tag) => (
            <p className="project-card__tag">{tag}</p>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
