import React from 'react';

class BertSuccess extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {success} = this.props;
    if(success){
      Bert.alert(success,'success');
    }

    return (
      <div>
      </div>
    );
  }
}

export default BertSuccess;
