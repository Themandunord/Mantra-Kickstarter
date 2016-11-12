import React from 'react';

class Artists extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {users} = this.props;

    return (
      <div>
        Artists
      </div>
    );
  }
}

export default Artists;
