import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Component importing
import Layout from './Layout';
import Accueil from './routes/Accueil';
import SaintMartin from './routes/SaintMartin';
import Investir from './routes/Investir';
import Contact from './routes/Contact';

import Home from './routes/en/Home';
import StMarteen from './routes/en/StMarteen';
import Invest from './routes/en/Invest';
import EnContact from './routes/en/EnContact';

// Routes
export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Accueil} />
    <Route path="/saint-martin" component={SaintMartin} />
    <Route path="/investir" component={Investir} />
    <Route path="/contact" component={Contact} />

    <Route path="en">
      <IndexRoute component={Home} />
      <Route path="st-marteen" component={StMarteen} />
      <Route path="invest" component={Invest} />
      <Route path="contact" component={EnContact} />
    </Route>
  </Route>
);
