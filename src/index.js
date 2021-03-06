import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory } from 'react-router';
import rootRoute from 'pages/routes.js';
import 'general.scss';

render(
  <Router history={browserHistory} routes={rootRoute} />,
  document.getElementById('root')
);

