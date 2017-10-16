'use strict';

import React from 'react';

class Extra extends React.Component {

  constructor(props) {
    super(props);
  }

  // handleEnter() {

  //   var b = document.querySelector(".landing__section3"),
  //   e = [].slice.call(b.querySelectorAll(".e__moreAnchor img"));
  //   e.forEach(function (a,b) {
    	
	 //  a.addEventListener("mouseenter", function (b) {
	 //    var c = a.getAttribute("data-src");
	 //    var d = a.getAttribute("src");
	 //    a.src = c;

	 //    console.log(d)
	 //  })



  //   })
    
  // }


  render() {
    return (

        <div className="landing__section3">

            <div className="extra__section1">
                <h2>
                    All your HR needs handled under one platform.
                </h2>
                <p>
                    Let HR administration be simple. Revolutionized the archaic HR process into a streamlined software to eliminate inconsistency and increase productivity. Offer better employee experience/programs, integrate new hires, and manage your team under one roof.
                </p>
            </div>

            <div className="extra__section2">

            	<div className="extra__presentation">
            		<img src="https://www.collage.co/wp-content/themes/collage/library/img//features/employees/employee-records-centralize-data-8col@2x.png"/>
            	</div>

            	<div className="extra__info">
            		<div className="e__container">
    	        		<div className="e__title">
    	        			<h1>Stay Connected</h1>
    	        		</div>
            		
            			<div className="e__details">
            				<p>
            					<strong>Centralize and Optimize any and all your documents</strong> that regards your employees. 
            					Collage will help you track departments, interactions between them and store any data/documents concerning your employees.
            				</p>
            			</div>

            			<div className="e__more">
            				<a className="e__moreAnchor" target="blank_" href="https://www.collage.co">
            					<img src="./images/icon_computer.svg" alt="Collage - HR Network" />
            					<p>Digital Platform</p>
            				</a>

            				<a className="e__moreAnchor" rel="nofollow">
            					<img src="./images/icon_cloud.svg" />
            					<p>Cloud Storage</p>
            				</a>

            				<a className="e__moreAnchor" rel="nofollow">
            					<img src="./images/icon_chart.svg" />
            					<p>Organized Data</p>
            				</a>

            				<a className="e__moreAnchor" rel="nofollow">
            					<img src="./images/icon_time.svg" />
            					<p>Save Time</p>
            				</a>

            				<a className="e__moreAnchor" target="blank_" href="https://www.collage.co/pricing/">
            					<img src="./images/icon_money.svg" />
            					<p>Save Money</p>
            				</a>

            				<a className="e__moreAnchor" target="blank_" href="http://support.collage.co/">
            					<img src="./images/icon_more.svg" />
            					<p>More Features</p>
            				</a>
            			</div>
            		</div>

            	</div>
            </div>
        </div>
    );
  }

}

export default Extra;
