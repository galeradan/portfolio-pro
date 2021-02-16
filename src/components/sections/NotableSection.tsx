import ProjectCard from 'components/commons/ProjectCard';
import React from 'react';

const projects = [
  {
    title: 'Project 1',
    type: 'Sample project',
    description: 'lorem lorem lorem',
    techStack: ['ReactJS', 'NodeJS', 'MongoDB'],
  },
  {
    title: 'Project 2',
    type: 'Sample project 2',
    description: 'ipsum ipsum',
    techStack: ['ReactJS', 'TypeScript', 'MongoDB'],
  },
  {
    title: 'Project 3',
    type: 'Sample project 3',
    description: 'ipsum ipsum',
    techStack: ['ReactJS', 'NestJS', 'GraphQL'],
  },
  {
    title: 'Project 1',
    type: 'Sample project',
    description: 'lorem lorem lorem',
    techStack: ['ReactJS', 'NodeJS', 'MongoDB'],
  },
  {
    title: 'Project 2',
    type: 'Sample project 2',
    description: 'ipsum ipsum',
    techStack: ['ReactJS', 'TypeScript', 'MongoDB'],
  },
  {
    title: 'Project 3',
    type: 'Sample project 3',
    description: 'ipsum ipsum',
    techStack: ['ReactJS', 'NestJS', 'GraphQL'],
  },
];

const NotableSection = () => {
  return (
    <>
      <div className="notable">
        <h4 className="section-title">Other Noteworthy Projects</h4>
        <div className="row notable-list">
          {projects.map((project) => {
            return (
              <div className="notable-item col-md-4">
                <ProjectCard project={project} isFeatured={false} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default NotableSection;
