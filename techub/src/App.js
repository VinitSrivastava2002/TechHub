import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

function App() {
  return (
    <div>
          {/* <!-- ======= Header ======= --> */}
  <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo d-flex align-items-center  me-auto me-lg-0">
        {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
        <img src="assets/img/logo.png" alt="" />
        <i className="bi bi-camera"></i>
        <h1>PhotoFolio</h1>
      </a>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a href="index.html" className="active">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li className="dropdown"><a href><span>Gallery</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="gallery.html">Nature</a></li>
              <li><a href="gallery.html">People</a></li>
              <li><a href="gallery.html">Architecture</a></li>
              <li><a href="gallery.html">Animals</a></li>
              <li><a href="gallery.html">Sports</a></li>
              <li><a href="gallery.html">Travel</a></li>
              <li className="dropdown"><a href><span>Sub Menu</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                  <li><a href>Sub Menu 1</a></li>
                  <li><a href>Sub Menu 2</a></li>
                  <li><a href>Sub Menu 3</a></li>
                </ul>
              </li>
            </ul>
          </li>
          {/* <li><a href="services.html">Services</a></li>
          <li><a href="contact.html">Contact</a></li> */}
        </ul>
      </nav>
      {/* <!-- .navbar --> */}

      <div className="header-social-links">
        <a href className="twitter"><i className="bi bi-twitter"></i></a>
        <a href className="facebook"><i className="bi bi-facebook"></i></a>
        <a href className="instagram"><i className="bi bi-instagram"></i></a>
        <a href className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>
      <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

    </div>
  </header>
  {/* <!-- End Header --> */}
  {/* <!-- ======= Hero Section ======= --> */}
  <section id="hero" className="hero d-flex flex-column justify-content-center align-items-center" data-aos="fade" data-aos-delay="1500">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 text-center">
          <h2>I'm <span>Jenny Wilson</span> a Professional Photographer from New York City</h2>
          <p>Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet.</p>
          <a href="contact.html" className="btn-get-started">Available for hire</a>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- End Hero Section --> */}
  <main id="main" data-aos="fade" data-aos-delay="1500">

{/* <!-- ======= Gallery Section ======= --> */}
<section id="gallery" className="gallery">
  <div className="container-fluid">
    <div className="row gy-4 justify-content-center">
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="gallery-item h-100">
          <img src="assets/img/gallery/gallery-1.jpg" className="img-fluid" alt="" />
          <div className="gallery-links d-flex align-items-center justify-content-center">
            <a href="assets/img/gallery/gallery-1.jpg" title="Gallery 1" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></a>
            <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg"></i></a>
          </div>
        </div>
      </div>
      {/* <!-- End Gallery Item --> */}
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="gallery-item h-100">
          <img src="assets/img/gallery/gallery-2.jpg" className="img-fluid" alt="" />
          <div className="gallery-links d-flex align-items-center justify-content-center">
            <a href="assets/img/gallery/gallery-2.jpg" title="Gallery 2" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></a>
            <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg"></i></a>
          </div>
        </div>
      </div>
      {/* <!-- End Gallery Item --> */}
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="gallery-item h-100">
          <img src="assets/img/gallery/gallery-3.jpg" className="img-fluid" alt="" / >
          <div className="gallery-links d-flex align-items-center justify-content-center">
            <a href="assets/img/gallery/gallery-3.jpg" title="Gallery 3" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></a>
            <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg"></i></a>
          </div>
        </div>
      </div>
      {/* <!-- End Gallery Item --> */}
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="gallery-item h-100">
          <img src="assets/img/gallery/gallery-4.jpg" className="img-fluid" alt="" />
          <div className="gallery-links d-flex align-items-center justify-content-center">
            <a href="assets/img/gallery/gallery-4.jpg" title="Gallery 4" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></a>
            <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg"></i></a>
          </div>
        </div>
      </div>
      {/* <!-- End Gallery Item --> */}
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="gallery-item h-100">
          <img src="assets/img/gallery/gallery-5.jpg" className="img-fluid" alt="" />
          <div className="gallery-links d-flex align-items-center justify-content-center">
            <a href="assets/img/gallery/gallery-5.jpg" title="Gallery 5" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></a>
            <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg"></i></a>
          </div>
        </div>
      </div>
      {/* <!-- End Gallery Item --> */}
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="gallery-item h-100">
          <img src="assets/img/gallery/gallery-6.jpg" className="img-fluid" alt="" />
          <div className="gallery-links d-flex align-items-center justify-content-center">
            <a href="assets/img/gallery/gallery-6.jpg" title="Gallery 6" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></a>
            <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg"></i></a>
          </div>
        </div>
      </div>
      {/* <!-- End Gallery Item --> */}
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="gallery-item h-100">
          <img src="assets/img/gallery/gallery-7.jpg" className="img-fluid" alt="" />
          <div className="gallery-links d-flex align-items-center justify-content-center">
            <a href="assets/img/gallery/gallery-7.jpg" title="Gallery 7" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></a>
            <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg"></i></a>
          </div>
        </div>
      </div>
      {/* <!-- End Gallery Item --> */}
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="gallery-item h-100">
          <img src="assets/img/gallery/gallery-8.jpg" className="img-fluid" alt="" />
          <div className="gallery-links d-flex align-items-center justify-content-center">
            <a href="assets/img/gallery/gallery-8.jpg" title="Gallery 8" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></a>
            <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg"></i></a>
          </div>
        </div>
      </div>
      {/* <!-- End Gallery Item --> */}
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="gallery-item h-100">
          <img src="assets/img/gallery/gallery-9.jpg" className="img-fluid" alt="" />
          <div className="gallery-links d-flex align-items-center justify-content-center">
            <a href="assets/img/gallery/gallery-9.jpg" title="Gallery 9" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></a>
            <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg"></i></a>
          </div>
        </div>
      </div>
      {/* <!-- End Gallery Item --> */}
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="gallery-item h-100">
          <img src="assets/img/gallery/gallery-10.jpg" className="img-fluid" alt="" />
          <div className="gallery-links d-flex align-items-center justify-content-center">
            <a href="assets/img/gallery/gallery-10.jpg" title="Gallery 10" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></a>
            <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg"></i></a>
          </div>
        </div>
      </div>
      {/* <!-- End Gallery Item --> */}
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="gallery-item h-100">
          <img src="assets/img/gallery/gallery-11.jpg" className="img-fluid" alt="" />
          <div className="gallery-links d-flex align-items-center justify-content-center">
            <a href="assets/img/gallery/gallery-11.jpg" title="Gallery 11" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></a>
            <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg"></i></a>
          </div>
        </div>
      </div>
      {/* <!-- End Gallery Item --> */}
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="gallery-item h-100">
          <img src="assets/img/gallery/gallery-12.jpg" className="img-fluid" alt="" />
          <div className="gallery-links d-flex align-items-center justify-content-center">
            <a href="assets/img/gallery/gallery-12.jpg" title="Gallery 12" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></a>
            <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg"></i></a>
          </div>
        </div>
      </div>
      {/* <!-- End Gallery Item --> */}
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="gallery-item h-100">
          <img src="assets/img/gallery/gallery-13.jpg" className="img-fluid" alt="" />
          <div className="gallery-links d-flex align-items-center justify-content-center">
            <a href="assets/img/gallery/gallery-13.jpg" title="Gallery 13" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></a>
            <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg"></i></a>
          </div>
        </div>
      </div>
      {/* <!-- End Gallery Item --> */}
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="gallery-item h-100">
          <img src="assets/img/gallery/gallery-14.jpg" className="img-fluid" alt="" />
          <div className="gallery-links d-flex align-items-center justify-content-center">
            <a href="assets/img/gallery/gallery-14.jpg" title="Gallery 14" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></a>
            <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg"></i></a>
          </div>
        </div>
      </div>
      {/* <!-- End Gallery Item --> */}
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="gallery-item h-100">
          <img src="assets/img/gallery/gallery-15.jpg" className="img-fluid" alt="" />
          <div className="gallery-links d-flex align-items-center justify-content-center">
            <a href="assets/img/gallery/gallery-15.jpg" title="Gallery 15" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></a>
            <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg"></i></a>
          </div>
        </div>
      </div>
      {/* <!-- End Gallery Item --> */}
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="gallery-item h-100">
          <img src="assets/img/gallery/gallery-16.jpg" className="img-fluid" alt="" />
          <div className="gallery-links d-flex align-items-center justify-content-center">
            <a href="assets/img/gallery/gallery-16.jpg" title="Gallery 16" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></a>
            <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg"></i></a>
          </div>
        </div>
      </div>
      {/* <!-- End Gallery Item --> */}

    </div>

  </div>
</section>
{/* <!-- End Gallery Section --> */}
</main>
{/* <!-- End #main --> */}
<footer id="footer" className="footer">
    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>PhotoFolio</span></strong>. All Rights Reserved
      </div>
    </div>
  </footer>
</div>
);
}

export default App;
