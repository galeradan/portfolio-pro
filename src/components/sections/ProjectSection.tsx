import React from 'react';
import DayoPNG from 'assets/images/thumbnails/dayo-thumb.png';
import ByahePNG from 'assets/images/thumbnails/byahemnl-thumb.png';
import CronasPNG from 'assets/images/thumbnails/cronas-thumb.png';

const ProjectSection = () => {
  return (
    <>
      <div className="projects">
        <h4 className="section-title">PROJECTS</h4>
        <div className="row project-list">
          <div className="col-md-12 project">
            <div className="card project-card">
              <img
                src={DayoPNG}
                className="card-img img-fluid"
                alt="dayo-thumb"
              />
            </div>
            <div className="project-details">
              <div className="project-title">
                <h5 className="section-title">Numly</h5>
                <span>
                  <a href="www.google.com" target="_blank">
                    Github
                  </a>
                  <a href="www.google.com" target="_blank">
                    View
                  </a>
                </span>
              </div>
              <p>A Lottery Number Generator</p>
              <div className="notable-features">
                <p className="section-title">NOTABLE FEATURES</p>
                <ul>
                  <li>Signin and Signup</li>
                  <li>Generate random numbers within set properties</li>
                  <li>Saving generated numbers</li>
                  <li>Favorites</li>
                  <li>Statistics</li>
                </ul>
              </div>
              <div className="tech-stack">
                <p className="section-title">TECH USED</p>
                <div className="tech-list">
                  <span>MongoDB</span>
                  <span>React</span>
                  <span>NodeJS</span>
                  <span>TypeScript</span>
                  <span>NextJS</span>
                  <span>TypeORM</span>
                  <span>GraphQL</span>
                  <span>Apollo Client</span>
                </div>
              </div>
            </div>
          </div>
          {/* End of project  */}
          <div className="col-md-12 project">
            <div className="card project-card">
              <img
                src={ByahePNG}
                className="card-img img-fluid"
                alt="dayo-thumb"
              />
            </div>
            <div className="project-details">
              <div className="project-title">
                <h5 className="section-title">ByaheMNL</h5>
                <span>
                  <a href="www.google.com" target="_blank">
                    Github
                  </a>
                  <a href="www.google.com" target="_blank">
                    View
                  </a>
                </span>
              </div>
              <p>Asset Management web app for vehicle rentals</p>
              <div className="notable-features">
                <p className="section-title">NOTABLE FEATURES</p>
                <ul>
                  <li>Signin and Signup</li>
                  <li>Booking of Vehicles</li>
                  <li>CRUD functionality of Vechiles</li>
                  <li>Manage Requests</li>
                  <li>Manage Vehicles</li>
                </ul>
              </div>
              <div className="tech-stack">
                <p className="section-title">TECH USED</p>
                <div className="tech-list">
                  <span>MySQL</span>
                  <span>Laravel</span>
                  <span>JQuery</span>
                  <span>Heroku</span>
                  <span>db4free</span>
                </div>
              </div>
            </div>
          </div>
          {/* End of project  */}
          <div className="col-md-12 project">
            <div className="card project-card">
              <img
                src={CronasPNG}
                className="card-img img-fluid"
                alt="dayo-thumb"
              />
            </div>
            <div className="project-details">
              <div className="project-title">
                <h5 className="section-title">Cronas</h5>
                <span>
                  <a href="www.google.com" target="_blank">
                    Github
                  </a>
                  <a href="www.google.com" target="_blank">
                    View
                  </a>
                </span>
              </div>
              <p>A mini Covid-19 screener app</p>
              <div className="notable-features">
                <p className="section-title">NOTABLE FEATURES</p>
                <ul>
                  <li>Signin and Signup</li>
                  <li>Generate random numbers within set properties</li>
                  <li>Saving generated numbers</li>
                  <li>Favorites</li>
                  <li>Statistics</li>
                </ul>
              </div>
              <div className="tech-stack">
                <p className="section-title">TECH USED</p>
                <div className="tech-list">
                  <span>MongoDB</span>
                  <span>React</span>
                  <span>NodeJS</span>
                  <span>TypeScript</span>
                  <span>NextJS</span>
                  <span>TypeORM</span>
                  <span>GraphQL</span>
                  <span>Apollo Client</span>
                </div>
              </div>
            </div>
          </div>
          {/* End of project  */}
        </div>
      </div>
    </>
  );
};
export default ProjectSection;
