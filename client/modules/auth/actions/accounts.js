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

            Meteor.call('account.sendVerificationEmail', (err) => {
                if (err && err.reason) {
                    return LocalState.set('SIGNUP_ERROR', err.reason);
                }
                return browserHistory.push('/');
            });
        });
    },

    clearErrors({LocalState}, errorState) {
        return LocalState.set(errorState, null);
    }
}
