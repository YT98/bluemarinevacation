import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Component importing
import Layout from './shared/Layout';
import Home from './shared/routes/Home';
import SaintMartin from './shared/routes/SaintMartin';
import Estates from './shared/routes/Estates';
import Contact from './shared/routes/Contact';


// Routes
export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
      <Route path="/saint-martin" component={SaintMartin} />
      <Route path="/estates" component={Estates} />
      <Route path="/contact" component={Contact} />
  </Route>
);
