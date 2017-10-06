'use strict';

import React from 'react';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div className="header__logo">
          <img src="./images/logo-nav@2x.png" />
        </div>

      </header>
    );
  }

}

export default Header;
