import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import EnsureEmailVerified from '../components/ensure_email_verified.jsx';

export const composer = ({context}, onData) => {
    const {Meteor, browserHistory} = context();

    if (location.pathname !== "/verify-email" && Meteor.user() && !Meteor.user().emails[0].verified) {
        browserHistory.push('/verify-email')
    } else {
        onData(null, {});
    }
};

export const depsMapper = (context, actions) => ({
    context: () => context
});

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(EnsureEmailVerified);
