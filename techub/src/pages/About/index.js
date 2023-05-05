
// import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect } from 'react'

import "./style.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <div>

      

      <section id="hero" className="d-flex align-items-center" >

<div className="container">
  <div className="row">
    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-right" data-aos-delay="500">
      <h1 >ABOUT TECHHUB </h1>
      
    </div>
    <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="500">
      <img src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2Fhomepage%20Icons%2Faboutlogo.png?alt=media&token=05b0c2e5-8488-408a-b939-21bef743d3fd" className="img-fluid animated" alt="" />
    </div>
  </div>
</div>

</section>
{/* <!-- End Hero --> */}
<main id="main">
        {/* <!-- ======= About Section ======= --> */}
        <section id="about " class="about">
          <div class="container" data-aos="fade-up">

            <div class="row position-relative">

              <div class="col-lg-7 about-img"></div>

              <div class="col-lg-7">
                
                <div class="our-story">
                  <h3>WHY TECHHUB ??</h3>
                  <p>Engineering students often struggle to apply theoretical knowledge for practical projects. TechHub is a platform that facilitates collaboration between senior and junior students in an engineering college by allowing seniors to store their projects and share them with juniors.</p>
                  <ul id="point">
                    <li><i class="bi bi-check-circle"></i> <span>Easy Access</span></li>
                    <li><i class="bi bi-check-circle"></i> <span>Clear View</span></li>
                    <li><i class="bi bi-check-circle"></i> <span>Complete Project Detail</span></li>
                  </ul>
                  <p>TechHub is based on the MERN stack, which includes MongoDB, Express, React, and Node.js, and was implemented using the Agile methodology. A survey of senior students who uploaded their projects to TechHub indicated that the it will you by juniors.</p>
                </div>
              </div>

            </div>

          </div>
        </section>
        {/* <!-- End About Section --> */}

        {/* <!-- ======= Stats Counter Section ======= --> */}
        <section id="stats-counter" class="stats-counter section-bg" data-aos="fade-up" data-delay="100">
          <div class="container">

            <div class="row gy-4">

              <div class="col-lg-3 col-md-6">
                <div class="stats-item d-flex align-items-center w-100 h-100">
                  <i class="bi bi-globe color-blue flex-shrink-0"></i>
                  <div>
                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
                    <p>Web</p>
                    <h1>5</h1>
                  </div>
                </div>
              </div>
              {/* <!-- End Stats Item --> */}

              <div class="col-lg-3 col-md-6">
                <div class="stats-item d-flex align-items-center w-100 h-100">
                  <i class="bi bi-android2 color-orange flex-shrink-0"></i>
                  <div>
                    <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
                    <p>Android </p>
                    <h1>5</h1>
                  </div>
                </div>
              </div>
              {/* <!-- End Stats Item --> */}

              <div class="col-lg-3 col-md-6">
                <div class="stats-item d-flex align-items-center w-100 h-100">
                  <i class="bi bi-headset color-green flex-shrink-0"></i>
                  <div>
                    <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" class="purecounter"></span>
                    <p>IOT</p>
                    <h1>5</h1>
                  </div>
                </div>
              </div>
              {/* <!-- End Stats Item --> */}

              <div class="col-lg-3 col-md-6">
                <div class="stats-item d-flex align-items-center w-100 h-100">
                  <i class="bi bi-dpad color-pink flex-shrink-0"></i>
                  <div>
                    <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" class="purecounter"></span>
                    <p>Game</p>
                    <h1>5</h1>
                  </div>
                </div>
              </div>
              {/* <!-- End Stats Item --> */}

            </div>

          </div>
        </section>
        {/* <!-- End Stats Counter Section --> */}

        {/* <!-- ======= Alt Services Section ======= --> */}
        <section id="alt-services" class="alt-services">
          <div class="container" data-aos="fade-up">

            <div class="row justify-content-around gy-4">
              <div class="col-lg-6 img-bg"  data-aos="zoom-in" data-aos-delay="100"></div>

              <div class="col-lg-5 d-flex flex-column justify-content-center">
                <h3>Technologies we used</h3>
                <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi</p>

                <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
                  <i class="bi bi-easel flex-shrink-0"></i>
                  <div>
                    <h4><a href class="stretched-link">Web Development</a></h4>
                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                  </div>
                </div>
                {/* <!-- End Icon Box --> */}

                <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
                  <i class="bi bi-patch-check flex-shrink-0"></i>
                  <div>
                    <h4><a href class="stretched-link">Android Development</a></h4>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                  </div>
                </div>
                {/* <!-- End Icon Box --> */}

                <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
                  <i class="bi bi-brightness-high flex-shrink-0"></i>
                  <div>
                    <h4><a href class="stretched-link">Machine Learning</a></h4>
                    <p>Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
                  </div>
                </div>
                {/* <!-- End Icon Box --> */}

                <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
                  <i class="bi bi-brightness-high flex-shrink-0"></i>
                  <div>
                    <h4><a href class="stretched-link">Game Development</a></h4>
                    <p>Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit non aspernatur odit amet. Et eligendi</p>
                  </div>
                </div>
                {/* <!-- End Icon Box --> */}

              </div>
            </div>

          </div>
        </section>
        {/* <!-- End Alt Services Section --> */}

        

        {/* <!-- ======= Our Team Section ======= --> */}
        <section id="team" class="team">
          <div class="container" data-aos="fade-up">
          <div class="row gy-5">
          <div class="section-title">
             <h2>MENTOR</h2>
            </div>

              <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="600">
                <div class="member-img">
                  <img src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/shubhaa.jpg?alt=media&token=a44f79a3-ec41-46a4-b09f-98c1f748821d" class="img-fluid" alt="" />
                  <div class="social">
                    <a href><i class="bi bi-twitter"></i></a>
                    <a href><i class="bi bi-github"></i></a>
                    
                    <a href><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div class="member-info text-center">
                  <h4>Mrs SUBHA JAIN</h4>
                  <span>HOD</span>
                </div>
              </div>
              {/* <!-- End Team Member --> */}
              <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="600">
                <div class="member-img">
                  <img src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/shail.jpg?alt=media&token=e0ab3561-b05f-45b2-ab65-49dd93c21ea5" class="img-fluid" alt="" />
                  <div class="social">
                    <a href><i class="bi bi-twitter"></i></a>
                    <a href><i class="bi bi-github"></i></a>

                    <a href><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div class="member-info text-center">
                  <h4>Mrs SHAIL DUBEY</h4>
                  <span>Associate Professor</span>
                </div>
              </div>
              {/* <!-- End Team Member --> */}

            <div class="section-title">
             <h2>OUR TEAM</h2>
            </div>

            

              <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="100">
                <div class="member-img">
                  <img src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/kammo2.jpeg?alt=media&token=d27f6529-afbd-49e6-9727-3a873f7e46ed" class="img-fluid" alt="" />
                  <div class="social">
                    <a href="https://twitter.com/vanya_rastogi"><i class="bi bi-twitter"></i></a>
                    <a href="https://github.com/VanyaRastogi"><i class="bi bi-github"></i></a>
                    
                    <a href="https://www.linkedin.com/in/vanya-rastogi/"><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div class="member-info text-center">
                  <h4>VANYA RASTOGI</h4>
                  <span>Team Leader</span>
                </div>
              </div>
              {/* <!-- End Team Member --> */}

              <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="200">
                <div class="member-img">
                  <img src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/sivakur2.jpeg?alt=media&token=59156c05-62ec-40dd-821f-867d5e9e1e6c" class="img-fluid" alt="" />
                  <div class="social">
                  <a href="https://twitter.com/ShivankurSingh2"><i class="bi bi-twitter"></i></a>
                    <a href="https://github.com/Shivankur25"><i class="bi bi-github"></i></a>

                    <a href="https://www.linkedin.com/in/shivankur-singh-38a852190/"><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div class="member-info text-center">
                  <h4>SHIVANKUR SINGH</h4>
                  <span>Backend Developer</span>
                </div>
              </div>
              {/* <!-- End Team Member --> */}

              <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="300">
                <div class="member-img">
                  <img src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/MYPIC1.jpeg?alt=media&token=d1566d7e-c206-4d26-8374-7139c84daf9b" class="img-fluid" alt="" />
                  <div class="social">
                  <a href><i class="bi bi-twitter"></i></a>
                    <a href="https://github.com/VinitSrivastava2002"><i class="bi bi-github"></i></a>

                    <a href="linkedin.com/in/vinit-srivastava-2ba5191a6/"><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div class="member-info text-center">
                  <h4>VINIT SRIVASTAVA</h4>
                  <span>CI/CD Developer</span>
                </div>
              </div>
              {/* <!-- End Team Member --> */}

              <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="400">
                <div class="member-img">
                  <img src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2Fhomepage%20Icons%2Fstt.png?alt=media&token=4437873e-1402-4fba-b464-98ea7ebb19e3" class="img-fluid" alt="" />
                  <div class="social">
                  <a href><i class="bi bi-twitter"></i></a>
                    <a href="https://github.com/rana830"><i class="bi bi-github"></i></a>

                    <a href="https://www.linkedin.com/in/rana-pratap-singh-a05883192"><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div class="member-info text-center">
                  <h4>RANA PRATAP SINGH</h4>
                  <span>UI Designer</span>
                </div>
              </div>
              {/* <!-- End Team Member --> */}

              

            </div>

          </div>
        </section>
        {/* <!-- End Our Team Section --> */}
      </main>
    </div>
  )
}

export default About