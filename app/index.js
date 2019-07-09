import 'purecss/build/pure.css';
import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import {Router, browserHistory} from 'react-router';
import routes from './routes';

import {Layout} from './components';

ReactDOM.render(<Router routes={routes} history={browserHistory}/>,
  document.getElementById('root')
);
