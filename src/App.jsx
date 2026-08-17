import React, { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <div className="landing-content">
            <div className="landing-left">
              <h1>Welcome To<br />Paradise Nursery</h1>
              <div className="divider"></div>
              <p className="subtitle">Where Green Meets Serenity</p>
              <button className="get-started-btn" onClick={handleGetStartedClick}>
                Get Started
              </button>
            </div>
            <div className="landing-right">
              <AboutUs />
            </div>
          </div>
        </div>
      ) : (
        <ProductList onHomeClick={() => setShowProductList(false)} />
      )}
    </div>
  );
}

export default App;