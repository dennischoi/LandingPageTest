'use strict';

import React from 'react';

import Header from './Header';

class Landing extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="landing__main">
        test
        <div className="landing__section4">
          <div className="landing__bgLeft">
          </div>
          <div className="landing__bgMiddle">
            <div className="testimonial">
              <span className="testimonial__text">
                "When it comes to benefits, we need a solution that's as modern,
                fast-moving and integrated as our own team. 
                Collage will be the future of HR in Canada!"
              </span>
              <div className="testimonial__entry">
                <img src="./images/wealthsimple-Nora-Jenkins-avatar@2x.png" />
                <div className="testimonial__entryDetail">
                  <span className="testimonial__entryName">Nora Jenkins<br/></span>
                  <span className="testimonial__entryTitle"> Director of People Operations, Wealthsimple</span>
                </div>
              </div>
            </div>
          </div>
          <div className="landing__bgRight">
          </div>
          
        </div>

      </section>
    );
  }

}

export default Landing;
