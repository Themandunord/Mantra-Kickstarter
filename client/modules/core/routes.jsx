import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'react-mounter';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Test from './containers/test';

export default function (injectDeps, {LocalState}) {
  const MainLayoutCtx = injectDeps(Test);

  ReactDOM.render(
      <Router history={browserHistory}>
        <Route path="/test" component={MainLayoutCtx}>
          <IndexRoute component={Test}/>
        </Route>
      </Router>
      ,
      getRootNode('root')
  );
}

function getRootNode(rootId) {
    const rootNode = document.getElementById(rootId);

    if (rootNode) {
        return rootNode;
    }

    const rootNodeHtml = '<div id="' + rootId + '"></div>';
    const body = document.getElementsByTagName('body')[0];
    body.insertAdjacentHTML('beforeend', rootNodeHtml);

    return document.getElementById(rootId);
}
