import React from 'react';

import BertError from '/client/modules/core/containers/bert_error'

class VerifyEmail extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event){
    event.preventDefault();
    const {resendVerificationEmail} = this.props;
    resendVerificationEmail();
  }

  render() {
    return (
      <div>
        <BertError error="VERIFY_EMAIL_ERROR"/>
        <button onClick={this.onClick}>Click to send again</button>
      </div>
    );
  }
}

export default VerifyEmail;
