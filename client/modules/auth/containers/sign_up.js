import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import SignUp from '../components/sign_up.jsx';

export const composer = ({context}, onData) => {
  const { LocalState } = context();
  const error = LocalState.get('SIGNUP_ERROR');

  console.log(error)

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  clearErros : actions.accounts.clearErrors,
  signup: actions.accounts.signup,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SignUp);
