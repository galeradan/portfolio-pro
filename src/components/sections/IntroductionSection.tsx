import React from 'react';
import ProfileSVG from 'assets/images/dp-dan.svg';

const IntroductionSection = () => {
  return (
    <>
      <div className="row introduction">
        <div className="col-md-6 about">
          <img src={ProfileSVG} alt="dan-dp" />
          <div className="details">
            <h3>Hi, I&apos;m Dan Galera</h3>
            <h5>A Software Engineer</h5>
            <p className="text-muted">
              I&apos;m a full-stack software engineer specialized in developing
              web apps using MERN with TypeScript and GraphQL.{' '}
            </p>
            <p className="text-muted">
              I also have a background as a Product Manager which helps me with
              strategies in building and launching a product.
            </p>
          </div>
        </div>
        <div className="col-md-6 technologies">
          <div>
            <h4 className="section-title">TECHNOLOGIES</h4>
            <p className="text-muted">
              Techs I use to develop smart and beautiful web apps
            </p>
          </div>
          <div className="tech-list">
            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>Express</li>
              <li>NodeJS</li>
              <li>GraphQL</li>
              <li>Apollo Client</li>
              <li>NextJS</li>
              <li>NestJS</li>
              <li>VueJS</li>
              <li>Laravel</li>
            </ul>
            <ul>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>TypeORM</li>
              <li>Mongoose</li>
            </ul>
            <ul>
              <li>Sass</li>
              <li>Bootstrap</li>
              <li>Tailwind</li>
            </ul>
            <ul>
              <li>Heroku</li>
              <li>Netlify</li>
              <li>AWS S3</li>
              <li>AWS RDS</li>
              <li>Github</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default IntroductionSection;
