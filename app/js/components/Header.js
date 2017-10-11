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
          <a href="https://www.collage.co/" target="_blank">
            <img src="./images/logo-nav@2x.png" />
          </a>
        </div>

      </header>
    );
  }

}

export default Header;
