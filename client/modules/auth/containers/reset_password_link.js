import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ResetPasswordLink from '../components/reset_password_link.jsx';

export const composer = ({context, clearErrors}, onData) => {
  const { LocalState } = context();

  onData(null, {});

  const cleanup = () => {
    clearErrors('RESET_PASSWORD_ERROR');
  };

  return cleanup;
};

export const depsMapper = (context, actions) => ({
  clearErrors : actions.accounts.clearErrors,
  sendResetPasswordLink : actions.accounts.sendResetPasswordLink,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ResetPasswordLink);
