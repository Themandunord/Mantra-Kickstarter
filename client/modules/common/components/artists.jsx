import React from 'react';

class Artists extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {users} = this.props;

    var usersNode = users.map((user) => {
      return (
          <p key={user._id}>{user.username}</p>
      );
    })

    return (
      <div>
        Artists
        {usersNode}
      </div>
    );
  }
}

export default Artists;
