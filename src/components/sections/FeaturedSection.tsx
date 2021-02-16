import ProjectCard from 'components/commons/ProjectCard';
import React from 'react';
import DayoPNG from 'assets/images/thumbnails/dayo-thumb.png';

const projects = [
  {
    title: 'Project 1',
    type: 'Sample project',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore quas pariatur aliquam ullam ea similique? Qui porro corporis cum. Quas reprehenderit esse dignissimos omnis facilis earum odio vitae laudantium inventore.',
    techStack: ['ReactJS', 'NodeJS', 'MongoDB'],
    image: DayoPNG,
  },
  {
    title: 'Project 2',
    type: 'Sample project 2',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore quas pariatur aliquam ullam ea similique? Qui porro corporis cum. Quas reprehenderit esse dignissimos omnis facilis earum odio vitae laudantium inventore.',
    techStack: ['ReactJS', 'TypeScript', 'MongoDB'],
    image: DayoPNG,
  },
  {
    title: 'Project 3',
    type: 'Sample project 3',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore quas pariatur aliquam ullam ea similique? Qui porro corporis cum. Quas reprehenderit esse dignissimos omnis facilis earum odio vitae laudantium inventore.',
    techStack: ['ReactJS', 'NestJS', 'GraphQL'],
    image: DayoPNG,
  },
];

const FeaturedSection = () => {
  return (
    <>
      <div id="works" className="hash-link featured">
        <h4 className="section-title">Featured Projects</h4>
        <div className="featured-list">
          {projects.map((project) => {
            return (
              <div className="featured-item">
                <ProjectCard project={project} isFeatured />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default FeaturedSection;
