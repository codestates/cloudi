import React, { useEffect } from 'react';
import axios from 'axios';
import GlobalStyle from './GlobalStyle';
import Header from './modals/Header';
import Main from './pages/Main';
import Customize from './pages/Customize';
import Order from './pages/Order';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { standsSelector, sticksSelector, userinfoSelector } from './app/modules/hooks';
import { insertAllStands } from './app/modules/stand';
import { insertAllSticks } from './app/modules/stick';
import Quiz from './pages/Quiz';
import SideBar from './modals/SideBar';
import Incense from './pages/Incense';
import { insertUserinfo } from '../src/app/modules/userinfo';

const App = () => {
  const dispatch = useDispatch();
  const userinfo = useSelector(userinfoSelector);
  const stick = useSelector(sticksSelector);
  const stand = useSelector(standsSelector);
  const orders = { ...stick, ...stand };

  const didMount = () => {
    const url = new URL(window.location.href);
    const google = url.searchParams.get('scope');
    const authorizationCode = url.searchParams.get('code');

    if (authorizationCode) {
      if (google) {
        axios({
          method: 'POST',
          url: 'http://localhost:8000/user/google',
          data: { orders, code: authorizationCode }
        })
          .then((res) => {
            console.log('Google Login OK', res.data.userEmail);
            dispatch(
              insertUserinfo({
                id: res.data.id,
                kakaoId: res.data.kakaoId,
                googleId: res.data.googldId,
                isAdmin: res.data.isAdmin,
                userEmail: res.data.userEmail,
                userName: res.data.userName,
                token: res.data.token
              })
            );
          })
          .catch((err) => console.log('Google Login', err));
      } else {
        // * kakao
        axios({
          method: 'POST',
          url: 'http://localhost:8000/user/kakao',
          data: { orders, code: authorizationCode },
        }).then(res => {
          console.log('Kakao Login OK', res.data.token);
          dispatch(
            insertUserinfo({
              id: res.data.id,
              kakaoId: res.data.kakaoId,
              googleId: res.data.googldId,
              isAdmin: res.data.isAdmin,
              userEmail: res.data.userEmail,
              userName: res.data.userName,
              token: res.data.token
            })
          );
        })
        .catch(err => console.log('Kakao Login', err));
      }
    }
  };
  useEffect(() => {
    didMount();
    axios({
      method: 'GET',
      url: 'http://localhost:8000/auth',
      headers: { Authorization: userinfo.userinfo.token }
    })
      .then((res) => {
        dispatch(insertAllStands(res.data.orders.stands));
        dispatch(insertAllSticks(res.data.orders.sticks));
      })
      .catch((err) => console.log(err));
  }, []);

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
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div>
            <center>페이지를 찾을 수 없습니다.</center>
          </div>
        </Route>
      </Switch>
    </>
  );
};

export default App;
