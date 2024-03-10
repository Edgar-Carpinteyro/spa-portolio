import React from "react";
import "./styles/home.css"


const Home = () => {
  return (
    <>
      {/* Header */}
      <header className="d-flex align-items-center" id="header">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6" id="ec-intro">
              <h1 className="display-4 mb-2">I'm Edgar Carpinteyro.</h1>
              <h1 className="display-4 mb-2">A Web Developer</h1>
              <h1 className="display-4 mb-2">based in Los Angeles</h1>
              <p className="lead mb-10">
                I specialize in Front-End technologies to create dynamic,
                visually appealing, and engaging websites. I look forward to
                creating your next project.
              </p>
            </div>
          </div>
        </div>
      </header>
      {/* Mission */}
      <section className="d-flex align-items-center" id="mission-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <h2>Mission</h2>
            </div>
            <div className="col-md-8">
                <p className="lead mt-4">
                    My mission is to <b>empower</b> businesses and individuals with innovative and user-centric web solutions. I am committed to delivering <b>high-quality</b>, <b>responsive</b>, and <b>visually appealing</b> websites that meet your business needs. 
                </p> 
                <p className="lead">
                    For each projects, I use the <b>latest cutting-edge web technology</b>  to enhance your online presence. I'm dedication to transparent communication, collaboration, and attention to detail to ensure that your project is a true reflection of your business values.
                </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
