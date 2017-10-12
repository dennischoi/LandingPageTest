'use strict';

import React from 'react';


class Testimonial extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

        <div className="landing__section7">
          <div className="testimonial__bgLeft">
          </div>
          <div className="testimonial__bgMiddle">
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
          <div className="testimonial__bgRight">
          </div>  
        </div>
    );
  }

}

export default Testimonial;
