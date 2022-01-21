import { createBrowserHistory } from 'history';
import React from 'react'
import cache from '@/utils/cache';
const Authority = ({ children }) => {
  const history = createBrowserHistory();
  if (!cache.getVal('token')) {
    history.push('/login');
  }
  return <>{children}</>;
};
export default Authority;
