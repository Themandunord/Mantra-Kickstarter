import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'account_creation.checkEmailExist'(email) {
      const _email = email.toLowerCase();
      return Meteor.users.find({"emails.address": _email}, {limit: 1}).count() > 0

      //return Accounts.findUserByEmail(email);
    },
    'accounts.sendVerificationEmail'(){
      if (this.userId) {
        Accounts.sendVerificationEmail(this.userId);
        console.log('Email sended ' + Meteor.user().emails[0].address)
      }
    },
    'accounts.sendResetPasswordLink'(email) {
      check(email, String);
      const userId = Accounts.findUserByEmail(email);
      // Demo the latency compensation (Delete this in production)
      //Meteor._sleepForMs(500);
      if (!userId) {
        throw new Meteor.Error(
          'sendResetPasswordLink.RESET_PASSWORD_ERROR',
          `User account with the address: ${email} not found. Please try again.`,
          'no user found'
        );
      } else if (userId) {
        return Accounts.sendResetPasswordEmail(userId);
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
