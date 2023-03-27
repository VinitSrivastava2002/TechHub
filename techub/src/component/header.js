import React from 'react';



function Header() {
return(
    <div>
 {/* <!-- ======= Header ======= --> */}
 <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo d-flex align-items-center  me-auto me-lg-0">
        {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
        <img src="assets\img\portfolio\tech-logo21.jpg" alt="" width="300px" height='500px' />
        {/* <i className="bi bi-camera"></i> */}
        {/* <h1>TechHub</h1> */}
      </a>

      <nav id="navbar" className="navbar">
        <ul>

        


          <li><a href className="active">Home</a></li>
          <li><a href="/about">About</a></li>
          <li className="dropdown"><a href><span>Project Gallery</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
        
              <li><a href="gallery.html">Web Development</a></li>
              <li><a href="gallery.html">Android Development</a></li>
              <li><a href="gallery.html">Machine Learning</a></li>
              <li><a href="gallery.html">Games</a></li>
              {/* <li><a href="gallery.html">Sports</a></li>
              <li><a href="gallery.html">Travel</a></li> */}
              {/* <li className="dropdown"><a href><span>Sub Menu</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                  <li><a href>Sub Menu 1</a></li>
                  <li><a href>Sub Menu 2</a></li>
                  <li><a href>Sub Menu 3</a></li>
                </ul>
              </li> */}
            </ul>
          </li>
          {/* <li><a href="services.html">Services</a></li> */}
          <li><a href>Contact</a></li>
        </ul>
      </nav>
      {/* <!-- .navbar --> */}

      <div className="header-social-links">
        <a href className="twitter"><i className="bi bi-twitter"></i></a>
        <a href className="github"><i className="bi bi-github"></i></a>
        {/* <a href className="instagram"><i className="bi bi-instagram"></i></a> */}
        <a href className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>
      <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

    </div>
  </header>
  {/* <!-- End Header --> */}
    </div>
)
}

export default Header;