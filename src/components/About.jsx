import React from "react";
import "./styles/about.css"


const About = () => {
  const AboutMe = () => {
    return (
      <>
        <section className="d-flex align-items-center" id="about-me-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-3">
                <h2>About Me</h2>
              </div>

              <div className="col-md-9"  id="biography">
                <p className="lead">
                Welcome to my digital space! I am Edgar, a dedicated educator turned aspiring web developer. With a strong foundation in teaching and a passion for empowering others, I've embarked on a transformative journey into the dynamic world of web development. 
                <br/> 
                <br />
                My background in education has equipped me with excellent communication skills, a knack for problem-solving, and the ability to adapt to diverse learning environments. Now, as I transition into web development, I bring these qualities to the forefront, pairing them with a newfound enthusiasm for coding, design, and creating seamless digital experiences.
                <br/>
                <br/>
                Join me on this exciting journey as I bridge the gap between education and technology, striving to make a meaningful impact in the ever-evolving world of web development.

                </p>
              </div>
              
            </div>
          </div>
        </section>
      
      </>
    )
  }
  const Skills = () => {
    return (
      <>
        <section className="d-flex align-items-center" id="section2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-3">
                <h2>Skills</h2>
              </div>
              <div className="col-md-3">
                <h4>Front-End</h4>
                <ul>
                  <li>JavaScript</li>
                  <li>HTML5</li>
                  <li>Cascading Style Sheets</li>
                  <li>BootStrap</li>
                </ul>
              </div>
              <div className="col-md-3">
                <h4>MERN Stack</h4>
                <ul>
                  <li>MondoDB</li>
                  <li>React</li>
                  <li>Express</li>
                  <li>Node</li>
                </ul>
              </div>
              <div className="col-md-3">
                <h4>Tools</h4>
                <ul>
                  <li>Github</li>
                  <li>Git</li>
                  <li>Vite</li>
                  <li>VS Code</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  const Experience = () => {
    return (
      <>
        <section className="d-flex align-items-center" id="section3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4">
                <h2>Work Experience</h2>
              </div>

              <div className="col-md-8" id="job-border">
                <div className="row job-container job-border-bottom">
                  <div className="column job-logo">
                    <div className="logo">
                      <img
                        src="/images/work/stem.png"
                        height="50px"
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div className="column job-title">
                    <h5>Instructional Assistant</h5>
                    <span>STEM Preparatory Academy</span>
                  </div>
                  <div className="column job-date">
                    September 2023 - Present
                  </div>
                </div>

                <div className="row job-container job-border-bottom">
                  <div className="column job-logo">
                    <div className="logo">
                      <img
                        src="/images/work/aot.png"
                        height="50px"
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div className="column job-title">
                    <h5>Web Development Instructor</h5>
                    <span>America On Tech</span>
                  </div>
                  <div className="column job-date">June 2023 - August 2023</div>
                </div>

                <div className="row job-container job-border-bottom">
                  <div className="column job-logo">
                    <div className="logo">
                      <img
                        src="/images/work/smca.png"
                        height="50px"
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div className="column job-title">
                    <h5>Instructional Assistant</h5>
                    <span>Bright Star Schools</span>
                  </div>
                  <div className="column job-date">August 2022 - June 2023</div>
                </div>

                <div className="row job-container">
                  <div className="column job-logo">
                    <div className="logo">
                      <img
                        src="/images/work/alpha.webp"
                        height="50px"
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div className="column job-title">
                    <h5>Teacher and Academic Interventionist</h5>
                    <span>Alpha Public Schools</span>
                  </div>
                  <div className="column job-date">July 2018 - June 2022</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  const Education = () => {
    return (
      <>
        <section className="d-flex align-items-center" id="section4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4">
                <h2>Education</h2>
              </div>
              <div className="col-md-8">
                <div className="row education-container">
                  <div className="column">
                    <div className="d-flex shadow p-4 mb-1 bg-body-tertiary rounded">
                      <div className="px-4">
                        <img
                          src="/images/education/tkh.png"
                          height="100px"
                          alt="logo"
                        />
                      </div>
                      <div>
                        <h5>The Knowledge House</h5>
                        <span class="d-block mb-3">Web Development</span>
                        <span>September 2023 - Present</span>
                      </div>
                    </div>
                  </div>

                  <div className="column">
                    <div className="d-flex shadow p-4 mb-1 bg-body-tertiary rounded">
                      <div className="px-4">
                        <img
                          src="/images/education/promineo.jpeg"
                          height="100px"
                          alt="logo"
                        />
                      </div>

                      <div>
                        <h5>Promineo Tech</h5>
                        <span className="d-block mb-3">Frontend Development</span>
                        <span>August - December 2022</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row education-container">
                  <div className="column">
                    <div className="d-flex shadow p-4 mb-1 bg-body-tertiary rounded">
                      <div className="px-4">
                        <img
                          src="/images/education/ucla.png"
                          height="100px"
                          alt="logo"
                        />
                      </div>
                      <div>
                        <h5>UCLA</h5>
                        <span className="d-block mb-3">History</span>
                        <span>July 2014 - December 2016</span>
                      </div>
                    </div>
                  </div>

                  <div className="column">
                    <div className="d-flex shadow p-4 mb-1 bg-body-tertiary rounded">
                      <div className="px-4">
                        <img
                          src="/images/education/elcamino.jpg"
                          height="100px"
                          alt="logo"
                        />
                      </div>
                      <div>
                        <h5>El Camino College</h5>
                        <span className="d-block mb-3">History</span>
                        <span>January 2022 - May 2014</span>
                      </div>
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
    <div>
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
    </div>
  );
};

export default About;
