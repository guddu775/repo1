// import React from 'react'
import "./home.css";

export default function Home() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top py-3"
        id="mainNav"
      >
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#page-top">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto my-2 my-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="masthead">
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
              <h1 className="text-white font-weight-bold">
                Your Favorite Place for Free Bootstrap Themes
              </h1>
              <hr className="divider" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 mb-5">
                Start Bootstrap can help you build better websites using the
                Bootstrap framework! Just download a theme and start
                customizing, no strings attached!
              </p>
              <a className="btn btn-primary btn-xl" href="#about">
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="page-section bg-primary" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0">Weve got what you need!</h2>
              <hr className="divider divider-light" />
              <p className="text-white-75 mb-4">
                Start Bootstrap has everything you need to get your new website
                up and running in no time! Choose one of our open source, free
                to download, and easy to use themes! No strings attached!
              </p>
              <a className="btn btn-light btn-xl" href="#services">
                Get Started!
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="services">
        <div className="container px-4 px-lg-5">
          <h2 className="text-center mt-0">At Your Service</h2>
          <hr className="divider" />
          <div className="row gx-4 gx-lg-5">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-gem fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">Sturdy Themes</h3>
                <p className="text-muted mb-0">
                  Our themes are updated regularly to keep them bug free!
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-laptop fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">Up to Date</h3>
                <p className="text-muted mb-0">
                  All dependencies are kept current to keep things fresh.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-globe fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">Ready to Publish</h3>
                <p className="text-muted mb-0">
                  You can use this design as is, or you can make changes!
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-heart fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">Made with Love</h3>
                <p className="text-muted mb-0">
                  Is it really open source if its not made with love?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section bg-dark text-white">
        <div className="container px-4 px-lg-5 text-center">
          <h2 className="mb-4">Free Download at Start Bootstrap!</h2>
          <a
            className="btn btn-light btn-xl"
            href="https://startbootstrap.com/theme/creative/"
          >
            Download Now!
          </a>
        </div>
      </section>

      <section className="page-section" id="contact">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 col-xl-6 text-center">
              <h2 className="mt-0">Lets Get In Touch!</h2>
              <hr className="divider" />
              <p className="text-muted mb-5">
                Ready to start your next project with us? Send us a messages and
                we will get back to you as soon as possible!
              </p>
            </div>
          </div>
          <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
            <div className="col-lg-6">
              <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter your name..."
                    data-sb-validations="required"
                  />
                  <label htmlFor="name">Full name</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>

                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    data-sb-validations="required,email"
                  />
                  <label htmlFor="email">Email address</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:required"
                  >
                    An email is required.
                  </div>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:email"
                  >
                    Email is not valid.
                  </div>
                </div>

                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                    data-sb-validations="required"
                  />
                  <label htmlFor="phone">Phone number</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="phone:required"
                  >
                    A phone number is required.
                  </div>
                </div>

                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    type="text"
                    placeholder="Enter your message here..."
                    style={{ height: "10rem" }}
                    data-sb-validations="required"
                  ></textarea>
                  <label htmlFor="message">Message</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="message:required"
                  >
                    A message is required.
                  </div>
                </div>

                <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3">
                    <div className="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                    <a href="https://startbootstrap.com/solution/contact-forms">
                      https://startbootstrap.com/solution/contact-forms
                    </a>
                  </div>
                </div>

                <div className="d-none" id="submitErrorMessage">
                  <div className="text-center text-danger mb-3">
                    Error sending message!
                  </div>
                </div>

                <div className="d-grid">
                  <button
                    className="btn btn-primary btn-xl disabled"
                    id="submitButton"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-4 text-center mb-5 mb-lg-0">
              <i className="bi-phone fs-2 mb-3 text-muted"></i>
              <div>+1 (555) 123-4567</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-light py-5">
        <div className="container px-4 px-lg-5">
          <div className="small text-center text-muted">
            Copyright &copy; 2023 - Company Name
          </div>
        </div>
      </footer>
    </div>
  );
}
