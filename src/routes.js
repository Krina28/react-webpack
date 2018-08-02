import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'Components/home';
import About from 'Components/about';
import Header from 'Common/header';
import Footer from 'Common/footer';

const Routers = () => (
  <main>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
    <Footer />
  </main>
);

export default Routers;
