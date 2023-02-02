import React, { useState, useEffect } from "react";
import "./Pricing.css";

const PricingPage = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      {width > 700 ? (
        <div className="pricing-container">
          <h2 className="pricing-title">Our Pricing</h2>
          <div className="pricing-card-container">
            <div className="pricing-card">
              <h3 className="pricing-card-title">Basic</h3>
              <div className="pricing-card-price">FREE</div>
              <ul className="pricing-card-features">
                <li>✔️ You're still awesome!</li>
                <li>✔️ Enjoy!</li>
                <li>✔️ ProChat logo</li>
                <br></br>
              </ul>
              <button
                className="pricing-card-button"
                onClick={() => (window.location.href = "/download")}
              >
                Download
              </button>
            </div>
            <div className="pricing-card">
              {true && (
                <div className="in-progress-overlay">
                  <div className="in-progress-message">In progress</div>
                </div>
              )}
              <div className="content">
                <h3 className="pricing-card-title">Premium</h3>
                <div className="pricing-card-price">$XX.XX</div>
                <ul className="pricing-card-features">
                  <li>✔️ You're AMAZING!</li>
                  <li>✔️ No ProChat logo</li>
                  <li>✔️ Feature requests</li>
                  <br></br>
                </ul>
                <button className="pricing-card-button-buy">Buy</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="pricing-container">
          <br />
          <h2 className="pricing-title">Our Pricing</h2>
          <div className="pricing-card-container-m">
            <div className="pricing-card-m">
              <h3 className="pricing-card-title">Basic</h3>
              <div className="pricing-card-price">FREE</div>
              <ul className="pricing-card-features">
                <li>You're still awesome!</li>
                <li>Enjoy!</li>
                <li>ProChat logo ✔️</li>
                <br></br>
              </ul>
              <button
                className="pricing-card-button"
                onClick={() => (window.location.href = "/download")}
              >
                Download
              </button>
            </div>
            <br />
            <div className="pricing-card-m">
              {true && (
                <div className="in-progress-overlay">
                  <div className="in-progress-message">In progress</div>
                </div>
              )}
              <div className="content">
                <h3 className="pricing-card-title">Premium</h3>
                <div className="pricing-card-price">$XX.XX</div>
                <ul className="pricing-card-features">
                  <li>✔️ You're AMAZING!</li>
                  <li>✔️ No ProChat logo</li>
                  <li>✔️ Feature requests</li>
                  <br></br>
                </ul>
                <button className="pricing-card-button-buy">Buy</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingPage;
