import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NamecardView from './views/namecard';
import RegisterView from './views/register';

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={null} />
      <Route exact path="/register" component={RegisterView} />
      <Route path="/user/:username" component={NamecardView} />
    </Switch>
  </BrowserRouter>
);

export default routes;
