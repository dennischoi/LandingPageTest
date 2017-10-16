'use strict';

import React from 'react';

class Footer extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>

        <div className="quote">


            <div className="block -orange edge--top">
              <div className="footer__findMore">
                <div>
                  <div>
                    <h3 className="">Seamlessly incorporate our HR platform to save you <br/> time, money and company risk </h3>
                  </div>
                  <div className="footer__findMore-btn">
                    <a target="blank_" href="https://www.collage.co/request/">
                      Explore the Future of HR
                    </a>
                  </div>
                </div>
              </div>
              <div className="footer__terms">
                <div className="footer__terms-logo">
                  <a href="https://www.collage.co/" target="_blank">
                    <img src="./images/logo-nav@2x.png" />
                  </a>
                </div>

                <div className="footer__terms-privacy">
                  <a href="https://www.collage.co/">
                    Collage © 2017
                  </a>
                  <a href="https://www.collage.co/privacy-policy/">
                    Privacy Policy
                  </a>
                  <a href="https://www.collage.co/service-agreement/">
                    Services Agreement
                  </a>
                </div>

              </div>
            </div>

          </div>

      </footer>
    );
  }

}

export default Footer;
