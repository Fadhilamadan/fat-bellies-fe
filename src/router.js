import React from 'react';

import Branch from './components/branch/list';

import { Route, Switch } from 'react-router-dom';

const Router = () => {
  return (
    <div className="container mx-auto px-4">
      <Switch>
        <Route exact path="/">
          <Branch />
        </Route>
      </Switch>
    </div>
  );
};

export default Router;
