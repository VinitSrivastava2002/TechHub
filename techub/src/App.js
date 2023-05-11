import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './component/footer';
import Header from './component/header';
import Home from './pages/Home';
// import SignIn from './component/SignIn';
import About from "./pages/About";
import Web from './Project_Gallery/web';
import Machine from './Project_Gallery/machine';
import Games from './Project_Gallery/games';
import IOT from './Project_Gallery/Iot';
import Project1 from './projectdetails';
import Android from './Project_Gallery/Android';




function App() {
  return ( 
    <div>
      <Header />
       <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/" exact component={SignIn} /> */}
          <Route path="/about" exact component={About} />
          <Route path="/web" exact component={Web}/>
          <Route path="/android" exact component={Android}/>
          <Route path="/machine" exact component={Machine}/>
          <Route path="/iot" exact component={IOT}/>
          <Route path="/games" exact component={Games}/>
          {/* PROJECTS FOR WEBTECHNOLOGY */}
          <Route path="/projectdetail1" exact component={Project1}/>
          

          


        </Switch>
    </Router>
    <Footer />
    </div>
   
  )
}

export default App
