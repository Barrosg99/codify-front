import React from 'react';
import { Reset } from 'styled-reset';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import {
  Home, SignIn, SignUp, Course, Profile,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Reset />
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/cadastro" exact component={SignUp} />
        <Route path="/home" exact component={Home} />
        <Route path="/cursos/:id" exact component={Course} />
        <Route path="/perfil" exact component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;