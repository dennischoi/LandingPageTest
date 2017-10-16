'use strict';

import React from 'react';


class Clients extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

        <div className="landing__section2">
          <div className="clients">
          	<div className="clients__blurb">
          		<span>A few great companies who've moved to our <br/>HR platform in the cloud</span>
          	</div>

          	<ul>
          		<li>
          			<img className="clients__brand" src="https://www.collage.co/wp-content/themes/collage/library/img/lp/logo-wealthsimple@2x.png" />
          		</li>
          		<li>
          			<img className="clients__brand" src="https://www.collage.co/wp-content/themes/collage/library/img/lp/logo-pur@2x.png" />
          		</li>
          		<li>
          			<img className="clients__brand" src="https://www.collage.co/wp-content/themes/collage/library/img/lp/logo-talentminded@2x.png" />
          		</li>
          		<li>
          			<img className="clients__brand" src="https://www.collage.co/wp-content/themes/collage/library/img/lp/logo-narcity-media@2x.png" />
          		</li>
          		<li>
          			<img className="clients__brand" src="https://www.collage.co/wp-content/themes/collage/library/img/lp/logo-sweet-tooth@2x.png" />
          		</li>
          	</ul>
          </div>
        </div>
    );
  }

}

export default Clients;
