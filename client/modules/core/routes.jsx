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
import SignIn from '/client/modules/auth/containers/sign_in';
import ResetPasswordLink from '/client/modules/auth/containers/reset_password_link';
import ResetPassword from '/client/modules/auth/containers/reset_password';
import VerifyEmail from '/client/modules/auth/containers/verify_email';

import Artists from '/client/modules/common/containers/artists';

export default function (injectDeps, {LocalState}) {
    const Default_LayoutCtx = injectDeps(Default_Layout);
    const OnePageLayoutCtx = injectDeps(OnePageLayout);

    ReactDOM.render(
        <Router history={browserHistory}>
            <Route path="/" component={Default_LayoutCtx}>
                <Route path="sign-up" component={SignUp}/>
                <Route path="sign-in" component={SignIn}/>
                <Route path="reset-password-link" component={ResetPasswordLink}/>
                <Route path="reset-password/:token" component={ResetPassword}/>
                <Route path="verify-email" component={VerifyEmail}/>
                <Route path="verify-email/:token" component={VerifyEmail}/>
                <IndexRoute component={Artists}/>
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
