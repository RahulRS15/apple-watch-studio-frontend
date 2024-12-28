import React from 'react';

const SaveShare = ({ onSave, onShare }) => {
  return (
    <div className="save-share">
      <img
        src={`${process.env.PUBLIC_URL}/images/save-and-share-functionality.jpg`}
        alt="Save and Share Functionality"
        style={{ width: '400px', height: '300px' }}
      />
      <button onClick={onSave}>Save</button>
      <button onClick={onShare}>Share</button>
    </div>
  );
};

export default SaveShare;
