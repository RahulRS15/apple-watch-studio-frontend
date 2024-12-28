import React from 'react';

const PriceDisplay = ({ price }) => {
  return (
    <div className="price-display">
      <img
        src={`${process.env.PUBLIC_URL}/images/price-updates.jpg`}
        alt="Selected Price"
        style={{ width: '600px', height: '400px' }}
      />
      <h2>Total Price: ${price}</h2>
    </div>
  );
};

export default PriceDisplay;
