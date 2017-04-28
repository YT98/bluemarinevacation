import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Component importing
import Layout from './Layout';
import Home from './routes/Home';
import SaintMartin from './routes/SaintMartin';
import Investir from './routes/Investir';
import Contact from './routes/Contact';


// Routes
export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
      <Route path="/saint-martin" component={SaintMartin} />
      <Route path="/investir" component={Investir} />
      <Route path="/contact" component={Contact} />
  </Route>
);
