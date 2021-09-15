import React from 'react';
import GlobalStyle from './GlobalStyle';
import Header from './modals/Header';
import Main from './pages/Main';
import Footer from './modals/Footer';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
