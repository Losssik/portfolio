type Project = {
  title: string;
  description: string;
};

type ProjectCardProp = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProp) => {
  return (
    <div className="project-card">
      <div>
        <h3 className="project-card__title">{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
