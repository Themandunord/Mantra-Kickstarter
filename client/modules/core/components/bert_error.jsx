import React from 'react';

class BertError extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){

  }

  render() {
    const {error} = this.props;
    if(error){
      Bert.alert(error,'danger');
    }

    return (
      <div>
      </div>
    );
  }
}

export default BertError;
