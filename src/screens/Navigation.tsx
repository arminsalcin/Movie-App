import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Details from './Details';

const Navigation: React.FC = (): JSX.Element => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/details/:id/:tabId" exact component={Details}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default Navigation;
