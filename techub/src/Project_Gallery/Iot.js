import React, { useEffect } from 'react'
import "./Project.Module.css"

import AOS from "aos";
import "aos/dist/aos.css";

function IOT() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <>
    <section id="hero" className="d-flex align-items-center">

      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
            <h1>Internet of things</h1>
            
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
            <img src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2FImages%2Fiot%2Fiotlogo.png?alt=media&token=d3914ce9-a0cf-425b-bd22-9e3b5308f9b2" className="img-fluid animated" alt="" />
          </div>
        </div>
      </div>

      </section>
{/* <!-- End Hero --> */}
    <main id="main">
    <section id="projects" className="projects">
      <div className="container" data-aos="fade-up">
      <div
            className="row gy-4 portfolio-container"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
              <div className="portfolio-content h-100">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2FImages%2Fiot%2Fiot1.png?alt=media&token=a276d55d-c021-4cb0-9e5e-ec97824a2bf9"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>IOT 1</h4>
                  <p>Welcome to IOT 1</p>
                  <a
                    href="assets/img/projects/remodeling-1.jpg"
                    title="Remodeling 1"
                    data-gallery="portfolio-gallery-remodeling"
                     className="glightbox preview-link"
                  >
                    {/* <i className="bi bi-zoom-in" /> */}
                  </a>
                  <a
                    href="/projectdetail"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Projects Item */}


            <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
              <div className="portfolio-content h-100">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2FImages%2Fiot%2Fiot2.png?alt=media&token=c4b992e4-85bf-40a9-8670-ca4f53afd845"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>IOT 2</h4>
                  <p>welcome to IOT 2</p>
                  <a
                    href="assets/img/projects/construction-1.jpg"
                    title="Construction 1"
                    data-gallery="portfolio-gallery-construction"
                    className="glightbox preview-link"
                  >
                    {/* <i className="bi bi-zoom-in" /> */}
                  </a>
                  <a
                    href="/projectdetail"
                    title="More Details"
                    className="details-link"
                  >
                    <i a className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Projects Item */}


            <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
              <div className="portfolio-content h-100">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2FImages%2Fiot%2Fiot3.png?alt=media&token=993e9362-4406-4708-a6de-f152fb2513ee"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>IOT 3</h4>
                  <p>welcome to IOT 3</p>
                  <a
                    href="assets/img/projects/repairs-1.jpg"
                    title="Repairs 1"
                    data-gallery="portfolio-gallery-repairs"
                    className="glightbox preview-link"
                  >
                    {/* <i className="bi bi-zoom-in" /> */}
                  </a>
                  <a
                    href="project-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Projects Item */}


            <div className="col-lg-4 col-md-6 portfolio-item filter-design">
              <div className="portfolio-content h-100">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2FImages%2Fiot%2Fiot4.png?alt=media&token=1da47661-9bd0-4985-9c42-40502ab61493"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>IOT 4</h4>
                  <p>Welcome to IOT 4</p>
                  <a
                    href="assets/img/projects/design-1.jpg"
                    title="Repairs 1"
                    data-gallery="portfolio-gallery-book"
                    className="glightbox preview-link"
                  >
                    {/* <i className="bi bi-zoom-in" /> */}
                  </a>
                  <a
                    href="project-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Projects Item */}


            <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
              <div className="portfolio-content h-100">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2FImages%2Fiot%2Fiot5.png?alt=media&token=91013442-0b13-48bc-8f83-fb5f056a28dd"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>IOT 5</h4>
                  <p>Welcome to IOT 5</p>
                  <a
                    href="assets/img/projects/remodeling-2.jpg"
                    title="Remodeling 2"
                    data-gallery="portfolio-gallery-remodeling"
                    className="glightbox preview-link"
                  >
                    {/* <i className="bi bi-zoom-in" /> */}
                  </a>
                  <a
                    href="project-details.html"
                    title="More Details"
                    className="details-link"
                  >
                    <i className="bi bi-link-45deg" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Projects Item */}
    </div>
    </div>
    </section>
    </main>
    </>
  )
}

export default IOT
