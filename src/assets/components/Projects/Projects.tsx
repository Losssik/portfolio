import ProjectCard from "../ProjectCard/ProjectCard";

type Project = {
  title: string;
  description: string;
};

type ProjectsProps = {
  projects: Project[];
};

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
