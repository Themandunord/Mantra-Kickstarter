import React from 'react';
import {Form, Input, Button} from 'react-validation/lib/build/validation.rc';

import BertError from '/client/modules/core/containers/bert_error'
import BertSuccess from '/client/modules/core/containers/bert_success'

class SignIn extends React.Component {
  constructor(props) {
      super(props);

      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = event => {
      event.preventDefault();
      const {signin} = this.props;

      const email = this.form.components.email.state.value;
      const password = this.form.components.password.state.value;

      signin(email, password)
  }

  render() {
      const _this = this;

      return (
          <div>
              <BertError error="SIGNIN_ERROR"/>
              <h3>SignIn</h3>
              <Form onSubmit={this.handleSubmit} ref={f => _this.form = f}>
                  <Input errorClassName='is-invalid-input' containerClassName='' value='' name='email'
                         type='email'
                         placeholder="Adresse de messagerie"
                         validations={['required', 'email']}/>
                  <Input errorClassName='is-invalid-input' containerClassName='' value='' name='password'
                         type='password'
                         placeholder="Mot de passe"
                         validations={['required']}/>
                  <Button type="submit">Se connecter</Button>
              </Form>
          </div>
      );
  }
}

export default SignIn;
