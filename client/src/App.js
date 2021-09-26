import React from 'react';
import GlobalStyle from './GlobalStyle';
import Header from './modals/Header';
import Main from './pages/Main';
import Customize from './pages/Costomize';
import Order from './pages/Order';
import { Route, Switch } from 'react-router-dom';
import Quiz from './pages/Quiz';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/quiz'>
          <Quiz />
        </Route>
        <Route path='/customize'>
          <Customize />
        </Route>
        <Route path='/order'>
          <Order />
        </Route>
        <Route path='/'>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <div><center>페이지를 찾을 수 없습니다.</center></div>
        </Route>
      </Switch>
    </>
  );
};

export default App;
