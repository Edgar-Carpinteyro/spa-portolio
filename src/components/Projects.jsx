import React from "react";
import "./styles/projects.css"
const MyProjects = () => {
  const Hello = () => {
    return (
      <>
        <section className="d-flex align-items-center" id="section5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-3">
                <h2>My Projects</h2>
              </div>
              <div className="col-md-9">
                
                <div className="row project-container">
                  <div className="card text-bg-dark mb-3 project-image">
                    <img
                      src="/images/projects/art-fest.jpg"
                      className="card-img-top"
                      alt="art and wine festival logo"
                      height="150px"
                      width="auto"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Bay Area Art Festivals</h5>
                      <a
                        href="https://edgar-carpinteyro.github.io/art-festivals/"
                        className="btn btn-primary"
                      >
                        Explore
                      </a>
                    </div>
                  </div>

                  <div className="card text-bg-dark mb-3 project-image" >
                    <img
                      src="/images/projects/flags.avif"
                      className="card-img-top"
                      alt="world flags in a string"
                      height="150px"
                    />
                    <div className="card-body">
                      <h5 className="card-title">World Flags</h5>
                      <a
                        href="https://edgar-carpinteyro.github.io/world-flags/"
                        className="btn btn-primary"
                      >
                        Explore
                      </a>
                    </div>
                  </div>

                  <div className="card text-bg-dark mb-3 project-image" >
                    <img
                      src="/images/projects/trip.jpg"
                      className="card-img-top"
                      alt="view from a plane"
                      height="150px"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Trip Planner</h5>
                      <a
                        href="https://edgar-carpinteyro.github.io/trip-planner/"
                        className="btn btn-primary"
                      >
                        Explore
                      </a>
                    </div>
                  </div>

                  <div className="card text-bg-dark mb-3 project-image">
                    <img
                      src="/images/projects/github-app.png"
                      className="card-img-top"
                      alt="..."
                      height="150px"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Github Fullstack App</h5>
                      <a href="https://github-fullstack-app.onrender.com/" 
                      className="btn btn-primary">
                        Explore
                      </a>
                    </div>
                  </div>

                  <div className="card text-bg-dark mb-3 project-image" >
                    <img
                      src="/images/projects/teachers.png"
                      className="card-img-top"
                      alt="..."
                      height="150px"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Non-profit Website</h5>
                      <a
                        href="https://edgar-carpinteyro.github.io/new-teacher-center/"
                        className="btn btn-primary"
                      >
                        Explore
                      </a>
                    </div>
                  </div>

                  <div className="card text-bg-dark mb-3 project-image">
                    <img
                      src="/images/projects/comedy.jpg"
                      className="card-img-top"
                      alt="..."
                      height="150px"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Under Construction</h5>
                      <a href="#" className="btn btn-primary">
                        Explore
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
    <Hello/>
    </>
  );
};

export default MyProjects;
