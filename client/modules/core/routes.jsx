import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'react-mounter';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

/* Layouts */
import Default_Layout from '/client/modules/layout/containers/default_layout';
import OnePageLayout from '/client/modules/layout/containers/one_page_layout';

/* Containers */
import Test from './containers/test';
import SignUp from '/client/modules/auth/containers/sign_up';

export default function (injectDeps, {LocalState}) {
  const Default_LayoutCtx = injectDeps(Default_Layout);
  const OnePageLayoutCtx = injectDeps(OnePageLayout);

  ReactDOM.render(
      <Router history={browserHistory}>
        <Route path="/" component={OnePageLayoutCtx}>
          <IndexRoute component={SignUp}/>
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
