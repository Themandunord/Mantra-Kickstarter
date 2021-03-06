import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import SignUp from '../components/sign_up.jsx';

export const composer = ({context, clearErrors }, onData) => {
  const { LocalState } = context();

  onData(null, {});

  const cleanup = () => {
    clearErrors('SIGNUP_ERROR');
  };

  return cleanup;
};

export const depsMapper = (context, actions) => ({
  clearErrors : actions.accounts.clearErrors,
  signup: actions.accounts.signup,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SignUp);
