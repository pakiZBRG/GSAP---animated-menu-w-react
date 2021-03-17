import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Content from './components/Content';
import Header from './components/Header'
import Solutions from './components/page/Solutions'
import Opportunities from './components/page/Opportunities'
import ContactUs from './components/page/ContactUs'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/' component={Content}/>
        <Route path='/solutions' component={Solutions}/>
        <Route path='/opportunities' component={Opportunities}/>
        <Route path='/contact-us' component={ContactUs}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
