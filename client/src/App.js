import React from 'react';
import GlobalStyle from './GlobalStyle';
import Header from './modals/Header';
import Main from './pages/Main';
import Customize from './pages/Costomize';
import { Route, Switch } from 'react-router-dom';
import Quiz from './quiz/Quiz';
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/customize">
          <Customize />
        </Route>
      </Switch>
    </>
  );
};

export default App;
