import React from 'react';
import { Link } from 'react-router';

class OnePageLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <h1>One Page Layout</h1>
          <Link to="sign-in">Sign In </Link>
          <Link to="sign-up">Sign Up </Link>
          <Link to="reset-password-link">Reset Password Link </Link>
          {this.props.children}
        </div>
    );
  }
}

export default OnePageLayout;
