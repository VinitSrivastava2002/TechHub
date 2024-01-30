import React from 'react';
import { Button } from '@mui/material';

function Header({handleSignOut}) {

  return ( 
    <>
      {/* <!-- ======= Header ======= --> */}
      <header id="header" className="header d-flex align-items-center  fixed-top">
        
        <a href="/" className="logo d-flex align-items-center justify-content-start me-auto me-lg-0">
            <h2 style={{ color: '#fff', marginLeft: '1.25rem', marginTop: '0.5rem' }}>TECHHUB</h2>
        </a>

        <div className="container-fluid d-flex align-items-center justify-content-end">
          <nav id="navbar" className="navbar">
            <ul>
              <li><a href="/" className="nav-link ">Home</a></li>
              <li><a href="/about" className="nav-link" >About</a></li>
              <li className="dropdown">
                <a href="#">Project Gallery<span className="bi bi-chevron-down dropdown-indicator"></span></a>
                <ul>
                  <li><a href="/web">Web Development</a></li>
                  <li><a href="/android">Android Development</a></li>
                  <li><a href="/machine">Machine Learning</a></li>
                  <li><a href="/iot">IOT</a></li>
                  <li><a href="/games">Games</a></li>
                </ul>
              </li> 
              {/* <li><a className="nav-link " href="#team">Team</a></li> */}
              <li><a className="nav-link " href="#contact">Contact</a></li>
              
            </ul>
          </nav>
          {/* <!-- .navbar --> */}

          {/* <div className="header-social-links">
            <a href className="twitter"><i className="bi bi-twitter"></i></a>
            <a href className="github"><i className="bi bi-github"></i></a>
            <a href className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div> */}
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

          {/* Logout button  */}
        </div> 
        <Button variant="contained" className="mx-3 " nClick={handleSignOut}>Logout</Button>
      </header>
      {/* <!-- End Header -->*/}
    </>
  )
}

export default Header;
