import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { Button } from '@mui/material';

function Header() {
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // User is signed out
        console.log('User signed out');
      })
      .catch((error) => {
        // Handle sign-out errors
        console.log('Sign-out error:', error);
      });
  };

  return (
    <div>
      {/* <!-- ======= Header ======= --> */}
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid d-flex align-items-center justify-content-between">

          <a href="index.html" className="logo d-flex align-items-center  me-auto me-lg-0">
            {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
            <h2 style={{ color: '#fff', marginLeft: '1.25rem' }}>TECHHUB</h2>
            {/* <i className="bi bi-camera"></i> */}
            {/* <h1>TechHub</h1> */}
          </a>

          <nav id="navbar" className="navbar">
            <ul>
              <li><a href="/" className="active">Home</a></li>
              <li><a href="/about" style={{ color: '#ffff', gap: '5px' }}>About</a></li>
              <li className="dropdown"><a href style={{ color: '#ffff', gap: '5px' }}><span>Project Gallery</span> <span className="bi bi-chevron-down dropdown-indicator"></span></a>
                <ul>

                  <li><a href="/web">Web Development</a></li>
                  <li><a href="/android">Android Development</a></li>
                  <li><a href="/machine">Machine Learning</a></li>
                  <li><a href="/iot">IOT</a></li>
                  <li><a href="/games">Games</a></li>

                </ul>
              </li>

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

          {/* Logout button */}
          <Button variant="contained" onClick={handleSignOut}>Logout</Button>

        </div>
      </header>
      {/* <!-- End Header --> */}
    </div>
  )
}

export default Header;
