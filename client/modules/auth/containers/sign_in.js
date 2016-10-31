import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import SignIn from '../components/sign_in.jsx';

export const composer = ({context, clearErrors }, onData) => {
  const { LocalState } = context();

  onData(null, {});

  const cleanup = () => {
    clearErrors('SIGNIN_ERROR');
  };

  return cleanup;
};

export const depsMapper = (context, actions) => ({
  clearErrors : actions.accounts.clearErrors,
  signin: actions.accounts.signin,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SignIn);
