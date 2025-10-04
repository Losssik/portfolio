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
    <section className="porjects">
      <h2 className="projects__header">projects</h2>
      <div className="projects__grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
