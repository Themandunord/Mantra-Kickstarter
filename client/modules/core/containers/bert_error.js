import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import BertError from '../components/bert_error.jsx';

export const composer = ({context, error}, onData) => {
  const {Meteor, Collections} = context();

  const { LocalState } = context();

  var _error = null;

  if(LocalState.get(error))
    _error = LocalState.get(error);

  onData(null, {error : _error});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(BertError);
