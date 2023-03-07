import React from 'react';
import loadable from '@loadable/component';
import {Redirect, Switch, Route} from 'react-router-dom';

const Main = loadable(() => import('../pages/Main/index'));
const First = loadable(() => import('../pages/First/index'));
// const Signup = loadable(() => import('../pages/Auth/Signup'));

const App = () => {
  return (
      <Switch>
          <Redirect exact path="/" to="/main"/>
          <Route path="/main" component={Main}/>
          <Route path="/first" component={First}/>
          {/*<Route path="/signup" component={Signup}/>*/}
      </Switch>
  )
}

export default App;
