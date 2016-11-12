import React from 'react';

class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

export default DefaultLayout;
