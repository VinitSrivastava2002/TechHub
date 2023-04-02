import React, { useEffect } from 'react';
// import "bootstrap/dist/css/bootstrap.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <section id="hero" className="d-flex align-items-center" >

        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-right" data-aos-delay="500">
              <h1 >WELCOME TO TECHHUB </h1>
              
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="500">
              <img src="assets/img/hero-img.png" className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>

      </section>
      {/* <!-- End Hero --> */}

      <main id="main">


        {/* <!-- ======= technologies Section ======= --> */}
        <section id="technologies" className="technologies section-bg">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>COLLECTIONS</h2>
              
            </div>

            <div className="row">
              <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                <div className="icon-box">
                  <div className="icon"></div>
                  <h4><a href>Web Development</a></h4>
                  <p>Websites promote you 24/7: No employee will do that.</p>
                  <a href="http://">Learn more </a>

                </div>
              </div>

              <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-file"></i></div>
                  <h4><a href>Android Development</a></h4>
                  <p>Your mobile device has quickly become the easiest portal into your digital self.</p>
                  <a href="http://">Learn more </a>
                </div>
              </div>

              <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="fade-up" data-aos-delay="300">
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-tachometer"></i></div>
                  <h4><a href>Machine Learning</a></h4>
                  <p>Prediction thefuture isn't magic, it's artificial intelligence.</p>
                  <a href="http://">Learn more </a>

                </div>
              </div>

              <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="fade-up" data-aos-delay="400">
                <div className="icon-box">
                  <div className="icon"><i className="bx bx-layer"></i></div>
                  <h4><a href>Game Development</a></h4>
                  <p>Life is a difficult game. You can win it only by retaining your birthright to be a person.</p>
                  <a href="http://">Learn more </a>

                </div>
              </div>

            </div>

          </div>
        </section>
        {/* <!-- End technologies Section --> */}

        {/* <!-- ======= Clients Section ======= --> */}
        <section id="clients" className="clients section-bg">
          <div className="container">

            <div className="row" data-aos="zoom-in">

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2Fhomepage%20Icons%2Freact.png?alt=media&token=cc5e03dd-8587-409f-bd93-3c51298a28bb" className="img-fluid" alt="reactjs" />
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2Fhomepage%20Icons%2Fnode.png?alt=media&token=2bb97206-4883-4d62-a314-0ff0fdf880dc" className="img-fluid" alt="android" />
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2Fhomepage%20Icons%2Fandroid.png?alt=media&token=abf04eab-aedf-4531-8d78-7bbe8d6f6c61" className="img-fluid" alt="panda" />
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2Fhomepage%20Icons%2Fmongo.png?alt=media&token=9ae1c5b8-f0b8-4062-a9a2-5e0181356924" className="img-fluid" alt="numpy" />
              </div>

              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2Fhomepage%20Icons%2Fgit.png?alt=media&token=1f9c9675-30fa-4d6e-8f2e-8bfa607aee58" className="img-fluid" alt="kubernative" />
              </div>
              <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2Fhomepage%20Icons%2Fangular.png?alt=media&token=a983c392-4b67-46f1-99ff-c20855d6daaa" className="img-fluid" alt="kubernative" />
              </div>

            </div>

          </div>
        </section>
        {/* <!-- End Cliens Section --> */}
        {/* <!-- ======= Services Section ======= --> */}
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <div className=" section-title">
          <h2>PROJECTS GALLERY</h2>
        </div>
        <div className="row gy-5">
          <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div className="service-item">
              <div className="img">
                <img src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2Fhomepage%20Icons%2Fservices-1.jpg?alt=media&token=cae01a35-08f8-4c2e-a3fb-03f7a35b2000" className="img-fluid" alt=""/>
              </div>
              <div className="details position-relative">
                <div className="icon">
                  <i className="bi bi-globe2"></i>
                </div>
                <a href="/web" className="stretched-link">
                  <h3>Web Development</h3>
                </a>
                <p>Web based projects designed and programmed for user to experience different services on their browsers.</p>
              </div>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
            <div className="service-item">
              <div className="img">
                <img src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2Fhomepage%20Icons%2Fservices-2.jpg?alt=media&token=25ba0f4c-b8b6-4a47-b345-c36bea9df11b" className="img-fluid" alt=""/>
              </div>
              <div className="details position-relative">
                <div className="icon">
                  <i className="bi bi-android2"></i>
                </div>
                <a href="/android"
                 className="stretched-link">
                  <h3>Android Development</h3>
                </a>
                <p>App based projects designed and programmed for user to experience different services on their browsers.</p>
              </div>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
            <div className="service-item">
              <div className="img">
                <img src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2Fhomepage%20Icons%2Fservices-5.jpg?alt=media&token=babf8d18-9724-4043-8cfe-458e3fc27f98" className="img-fluid" alt=""/>
              </div>
              <div className="details position-relative">
                <div className="icon">
                  <i className="bi bi-robot"></i>
                </div>
                <a href="/machine" className="stretched-link">
                  <h3>Machine Learning</h3>
                </a>
                <p>ML based projects designed and programmed for user to experience different services on their browsers</p>
              </div>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
            <div className="service-item">
              <div className="img">
                <img src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2Fhomepage%20Icons%2Fservices-6.jpg?alt=media&token=12bcc4a7-90c7-4623-8032-f37500f9a772" className="img-fluid" alt=""/>
              </div>
              <div className="details position-relative">
                <div className="icon">
                  <i className="bi bi-controller"></i>
                </div>
                <a href="/games" className="stretched-link">
                  <h3>Game Development</h3>
                </a>
                <p> Game based projects designed and programmed for user to experience different services on their browsers.</p>
              </div>
            </div>
          </div>
          {/* <!-- End Service Item --> */}
          <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
            <div className="service-item">
              <div className="img">
                <img src="https://firebasestorage.googleapis.com/v0/b/techhub-def2e.appspot.com/o/assets%2Fhomepage%20Icons%2Fservices-4.jpg?alt=media&token=b3b776bb-beec-4077-9fd9-0f3e8bff3f0c" className="img-fluid" alt=""/>
              </div>
              <div className="details position-relative">
                <div className="icon">
                  <i className="bi bi-clouds"></i>
                </div>
                <a href="/iot" className="stretched-link">
                  <h3>Internet of Things</h3>
                </a>
                <p>IOT based projects designed and programmed for user to experience different services on their browsers.</p>
              </div>
            </div>
          </div>
          {/* <!-- End Service Item --> */}

          
          

        </div>

      </div>
    </section>
    {/* <!-- End Services Section --> */}
</main>










  </div>
 )
 }
