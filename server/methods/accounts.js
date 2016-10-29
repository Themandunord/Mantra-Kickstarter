import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import S from 'string'

export default function () {

  /**
   * BE AWARE OF PROFILE IN THE USER COLLECTION
   */
  Accounts.onCreateUser(function (options, user) {
    /**
     *  Find all users with the same username.
     *  Put the number at the last string of the username to make the user unique.
     */
    let username = S(options.firstName.toLowerCase()).latinise().s.replace(/\s+/g, '') + S(options.lastName.toLowerCase()).latinise().s.replace(/\s+/g, '');
    const pattern = new RegExp(`^${username}`);
    const count = Meteor.users.find({'username': pattern}).count();
    user.username = username + ((count > 0)? '.' + count : '');

    // Custom data.
    // There are not auto publish by meteor
    user.data = {};

    // Returns the user object
    return user;
  });

  Meteor.methods({
    'account_creation.checkEmailExist'(email) {
      const _email = email.toLowerCase();
      return Meteor.users.find({"emails.address": _email}, {limit: 1}).count() > 0

      //return Accounts.findUserByEmail(email);
    },
    'account.sendVerificationEmail'(){
      if (this.userId) {
        Accounts.sendVerificationEmail(this.userId);
        console.log('Email sended ' + Meteor.user().emails[0].address)
      }
    },
    'deleteUser'(){
      if(this.userId){
        const userId = this.userId;
        console.log('Remove user ' + userId);
        Meteor.users.remove({_id : this.userId})
      }
    }
  });
}
