import React from 'react';
import {Form, Input, Button} from 'react-validation/lib/build/validation.rc';

import BertError from '/client/modules/core/containers/bert_error';

class ResetPasswordLink extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = event => {
        event.preventDefault();
        const {sendResetPasswordLink} = this.props;

        const email = this.form.components.email.state.value;

        sendResetPasswordLink(email)
    }

    render() {
        const _this = this;

        return (
            <div>
                <BertError error="RESET_PASSWORD_ERROR"/>
                <h3>Reset password Link</h3>
                <Form onSubmit={this.handleSubmit} ref={f => _this.form = f}>
                    <Input errorClassName='is-invalid-input' containerClassName='' value='' name='email'
                           type='email'
                           placeholder="Adresse de messagerie"
                           validations={['required', 'email']}/>
                    <Button type="submit">Envoyer</Button>
                </Form>
            </div>
        );
    }
}

export default ResetPasswordLink;
