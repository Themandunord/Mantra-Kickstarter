import React from 'react';

import Header from '/client/modules/layout/containers/header';

class DefaultLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    {this.props.children}
                </div>
            </div>

        );
    }
}

export default DefaultLayout;
