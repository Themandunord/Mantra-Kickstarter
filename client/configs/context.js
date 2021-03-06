import * as Collections from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';
import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

export default function () {
  return {
    Meteor,
    Collections,
    LocalState: new ReactiveDict(),
    Tracker,
    browserHistory,
    Accounts,
  };
}
