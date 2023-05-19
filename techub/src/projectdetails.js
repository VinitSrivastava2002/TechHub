import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./projectdetail.css";
import "swiper/css";

const responsive = {
  superLargeDesktop: {
    breakpoint: {
      max: 4000,
      min: 3000,
    },
    items: 5,
  },
  desktop: {
    breakpoint: {
      max: 8000,
      min: 1000,
    },
    items: 1,
    partialVisibilityGutter: 1,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 2,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
  },
};

function Project({ project }) {
  const {
    title,
    images,
    description,
    category,
    session,
    url,
    author,
    liveUrl,
  } = project;

  return (
    <>
      <main id="main">
        {/* ======= Our Portfolio Section ======= */}
        <section className="projectdetails" style={{ padding: "35px" }}>
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>{title}</h2>
            </div>
          </div>
        </section>
        {/* End Our Portfolio Section */}

        {/* ======= Portfolio Details Section ======= */}
        <section id="portfolio-details" className="portfolio-details">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-8">
                <div className="portfolio-details-slider swiper">
                  {images && images.length > 0 ? (
                    <Carousel responsive={responsive} swipeable keyBoardControl>
                      {images.map((image, index) => (
                        <div className="swiper-slide" key={index}>
                          <img src={image} alt="" />
                        </div>
                      ))}
                    </Carousel>
                  ) : (
                    <p>No images available</p>
                  )}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="portfolio-info">
                  <h3>Project information</h3>
                  <ul>
                    <li>
                      <strong>Category</strong>: {category}
                    </li>
                    <li>
                      <strong>Developer</strong>: {author}
                    </li>
                    <li>
                      <strong>Project session</strong>: {session}
                    </li>
                    <li>
                      <strong>Project URL</strong>: <a href={url}>{url}</a>
                    </li>
                  </ul>
                  <br />
                  {liveUrl ? (
                    <a
                      href={liveUrl}
                      className="btn-visit align-self-start my-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Website
                    </a>
                  ) : (
                    ""
                  )}
                </div>
                <div className="portfolio-description">
                  <h2>About Project</h2>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Portfolio Details Section */}
      </main>
      {/* End #main */}
    </>
  );
}

export default Project;
