import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './component/footer';
import Header from './component/header';
import Home from './pages/Home';
import About from "./pages/About"
import Web from './Project_Gallery/web';
import Android from './Project_Gallery/android';
import Machine from './Project_Gallery/machine';
import Games from './Project_Gallery/games';
import IOT from './Project_Gallery/Iot';
import Project_details1 from './Project_Details/WebTechnology/project1';
import Project2 from './Project_Details/WebTechnology/Project2';
import Project3 from './Project_Details/WebTechnology/project3';
import Project4 from './Project_Details/WebTechnology/project4';




function App() {
  return ( 
    <div>
      <Header />
       <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/web" exact component={Web}/>
          <Route path="/android" exact component={Android}/>
          <Route path="/machine" exact component={Machine}/>
          <Route path="/iot" exact component={IOT}/>
          <Route path="/games" exact component={Games}/>
          {/* PROJECTS FOR WEBTECHNOLOGY */}
          <Route path="/projectdetail1" exact component={Project_details1}/>
          <Route path="/projectdetail2" exact component={Project2}/>
          <Route path="/projectdetail3" exact component={Project3}/>
          <Route path="/projectdetail4" exact component={Project4}/>

          


        </Switch>
    </Router>
    <Footer />
    </div>
   
  )
}

export default App
