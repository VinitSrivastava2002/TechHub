import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/about';
import Footer from './component/footer';
import Header from './component/header';
import Home from './pages/Home';
import contact from './pages/contact';
//import Gallery from './Project_Gallery/gallery';
//import android from './Project_Gallery/android';
import Web from './Project_Gallery/web';
import Android from './Project_Gallery/android';


function App() {
  return ( 
    <div>
      <Header />
       <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={contact} />
          <Route path="/web" exact component={Web}/>
          <Route path="/android" exact component={Android}/>

        </Switch>
    </Router>
    <Footer />
    </div>
   
  )
}

export default App
