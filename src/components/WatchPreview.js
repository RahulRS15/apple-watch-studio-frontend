import React from 'react';

const WatchPreview = ({ selectedCase, selectedBand }) => {
  return (
    <div className="watch-preview">
      <img src={`${process.env.PUBLIC_URL}/images/size.jpg`} alt="Selected Case" />
      <img src={`${process.env.PUBLIC_URL}/images/animations and user experience.jpg`} alt="Selected Band" />
      <img src={`${process.env.PUBLIC_URL}/images/case.jpg`} alt="Selected Case" />
      <img src={`${process.env.PUBLIC_URL}/images/band.jpg`} alt="Selected Case" />

    </div>
  );
};

export default WatchPreview;
