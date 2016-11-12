import React from 'react';
import { Link } from 'react-router';

class HeaderWidget extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="u-pull-right">
        <Link className="button" to="/sign-in">Search</Link>
        <Link className="button" to="sign-up">Notifications</Link>
        <Link className="button" to="#">User</Link>
      </div>
    );
  }
}

export default HeaderWidget;
