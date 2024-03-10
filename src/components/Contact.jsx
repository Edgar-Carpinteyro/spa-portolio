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

{
  /* <section className="section-6">
       <header className="d-flex align-items-center" id="contact-header">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6" id="ec-outro">
              <h1 className="display-4 mb-2">Let's talk about your project.</h1>
              <br />
              <p className="lead mb-10">
              I will be in touch as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </header>
      <div>
        <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6" id="ec-outro">
                <h2 className="mb-2">Contact me via:</h2>
                <p>Cell: {phoneNumber}</p>
                <p>Email: edgarcarpinteyro@gmail.com</p>
                <p>
                  Let's connect on: 
                  <a href="https://www.linkedin.com/in/edgar-carpinteyro/" id="linkedin">LinkedIn</a>
                </p>
              </div>
            </div>
          </div>
      </div>
    </section>  */
}

// <section className="mb-4 client-contact-info">

//     <h2 className="text-center my-4">Contact us</h2>
//     <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
//         a matter of hours to help you.</p>

//     <div className="row">

//         <div className="col-md-9 mb-md-0 mb-5">
//             <form id="contact-form" name="contact-form" action="mail.php" method="POST">

//                 <div className="row">

//                     <div className="col-md-6">
//                         <div className="md-form mb-0">
//                             <label for="first-name" class="">First Name</label>
//                             <input type="text" id="first-name" name="first-name" class="form-control"/>
//                         </div>
//                     </div>

//                     <div className="col-md-6">
//                         <div className="md-form mb-0">
//                             <label for="last-name" class="">Last Name</label>
//                             <input type="text" id="last-name" name="last-name" class="form-control"/>
//                         </div>
//                     </div>

//                 </div>

//                 <div className="row">
//                     <div className="col-md-6">
//                         <div className="md-form mb-0">
//                         <label for="email" class="">Email</label>
//                         <input type="text" id="email" name="email" class="form-control"/>
//                         </div>
//                     </div>

//                     <div className="col-md-6">
//                         <div className="md-form mb-0">
//                         <label for="phone" class="">Phone</label>
//                         <input type="text" id="phone" name="phone" class="form-control"/>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="row">
//                     <div className="col-md-12">
//                       <div className="mb-3">
//                         <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//                         <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                       </div>
//                     </div>
//                 </div>

//             </form>

//         </div>

//         <div className="col-md-3 text-center">
//             <ul className="list-unstyled mb-0">
//                 <li><i className=""></i>
//                     <p>Los Angeles, CA</p>
//                 </li>

//                 <li><i className=""></i>
//                     <p>edgarcarpinteyro@gmail.com</p>
//                 </li>

//                 <li><i className=""></i>
//                   <p>
//                     Let's connect on
//                     <a href="https://www.linkedin.com/in/edgar-carpinteyro/" id="linkedin"> LinkedIn</a>
//                   </p>
//                 </li>
//             </ul>
//         </div>

//     </div>

// </section>
