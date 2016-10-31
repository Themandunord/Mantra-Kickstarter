import React from 'react';
import {Form, Input, Button} from 'react-validation/lib/build/validation.rc';

import BertError from '/client/modules/core/containers/bert_error';

class ResetPassword extends React.Component {
  handleSubmit = event => {
      event.preventDefault();
      const {resetPassword, token} = this.props;

      const password = this.form.components.password.state.value;
      const passwordConfirm = this.form.components.passwordConfirm.state.value;

      resetPassword(token, password,passwordConfirm)
  }

  render() {
    const _this = this;

    return (
        <div>
            <BertError error="RESET_PASSWORD_ERROR"/>
            <h3>Reset password Link</h3>
            <Form onSubmit={this.handleSubmit} ref={f => _this.form = f}>
                <Input errorClassName='is-invalid-input' containerClassName='' value='' name='password'
                       type='password'
                       placeholder="Mot de passe"
                       validations={['required', 'password']}/>
                <Input errorClassName='is-invalid-input' containerClassName='' value='' name='passwordConfirm'
                       type='password'
                       placeholder="Confirmation du mot de passe"
                       validations={['required', 'password']}/>
                <Button type="submit">Envoyer</Button>
            </Form>
        </div>
    );
  }
}

export default ResetPassword;
