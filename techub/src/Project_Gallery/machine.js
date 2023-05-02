import React, { useEffect } from 'react'
// import "./Project.Module.css"

import AOS from "aos";
import "aos/dist/aos.css";

function Machine() {
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
            <h1>Machine Learning </h1>
            
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
            <img src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2FImages%2Fmachine%2Fmachinelogo.png?alt=media&token=fee52044-d44c-434a-b587-3545927bf39d" className="img-fluid animated" alt="" />
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
                  src="assets/img/projects/remodeling-1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Web1</h4>
                  <p>Welcome to web 1</p>
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
                  src="assets/img/projects/construction-1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Web 2</h4>
                  <p>welcome to Web 2</p>
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
                  src="assets/img/projects/repairs-1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Web 3</h4>
                  <p>welcome to Web 3</p>
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
                  src="assets/img/projects/design-1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Web 4</h4>
                  <p>Welcome to Web 4</p>
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
                  src="assets/img/projects/remodeling-2.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Web 5</h4>
                  <p>Welcome to web 5</p>
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

export default Machine
