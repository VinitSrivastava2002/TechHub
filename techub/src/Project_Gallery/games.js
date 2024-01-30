import React, { useEffect } from 'react'
// import "./Project.Module.css"

import AOS from "aos";
import "aos/dist/aos.css";

function Games() {
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
            <h1>Games Development </h1>
            
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
            <img src="assets\images\GalleryIcons\gameIcon.png" className="img-fluid animated" alt="" />
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
                  src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2FImages%2Fgames%2Fgaming1.png?alt=media&token=155f3027-6254-4053-9739-7a56285cb4cd"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>game 1</h4>
                  <p>Welcome to Game 1</p>
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
                  src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2FImages%2Fgames%2Fgaming2.png?alt=media&token=f99bb9d6-0b49-4170-93ca-c17b7edf4370"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Game 2</h4>
                  <p>welcome to Game 2</p>
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
                  src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2FImages%2Fgames%2Fgaming3.png?alt=media&token=184de264-3a09-49fc-aea4-42938da7c32e"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Game 3</h4>
                  <p>welcome to Game 3</p>
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
                  src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2FImages%2Fgames%2Fgaming4.png?alt=media&token=695f7b73-14af-4f48-bc21-1aedb8258065"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Game 4</h4>
                  <p>Welcome to Game 4</p>
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
                  src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2FImages%2Fgames%2Fgaming5.png?alt=media&token=35799947-31bd-4093-bf38-fb4216d14f1a"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Game 5</h4>
                  <p>Welcome to Game 5</p>
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

export default Games
