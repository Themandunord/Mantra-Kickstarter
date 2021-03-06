import React from 'react';

import HeaderWidget from '/client/modules/layout/containers/header_widget'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="two columns">
            <h2><strong>WebsiteTitle</strong></h2>
          </div>

          <div className="ten columns">
            <HeaderWidget />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
