import React from 'react';
import {Link} from 'react-router';

class HeaderWidget extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {loggedIn} = this.props;

        let userDiv;

        if (loggedIn) {
            userDiv = (
                <Link className="button" to="#">User</Link>
            );
        } else {
            userDiv = (
                <div>
                    <Link className="button" to="/sign-in">Sign In</Link>
                    <Link className="button" to="/sign-up">Sign Up</Link>
                </div>
            )
        }

        return (
            <div className="u-pull-right">
                <Link className="button" to="#">Search</Link>
                <Link className="button" to="#">Notifications</Link>
                {userDiv}
            </div>
        );
    }
}

export default HeaderWidget;
