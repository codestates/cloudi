import React, { useEffect } from 'react';
import axios from 'axios';
import GlobalStyle from './GlobalStyle';
import Header from './modals/Header';
import Main from './pages/Main';
import Customize from './pages/Customize';
import Order from './pages/Order';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userinfoSelector } from './app/modules/hooks';
import { insertAllStands } from './app/modules/stand';
import { insertAllSticks } from './app/modules/stick';
import Quiz from './pages/Quiz';
import SideBar from './modals/SideBar';
import Incense from './pages/Incense';

const App = () => {
  const dispatch = useDispatch();
  const userinfo = useSelector(userinfoSelector);
  const didMount = () => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');
    // 카카오 구글 두개 나눠야함
    if (authorizationCode) {
      // axios({
      //   method: 'POST',
      //   url: 'http://localhost:5000/user/kakao',
      //   data: { orders: null, code: authorizationCode },
      // }).then(res => {
      //   console.log('Kakao Login OK', res.data.userEmail);
      // })
      // .catch(err => console.log('Kakao Login', err));

      axios({
        method: 'POST',
        url: 'http://localhost:8000/user/google',
        data: { orders: null, code: authorizationCode }
      }).then(res => {
        console.log('Google Login OK', res.data.userEmail);
      })
        .catch(err => console.log('Google Login', err));
    }
  };

  useEffect(() => {
    didMount();
    axios({
      method: 'GET',
      url: 'http://localhost:8000/auth',
      headers: { Authorization: userinfo.userinfo.token }
    }).then(res => {
      dispatch(insertAllStands(res.data.orders.stands));
      dispatch(insertAllSticks(res.data.orders.sticks));
    }).catch(err => console.log(err.response.data));
  }, [dispatch, userinfo.userinfo.token]);

  return (
    <>
      <GlobalStyle />
      <SideBar />
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
        <Route path='/incense'>
          <Incense />
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
