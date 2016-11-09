/**
 * Created by Remy on 09/11/2016.
 */

import { SSR } from 'meteor/meteorhacks:ssr';
import S from 'string'

export default function(){
    const settings = Meteor.settings.smtp;

    // const smtp = {
    //     username: settings.username,   // eg: server@gentlenode.com
    //     password: settings.password,   // eg: 3eeP1gtizk5eziohfervU
    //     server:   settings.server,  // eg: mail.gandi.net
    //     port: settings.port
    // }

    SSR.compileTemplate( 'email_mdp', Assets.getText( 'emails/email_mdp.html' ) );
    SSR.compileTemplate( 'email_confirm', Assets.getText( 'emails/email_confirm.html' ) );

    Accounts.urls.resetPassword = function(token) {
        return Meteor.absoluteUrl('reset-password/' + token);
    };

    Accounts.urls.verifyEmail = function(token) {
        return Meteor.absoluteUrl('verify-email/' + token);
    };

    Accounts.emailTemplates.siteName = "Picturals.com"
    Accounts.emailTemplates.from = "no-reply@picturals.com";
    Accounts.emailTemplates.resetPassword.subject = function(user){
        return "Reinitialisation de votre mot de passe Picturals";
    }

    Accounts.emailTemplates.resetPassword.html = function (user, url) {
        const emailData = {
            url : url,
            email : user.emails[0].address
        }
        return SSR.render( 'email_mdp', emailData )
    }

    Accounts.emailTemplates.verifyEmail.html = function (user, url) {
        const emailData = {
            url : url,
            email : user.emails[0].address
        }
        return SSR.render( 'email_confirm', emailData )
    }

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
        user.data = {
            firstName : options.firstName,
            lastName: options.lastName
        };

        // Returns the user object
        return user;
    });


    //process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
}
