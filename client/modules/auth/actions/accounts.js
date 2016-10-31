export default {
    signup({Meteor, LocalState, browserHistory, Accounts}, firstName, lastName, email, password, passwordConfirm) {
        if (!email) {
            return LocalState.set('SIGNUP_ERROR', 'L\'adresse email est requise');
        }
        if (!firstName) {
            return LocalState.set('SIGNUP_ERROR', 'Le prénom est requis');
        }
        if (!lastName) {
            return LocalState.set('SIGNUP_ERROR', 'Le nom est requis');
        }
        if (!password) {
            return LocalState.set('SIGNUP_ERROR', 'Le mot de passe est requis');
        }
        if (!passwordConfirm) {
            return LocalState.set('SIGNUP_ERROR', 'La confirmation du mot de passe es requise');
        }
        if (password !== passwordConfirm) {
            return LocalState.set('SIGNUP_ERROR', 'Les mots de passe ne correspondent pas');
        }

        LocalState.set('SIGNUP_ERROR', null);

        const options = {email, password, firstName, lastName};
        Accounts.createUser(options, (err) => {
            if (err && err.reason) {
                return LocalState.set('SIGNUP_ERROR', err.reason);
            }

            Meteor.call('accounts.sendVerificationEmail', (err) => {
                if (err && err.reason) {
                    return LocalState.set('SIGNUP_ERROR', err.reason);
                }
                Bert.alert("Un mail de confirmation vous a été envoyé.");
                return browserHistory.push('/');
            });
        });
    },

    signin({Meteor, LocalState, browserHistory, Accounts}, email, password){
      if(!email || !password) {
        return LocalState.set('SIGNIN_ERROR', "L'email et le mot de passe sont requis");
      }
      LocalState.set('SIGNIN_ERROR', null);
      Meteor.loginWithPassword(email, password, (err) => {
        if(err && err.reason){
          LocalState.set('SIGNIN_ERROR', err.reason);
        }else {
          Bert.alert("Vous êtes connecté :)");
          browserHistory.push('/');
        }
      });
    },

    resendVerificationEmail({ Meteor, LocalState }) {
      Meteor.call('accounts.sendVerificationEmail', (err) => {
        if (err && err.reason) {
          return LocalState.set('RESEND_EMAIL_ERROR', err.reason);
        }
      });
      LocalState.set('RESEND_EMAIL_ERROR', null);
    },

    sendResetPasswordLink({ Meteor, LocalState, browserHistory }, email) {
      if (!email) {
        return LocalState.set('RESET_PASSWORD_ERROR', 'email address is required');
      }

      LocalState.set('RESET_PASSWORD_ERROR', null);

      Meteor.call('accounts.sendResetPasswordLink', email, (err) => {
        if (err && err.reason) {
          return LocalState.set('RESET_PASSWORD_ERROR', err.reason);
        }
        // TODO: return something to let user know email was sent
        return browserHistory.push('/');
      });
    },

    resetPassword({ Accounts, LocalState, browserHistory }, token, password, passwordConfirm) {
      if (!password || !passwordConfirm) {
        return LocalState.set('RESET_PASSWORD_ERROR', 'Both password fields are required');
      }
      if (password !== passwordConfirm) {
        return LocalState.set('RESET_PASSWORD_ERROR', 'Password are required to match');
      }
      if (!token) {
        return LocalState.set('RESET_PASSWORD_ERROR', 'token is required');
      }
      LocalState.set('RESET_PASSWORD_ERROR', null);

      Accounts.resetPassword(token, password, (err) => {
        // TODO: check( newPassword, String )
        // TODO: check( token, String )
        if (err && err.reason) {
          LocalState.set('RESET_PASSWORD_ERROR', err.reason);
        } else {
          // TODO: return something to let user know password was reset
          browserHistory.push('/');
        }
      });
    },

    clearErrors({LocalState}, errorState) {
        return LocalState.set(errorState, null);
    }
}
