import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import Registration from './Components/Registration/Registration';
import Test from './Components/Test/Test';
import { store } from './store/store';

export const PATH = {
  PROFILE: '/profile',
  LOGIN: '/login',
  TEST: '/test',
  // add paths
}


function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <HashRouter>
          <Header />

          <div>

            <Routes>
              <Route path='/' element={<Navigate to={PATH.PROFILE} />} />

              <Route path={PATH.PROFILE} element={<Profile />} />
              <Route path={PATH.LOGIN} element={<Login />} />
              <Route path={PATH.LOGIN} element={<Registration />} />
              <Route path={PATH.TEST} element={<Test />} />

              <Route path="/404" element={<h1 style={{ textAlign: 'center' }} >404: PAGE NOT FOUND</h1>} />
              <Route path="/*" element={<Navigate to='404' />} />

            </Routes>
          </div>
        </HashRouter>
      </div>
    </Provider>
  );
}

export default App;
