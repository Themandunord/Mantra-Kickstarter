import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Artists from '../components/artists.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if(Meteor.subscribe('users.all').ready()){
    const users = Meteor.users.find().fetch();

    console.log(users)

    onData(null, {
      users : users
    })
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Artists);
