import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Component importing
import Layout from './Layout';
import Home from './routes/Home';
import SaintMartin from './routes/SaintMartin';
import Estates from './routes/Estates';
import Contact from './routes/Contact';


// Routes
export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
      <Route path="/saint-martin" component={SaintMartin} />
      <Route path="/estates" component={Estates} />
      <Route path="/contact" component={Contact} />
  </Route>
);
