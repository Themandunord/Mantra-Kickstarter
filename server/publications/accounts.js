import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('users.all', function () {
    return Meteor.users.find({} , {
      fields : {
        'username' : 1,
        'profile' : 1
      }
    }).limit(20);
  });

  Meteor.publish('users.one', function (userId) {
    return Meteor.users.find(userId, {
      fields : {
        'username' : 1,
        'profile' : 1
      }
    });
  });
}
