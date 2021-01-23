import React, { Suspense } from "react";
import { hot } from "react-hot-loader/root";
import { Route, Switch } from "react-router-dom";
import { compose } from "redux";
import Home from './Home'

/**
 * The main app, including the primary router and support
 * for lazy loading (Suspense) and optional DevTools
 */
const App = () => (
  <Suspense fallback={<div>Loading</div>}>
    {/** Primary routing */}
    <Switch>
      <Route path='/' component={Home} />
      <Route path='*'>
        404
      </Route>
    </Switch>
  </Suspense>
);

const enhance = compose(
  hot,
);

export default enhance(App);