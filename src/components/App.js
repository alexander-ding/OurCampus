import React, { Suspense } from "react";
import { hot } from "react-hot-loader/root";
import { Route, Switch } from "react-router-dom";
import { compose } from "redux";

/**
 * The main app, including the primary router and support
 * for lazy loading (Suspense) and optional DevTools
 */
const App = () => (
  <Suspense fallback={<div>Loading</div>}>
    {/** Primary routing */}
    <Switch>
      <Route path='/'>home</Route>
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