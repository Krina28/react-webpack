import "babel-polyfill";
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Routers from './routes';

ReactDOM.render(
  <BrowserRouter>
    <Routers />
  </BrowserRouter>,
  document.getElementById('app'));
