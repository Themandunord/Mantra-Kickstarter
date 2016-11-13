import React from 'react';

import Header from '/client/modules/layout/containers/header';
import EnsureEmailVerified from '/client/modules/auth/containers/ensure_email_verified';

class DefaultLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <EnsureEmailVerified>
                <Header />
                <div className="container">
                    {this.props.children}
                </div>
            </EnsureEmailVerified>

        );
    }
}

export default DefaultLayout;
