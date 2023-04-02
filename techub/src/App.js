import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './component/footer';
import Header from './component/header';
import Home from './pages/Home';
import About from "./pages/About"
import Web from './Project_Gallery/web';
import Android from './Project_Gallery/android';
import Project_details from './Project_Gallery/project_details';
import Machine from './Project_Gallery/machine';
import Games from './Project_Gallery/games';
import IOT from './Project_Gallery/Iot';


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
          <Route path="/projectdetail" exact component={Project_details}/>
          


        </Switch>
    </Router>
    <Footer />
    </div>
   
  )
}

export default App
