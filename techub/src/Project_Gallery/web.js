import React, { useEffect } from 'react'
import "./Project.Module.css"

import AOS from "aos";
import "aos/dist/aos.css";

function Web() {
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
            <h1>Web Development </h1>
            
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="100">
            <img src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2FImages%2Fweb%2Fweb-unscreen.gif?alt=media&token=70d1299e-b531-44b1-85de-845d0a5332c9" className="img-fluid animated" alt="" />
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
                  src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2FImages%2Fweb%2Fweb1.png?alt=media&token=d719f884-76ee-4af3-b542-36fe0236de6b"
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
                  src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2FImages%2Fweb%2Fweb2.png?alt=media&token=041a95be-4802-4f4c-a373-535e710c2909"
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
                  src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2FImages%2Fweb%2Fweb3.png?alt=media&token=db228aaa-d887-41e6-a9a8-452f607afc92"
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
                  src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2FImages%2Fweb%2Fweb4.png?alt=media&token=5fe3a98e-355c-4a10-a292-47cac7c6df0e"
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
                  src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2FImages%2Fweb%2Fweb5.png?alt=media&token=0761ebf9-37ab-4cc7-a73a-d29cbf573b66"
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

export default Web
