import React from 'react';

const SizeSelection = ({ sizes, selectedSize, onSelectSize }) => {
  const handleClick = (size) => {
    // Perform any additional logic here if needed
    onSelectSize(size);
  };

  return (
    <div className="size-selection">
      <img
        src={`${process.env.PUBLIC_URL}/images/size.jpg`}
        alt="size"
        style={{ width: '400px', height: '300px' }}
      />
      {sizes.map((size) => (
        <button
          key={size}
          className={`size-button ${selectedSize === size ? 'selected' : ''}`}
          onClick={() => handleClick(size)}
        >
          {size}mm
        </button>
      ))}
    </div>
  );
};

export default SizeSelection;
