import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ResetPassword from '../components/reset_password.jsx';

export const composer = ({context, clearErrors, params}, onData) => {
  const { LocalState } = context();
  const {token} = params;
  onData(null, {token});

  const cleanup = () => {
    clearErrors('RESET_PASSWORD_ERROR');
  };

  return cleanup;
};

export const depsMapper = (context, actions) => ({
  clearErrors : actions.accounts.clearErrors,
  resetPassword : actions.accounts.resetPassword,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ResetPassword);
