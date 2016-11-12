import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import VerifyEmail from '../components/verify_email.jsx';

export const composer = ({context, verifyEmail, clearErrors, params}, onData) => {
  const {token} = params;

  if(token){
    verifyEmail(token);
  }
  else{
    onData(null, {});
  }

  const cleanup = () => {
    clearErrors('VERIFY_EMAIL_ERROR');
  };

  return cleanup;
};

export const depsMapper = (context, actions) => ({
  clearErrors : actions.accounts.clearErrors,
  verifyEmail : actions.accounts.verifyEmail,
  resendVerificationEmail: actions.accounts.resendVerificationEmail,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(VerifyEmail);
