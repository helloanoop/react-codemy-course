import 'purecss/build/pure.css';
import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'mobx-react';

import {Router, browserHistory} from 'react-router';
import routes from './routes';
import stores from './stores';

import {Layout} from './components';

ReactDOM.render(
  <Provider contacts={stores.contacts}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>,
  document.getElementById('root')
);
