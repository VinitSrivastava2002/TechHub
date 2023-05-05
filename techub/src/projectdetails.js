import React from 'react';
import './projectdetail.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function Project1() {
 
  return (
      <>
      <main id="main">
     {/* ======= Our Portfolio Section ======= */}
        <section className="projectdetails" style={{padding:'35px'}}>
            <div className="container">
            <div className="d-flex justify-content-between align-items-center">
                <h2 >project detail</h2>
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
            <div className="swiper-wrapper align-items-center">
              <div className="swiper-slide">
                <img src="assets/img/gallery/gallery-1.jpg" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="assets/img/gallery/gallery-1.jpg" alt="" />
              </div>
              <div className="swiper-slide">
                <img src="assets/img/gallery/gallery-1.jpg" alt="" />
              </div>
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="portfolio-info">
            <h3>Project information</h3>
            <ul>
              <li>
                <strong>Category</strong>: Web design
              </li>
              <li>
                <strong>Client</strong>: ASU Company
              </li>
              <li>
                <strong>Project date</strong>: 01 March, 2020
              </li>
              <li>
                <strong>Project URL</strong>: <a href="#">www.example.com</a>
              </li>
              <li>
                <a href="#" class="btn-visit align-self-start my-2">Visit Website</a>
                </li>
            </ul>
          </div>
          <div className="portfolio-description">
            <h2>This is an example of portfolio detail</h2>
            <p>
              Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque
              inventore commodi labore quia quia. Exercitationem repudiandae
              officiis neque suscipit non officia eaque itaque enim. Voluptatem
              officia accusantium nesciunt est omnis tempora consectetur
              dignissimos. Sequi nulla at esse enim cum deserunt eius.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Portfolio Details Section */}

</main>
  {/* End #main */}
</>
  )
}

export default Project1;
