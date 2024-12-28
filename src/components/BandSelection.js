import React from 'react';

const BandSelection = ({ bands, selectedBand, onSelectBand }) => {
  return (
    <div className="band-selection">
      {bands.map((band) => (
        <div
          key={band.id}
          className={`band-item ${selectedBand === band.id ? 'selected' : ''}`}
          onClick={() => onSelectBand(band.id)}
        >
          <img src={"band.jpg"} alt={band.name} />
          <p>{band.name}</p>
        </div>
      ))}
    </div>
  );
};

export default BandSelection;
