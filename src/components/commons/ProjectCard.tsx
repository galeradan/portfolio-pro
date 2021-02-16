import React from 'react';

interface Project {
  title: string;
  type: string;
  description: string;
  techStack: string[];
  image?: string;
}

interface ProjectCardProps {
  project: Project;
  isFeatured: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isFeatured }) => {
  return (
    <>
      <div className="card project-card">
        <div className="card-title">
          <h5 className="project-title">{project.title}</h5>
          <small>{project.type}</small>
        </div>
        {isFeatured ? (
          <img className="card-img project-img" src={project.image} alt="" />
        ) : (
          ''
        )}
        <div className="card-details">
          <p>{project.description}</p>
        </div>
        <div className="card-tech-list">
          {project.techStack.map((tech) => {
            return (
              <span className="tech-item">
                <small>{tech}</small>
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ProjectCard;
