import React from 'react';
import {Form, Input, Button} from 'react-validation/lib/build/validation.rc';

import BertError from '/client/modules/core/containers/bert_error'

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = event => {
        event.preventDefault();
        const {signup} = this.props;

        const email = this.form.components.email.state.value;
        const firstname = this.form.components.firstname.state.value;
        const lastname = this.form.components.lastname.state.value;
        const password = this.form.components.password.state.value;
        const passwordConfirm = this.form.components.passwordConfirm.state.value;

        signup(firstname, lastname, email, password, passwordConfirm)
    }

    render() {
        const _this = this;

        return (
            <div>
                <BertError error="SIGNUP_ERROR"/>
                <h3>SignUp</h3>
                <Form onSubmit={this.handleSubmit} ref={f => _this.form = f}>
                    <div className="row">
                        <div className="six columns">
                            <Input errorClassName='is-invalid-input' type="text" containerClassName='' value=''
                                   name='firstname'
                                   placeholder="Prénom"
                                   className="u-full-width"
                                   validations={['required','isName']}/>
                        </div>
                        <div className="six columns">
                            <Input errorClassName='is-invalid-input' type="text" containerClassName='' value=''
                                   name='lastname'
                                   placeholder="Nom"
                                   className="u-full-width"
                                   validations={['required','isName']}/>
                        </div>
                    </div>

                    <Input errorClassName='is-invalid-input' containerClassName='' value='' name='email'
                           type='email'
                           className="u-full-width"
                           placeholder="Adresse de messagerie"
                           validations={['required', 'email']}/>

                    <div className="row">
                        <div className="six columns">
                            <Input errorClassName='is-invalid-input' containerClassName=''
                                   value='' name='password'
                                   type='password'
                                   className="u-full-width"
                                   placeholder="Mot de passe"
                                   validations={['required', 'password']}/></div>
                        <div className="six columns">
                            <Input errorClassName='is-invalid-input' containerClassName='' value=''
                                   name='passwordConfirm'
                                   type='password'
                                   className="u-full-width"
                                   placeholder="Confirmation du mot de passe"
                                   validations={['required', 'password']}/>
                        </div>
                    </div>


                    <Button className="button-primary" type="submit"> S'enregistrer</Button>
                </Form>
            </div >
        );
    }
}

export default SignUp;
