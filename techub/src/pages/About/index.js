
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

      
  {/* ======= About Section ======= */}
  <section id="about" className="about">
    <div className="container" >
      <div className="row position-relative">
        <div
          className="col-lg-7 about-img"
           style={{ backgroundImage: "url(assets/img/download.png)" }}
        />
        <div className="col-lg-7">
          <h3 className>Consequatur eius et magnam</h3>
          <div className="our-story">
            <h4>On 2022</h4>
            <h3>Our Story</h3>
            <p>
              Inventore aliquam beatae at et id alias. Ipsa dolores amet
              consequuntur minima quia maxime autem. Quidem id sed ratione.
              Tenetur provident autem in reiciendis rerum at dolor. Aliquam
              consectetur laudantium temporibus dicta minus dolor.
            </p>
            <ul>
              <li>
                <i className="bi bi-check-circle" />{" "}
                <span>Ullamco laboris nisi ut aliquip ex ea commo</span>
              </li>
              <li>
                <i className="bi bi-check-circle" />{" "}
                <span>Duis aute irure dolor in reprehenderit in</span>
              </li>
              <li>
                <i className="bi bi-check-circle" />{" "}
                <span>Ullamco laboris nisi ut aliquip ex ea</span>
              </li>
            </ul>
            <p>
              Vitae autem velit excepturi fugit. Animi ad non. Eligendi et non
              nesciunt suscipit repellendus porro in quo eveniet. Molestias in
              maxime doloremque.
            </p>
           
          </div>
        </div>
      </div>
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
        </div>
        {/* End Stats Item */}
      </div>
    </div>
  </section>
  {/* End Stats Counter Section */}
  {/* ======= Alt Services Section ======= */}
 
  {/* End Alt Services Section */}
  {/* ======= Alt Services Section 2 ======= */}
  <section id="alt-services-2" className="alt-services section-bg">
    <div className="container" >
      <div className="row justify-content-around gy-4">
        <div className="col-lg-5 d-flex flex-column justify-content-center">
          <h3>
            Non quasi officia eum nobis et rerum epudiandae rem voluptatem
          </h3>
          <p>
            Maxime quia dolorum alias perspiciatis. Earum voluptatem sint at
            non. Ducimus maxime minima iste magni sit praesentium assumenda
            minus. Amet rerum saepe tempora vero.
          </p>
          <div
            className="icon-box d-flex position-relative"
            
          >
            <i className="bi bi-easel flex-shrink-0" />
            <div>
              <h4>
                <a href="" className="stretched-link">
                  Web Development
                </a>
              </h4>
              <p>
              Web development is designing and coding a functional layout for your site, making sure it's compatible with all browsers, mobile devices, and other devices that might access the site
              </p>
            </div>
          </div>
          {/* End Icon Box */}
          <div
            className="icon-box d-flex position-relative"
            
          >
            <i className="bi bi-patch-check flex-shrink-0" />
            <div>
              <h4>
                <a href="" className="stretched-link">
                  Android Development
                </a>
              </h4>
              <p>  
              Android development is a form of software engineering dedicated specifically to creating applications for devices that run on the Android platform.
              </p>
            </div>
          </div>
          {/* End Icon Box */}
          <div
            className="icon-box d-flex position-relative"
            
          >
            <i className="bi bi-brightness-high flex-shrink-0" />
            <div>
              <h4>
                <a href="" className="stretched-link">
                  Machine Learning
                </a>
              </h4>
              <p>
                Explicabo est voluptatum asperiores consequatur magnam. Et
                veritatis odit. Sunt aut deserunt minus aut eligendi omnis
              </p>
            </div>
          </div>
          {/* End Icon Box */}
          <div
            className="icon-box d-flex position-relative"
            
          >
            <i className="bi bi-brightness-high flex-shrink-0" />
            <div>
              <h4>
                <a href="" className="stretched-link">
                  Game Development
                </a>
              </h4>
              <p>
                Est voluptatem labore deleniti quis a delectus et. Saepe dolorem
                libero sit non aspernatur odit amet. Et eligendi
              </p>
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
          </div>
          <div className="member-info text-center">
            <h4>Vanya Rastogi</h4>
            <span>Team Leader</span>
            <p>
              Aliquam iure quaerat voluptatem praesentium possimus unde
              laudantium vel dolorum distinctio dire flow
            </p>
          </div>
        </div>
        {/* End Team Member */}
        <div
          className="col-lg-4 col-md-6 member"
          
        >
          <div className="member-img">
            <img
              src="assets/img/team/stt.png"
              className="img-fluid"
              alt=""
            />
            <div className="social">
              <a href="#">
                <i className="bi bi-twitter" />
              </a>
              <a href="#">
                <i className="bi bi-facebook" />
              </a>
              <a href="#">
                <i className="bi bi-instagram" />
              </a>
              <a href="#">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
          <div className="member-info text-center">
            <h4>Rana Pratap Singh</h4>
            <span>Product Manager</span>
            <p>
              Labore ipsam sit consequatur exercitationem rerum laboriosam
              laudantium aut quod dolores exercitationem ut
            </p>
          </div>
        </div>
        {/* End Team Member */}
        <div
          className="col-lg-4 col-md-6 member"
          
        >
          <div className="member-img">
            <img
              src="assets/img/team/team-3.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="social">
              <a href="#">
                <i className="bi bi-twitter" />
              </a>
              <a href="#">
                <i className="bi bi-facebook" />
              </a>
              <a href="#">
                <i className="bi bi-instagram" />
              </a>
              <a href="#">
                <i className="bi bi-linkedin" />
              </a>
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
