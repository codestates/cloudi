import React from 'react';
import GlobalStyle from './GlobalStyle';
import Header from './modals/Header';
import QuizPage from './quiz/QuizPage';
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <QuizPage />
    </>
  );
};

export default App;
