
// import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect } from 'react'
import "./about.css";
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
              <h1>About TechHub</h1>
              <h2>Join us at TechHub and let's build the future, today! </h2>
              
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="500">
              <img src="assets\images\About\About.png" className="img-fluid animated" alt="" />
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

              <div class="col-lg-7 about-img">
               <img src="assets\images\About\About-1.jpg" className="img-fluid img-thumbnail" alt="" />
              </div>

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
              <div class="col-lg-6 img-bg"  data-aos="zoom-in" data-aos-delay="100">
                <img src="assets\images\About\About-3.jpg" className="img-fluid img-thumbnail " alt="" />
              </div>

              <div class="col-lg-5 d-flex flex-column justify-content-center">
                <h3>Technologies we used</h3>
                <p>React is the most popular JavaScript front-end framework in use today. It’s used by both established companies and new startups.</p>

                <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
                  <i class="bi bi-easel flex-shrink-0"></i>
                  <div>
                    <h4><a href class="stretched-link">Web Development</a></h4>
                    <p>Web development is becoming an increasingly widespread profession. Web developers are responsible for building and maintaining websites.
                       They control how a website looks, how a website performs, and what sort of actions people can take when they visit a website.</p>
                  </div>
                </div>
                {/* <!-- End Icon Box --> */}

                <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
                  <i class="bi bi-patch-check flex-shrink-0"></i>
                  <div>
                    <h4><a href class="stretched-link">Android Development</a></h4>
                    <p> Android development requires a tool called Android Studio. This is the software developers use to enter their code, test their apps,
                       and manage their projects.</p>
                  </div>
                </div>
                {/* <!-- End Icon Box --> */}

                <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
                  <i class="bi bi-brightness-high flex-shrink-0"></i>
                  <div>
                    <h4><a href class="stretched-link">Machine Learning</a></h4>
                    <p>Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to 
                      imitate the way that humans learn, gradually improving its accuracy.</p>
                  </div>
                </div>
                {/* <!-- End Icon Box --> */}

                <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
                  <i class="bi bi-brightness-high flex-shrink-0"></i>
                  <div>
                    <h4><a href class="stretched-link">Game Development</a></h4>
                    <p>Game development refers to the process of creating a video game. There are lots of different roles that work together to build the game that 
                      ends up on your screen.</p>
                  </div>
                </div>
                {/* <!-- End Icon Box --> */}

              </div>
            </div>

          </div>
        </section>
        {/* <!-- End Alt Services Section --> */}

        

        {/* <!-- ======= Our Team Section ======= --> */}
        {/* <section id="team" class="team">
          <div class="container" data-aos="fade-up">
          <div class="row gy-5">
          <div class="section-title">
             <h2>MENTOR</h2>
            </div>

              <div class="col-lg-4 col-md-6 member justify-content-center " data-aos="fade-up" data-aos-delay="600">
                <div class="member-img">
                  <img src="assets\images\Mentor\Shubha.jpeg" class="img-fluid" alt="" />
                  <div class="social">
                    <a href><i class="bi bi-twitter"></i></a>
                    <a href><i class="bi bi-github"></i></a>
                    
                    <a href><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div class="member-info text-center">
                  <h4>Mrs SUBHA JAIN</h4>
                  <span>Head Of Department</span>
                </div>
              </div> */}
              {/* <!-- End Team Member --> */}
              {/* <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="600">
                <div class="member-img">
                  <img src="assets\images\Mentor\Shail.jpeg" class="img-fluid" alt="" />
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
              </div> */}
              {/* <!-- End Team Member --> */}
{/* 
            <div class="section-title">
             <h2>OUR TEAM</h2>
            </div>

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
                  <span>Frontend-Backend</span>
                </div>
              </div>
              {/* <!-- End Team Member --> */}
{/* 
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
                  <span>Team Leader(Frontend Developer)</span>
                </div>
              </div>  */}
              {/* <!-- End Team Member --> */}
{/* 
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
              </div> */}
              {/* <!-- End Team Member --> */}
{/* 
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
                  <span>CI/CD Developer</span>
                </div>
              </div> */}
              {/* <!-- End Team Member --> */}

{/*               

            </div>

          </div>
        </section> */}
        {/* <!-- End Our Team Section --> */}
      </main>
    </div>
  )
}

export default About