import { createBrowserHistory } from 'history';
import React from 'react'
import useStore from '../store';
const Authority = ({ children }) => {

  const history = createBrowserHistory();

  const test = useStore(state => state.test)
  console.log(test);
  if (!sessionStorage.getItem('token')) {
    history.push('/login');
  }
  return <>{children}</>;
};

export default Authority;
