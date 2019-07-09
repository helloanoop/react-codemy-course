import React from 'react';
import {Route, Redirect, IndexRoute} from 'react-router';
import com from './components';

const routes =
  <Route>
    <Redirect from='/' to='/contacts' />
    <Route path='/contacts' component={com.Layout}>
      <IndexRoute component={com.Collection} />
      <Route path=':contactId' component={com.Show} />
    </Route>
  </Route>

export default routes;

