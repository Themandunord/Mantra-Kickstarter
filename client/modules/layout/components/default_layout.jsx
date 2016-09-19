import React from 'react';

class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Layout</h1>
        {this.props.children}
      </div>
    );
  }
}

export default DefaultLayout;
