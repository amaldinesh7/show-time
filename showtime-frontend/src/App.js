import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import MainNavigation from "./components/shared/Navigation/MainNavigation";
import Movies from "./pages/Movies";

import './App.css';

const App = () => {
  return (
    <Router>
      <MainNavigation/>
      <main>
        <Switch>
          <Route path="/" exact>
            <Movies />
          </Route>
        </Switch>
      </main>
    </Router>

  );
}

export default App;
