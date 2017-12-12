import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NamecardView from './views/namecard';

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={null} />
      <Route path="/user/:username" component={NamecardView} />
    </Switch>
  </BrowserRouter>
);

export default routes;
