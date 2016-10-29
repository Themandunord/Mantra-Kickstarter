import React from 'react';

class OnePageLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <h1>One Page Layout</h1>
          {this.props.children}
        </div>
    );
  }
}

export default OnePageLayout;
