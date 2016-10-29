import React from 'react';
import {Form, Input, Button} from 'react-validation/lib/build/validation.rc';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>SignUp</h3>
                <Form>
                    <Input errorClassName='is-invalid-input' type="text" containerClassName='' value='' name='firstname'
                           validations={['required']}/>
                </Form>
            </div>
        );
    }
}

export default SignUp;
