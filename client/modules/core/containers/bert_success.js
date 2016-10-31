import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import BertSuccess from '../components/bert_success.jsx';

export const composer = ({context, success}, onData) => {
  const {Meteor, Collections} = context();

  const { LocalState } = context();

  var _success = null;

  if(LocalState.get(success))
    _success = LocalState.get(success);

  onData(null, {success : _success});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(BertSuccess);
