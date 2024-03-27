import React from "react";
import "./styles/contact.css";

const Contact = (props) => {
  const phoneNumber = props.phoneNumber;
  const linkedIn = props.linkedIn;

  return (
    <>
      <section className="section-6">
        <header className="d-flex align-items-center" id="contact-header">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6" id="ec-outro">
                <h1 className="display-4 mb-2">
                  Let's talk about your project.
                </h1>
                <br />
                <p className="lead mb-10">
                  I will be in touch as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </header>
        <footer>
            <div className="container" id="footer-info">
              <div className="row">
                <div className="col-12 mt-3 mb-3" >
                  <h2 className="mb-4">Contact me via:</h2>
                  <p>Cell: {phoneNumber}</p>
                  <p>Email: edgarcarpinteyro@gmail.com</p>
                  <p>
                    Let's connect on
                    <a
                      href="https://www.linkedin.com/in/edgar-carpinteyro/"
                      id="linkedin"
                    > LinkedIn</a>
                  </p>
                </div>
              </div>
            </div>
        </footer>
      </section>   
    </>
  );
};

export default Contact;
