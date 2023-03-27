import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/about';
import Footer from './component/footer';
import Header from './component/header';
import Home from './pages';
import contact from './pages/contact';

function App() {
  return ( 
    <div>
      <Header />
       <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={contact} />

        </Switch>
    </Router>
    <Footer />
    </div>
   
  )
}

export default App
