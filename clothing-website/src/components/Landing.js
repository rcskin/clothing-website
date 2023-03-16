import React from "react";
import backgroundImage from "../images/clothing-background.jpg";

// create landing page component
function LandingPage() {
 

  return (
    <div className="LandingPage" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="LandingPage-heading">
        <div className="LandingPage-heading-content">
          <h2>About Us</h2>
          <p>
            Hey there! This is our clothing shop that specialises in the latest
            trends mixed with classic looks.
          </p>
          <p>
            Our aim is to provide our customers with stylish clothing that gives
            them confidence!
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
