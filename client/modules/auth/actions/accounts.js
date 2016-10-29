export default {
    signup({Meteor, LocalState, browserHistory, Accounts}, firstName, lastName, email, password, passwordConfirm) {
        if (!email) {
            return LocalState.set('SIGNUP_ERROR', 'email is required');
        }
        if (!firstName) {
            return LocalState.set('SIGNUP_ERROR', 'firstname is required');
        }
        if (!lastName) {
            return LocalState.set('SIGNUP_ERROR', 'lastname is required');
        }
        if (!password) {
            return LocalState.set('SIGNUP_ERROR', 'password1 is required');
        }
        if (!passwordConfirm) {
            return LocalState.set('SIGNUP_ERROR', 'password2 is required');
        }
        if (password !== passwordConfirm) {
            return LocalState.set('SIGNUP_ERROR', 'password are required to match');
        }

        LocalState.set('SIGNUP_ERROR', null);

        const options = {email, password, firstName, lastName};
        Accounts.createUser(options, (err) => {
            if (err && err.reason) {
                return LocalState.set('SIGNUP_ERROR', err.reason);
            }

            Meteor.call('emails.sendAccountVerificationLink', (err) => {
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
