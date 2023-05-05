import React, { useEffect } from 'react'


import AOS from "aos";
import "aos/dist/aos.css";

function Android() {
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
          <h1>Android Development </h1>
          
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
          <img src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2FImages%2Fandroid%2Fandroidlogo.png?alt=media&token=11743528-5b93-4285-81ea-31b9e3341cbd" className="img-fluid animated" alt="" />
        </div>
      </div>
    </div>

</section>
{/* <!-- End Hero --> */}
    <main id="main">
    <section id="projects" className="projects">
      <div className="container" data-aos="fade-up">
     {/* ======= Breadcrumbs ======= */}
     {/* <div
      className="breadcrumbs d-flex align-items-center"
       style={{ backgroundImage:'var(--color-primary)' }}
    >
      <div
        className="container position-relative d-flex flex-column align-items-center"
        data-aos="fade"
      >
        <h2>Android Development</h2>
       
         </div>
        </div> */}

      <div
            className="row gy-4 portfolio-container"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="col-lg-4 col-md-6 portfolio-item filter-remodeling">
              <div className="portfolio-content h-100">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2FImages%2Fandroid%2Fandroid.png?alt=media&token=14a25227-3366-4530-bf4b-87a522b89218"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Android 1</h4>
                  <p>Welcome to Android 1</p>
                  <a
                    href="assets/img/projects/remodeling-1.jpg"
                    title="Remodeling 1"
                    data-gallery="portfolio-gallery-remodeling"
                    // className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
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


            <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
              <div className="portfolio-content h-100">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2FImages%2Fandroid%2Fandroid2.png?alt=media&token=28ca5701-9a42-42b1-87cc-b54875e22006"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Android 2</h4>
                  <p>welcome to Android 2</p>
                  <a
                    href="assets/img/projects/construction-1.jpg"
                    title="Construction 1"
                    data-gallery="portfolio-gallery-construction"
                    // className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
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


            <div className="col-lg-4 col-md-6 portfolio-item filter-repairs">
              <div className="portfolio-content h-100">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2FImages%2Fandroid%2Fandroid3.png?alt=media&token=7e8c07b1-a7e2-4930-b016-7a105f40d146"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Android 3</h4>
                  <p>welcome to Android 4</p>
                  <a
                    href="assets/img/projects/repairs-1.jpg"
                    title="Repairs 1"
                    data-gallery="portfolio-gallery-repairs"
                    // className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
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
                  src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2FImages%2Fandroid%2Fandroid4.png?alt=media&token=0b98259d-f881-4572-9e52-c18c4accefa2"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Android 4</h4>
                  <p>Welcome to Android 4</p>
                  <a
                    href="assets/img/projects/design-1.jpg"
                    title="Repairs 1"
                    data-gallery="portfolio-gallery-book"
                    // className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
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
                  src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2FImages%2Fandroid%2Fandroid5.png?alt=media&token=2863da14-f50a-4e70-90ca-deb35340d9f7"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Android 5</h4>
                  <p>Welcome to Android 5</p>
                  <a
                    href="assets/img/projects/remodeling-2.jpg"
                    title="Remodeling 2"
                    data-gallery="portfolio-gallery-remodeling"
                    // className="glightbox preview-link"
                  >
                    <i className="bi bi-zoom-in" />
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

export default Android
