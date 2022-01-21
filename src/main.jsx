import React from 'react'
import ReactDOM from 'react-dom'
import { renderRoutes } from 'react-router-config';
import routes from './router'
import { BrowserRouter } from 'react-router-dom'
import './style/reset.less'
import Authority from './components/Authority'
ReactDOM.render(
  <Authority>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Authority>,
  document.getElementById('root')
)
