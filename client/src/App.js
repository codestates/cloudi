import React from 'react';
import GlobalStyle from './GlobalStyle';
import Header from './modals/Header';
import Main from './pages/Main';
import { Route, Switch } from 'react-router-dom';
import QuizPage from './quiz/QuizPage';
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
          <QuizPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
