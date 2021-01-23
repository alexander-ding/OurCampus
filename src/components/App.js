import React, { Suspense } from "react";
import { hot } from "react-hot-loader/root";
import { Route, Switch } from "react-router-dom";
import { compose } from "redux";
import LandingPage from "./LandingPage";
import AuthIsLoaded from "./utils/AuthIsLoaded";
import PrivateRoute from "./utils/PrivateRoute";
import SplashScreen from "./utils/SplashScreen";

/**
 * The main app, including the primary router and support
 * for lazy loading (Suspense) and optional DevTools
 */
const App = () => (
  <Suspense fallback={<SplashScreen/>}>
    <AuthIsLoaded>
    {/** Primary routing */}
    <Switch>
      <Route path="/" exact><LandingPage/></Route>
      <PrivateRoute path="/App">Home</PrivateRoute>
      <PrivateRoute path="/NewUser">Setup Profile Here</PrivateRoute>
      <Route path="*">404</Route>
    </Switch>
    </AuthIsLoaded>
  </Suspense>
);

const enhance = compose(
  hot,
);

export default enhance(App);