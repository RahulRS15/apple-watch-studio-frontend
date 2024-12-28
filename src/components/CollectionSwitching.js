import React from 'react';

const CollectionSwitching = ({ collections, selectedCollection, onSelectCollection }) => {
  return (
    <div className="collection-switching">
      <select
        value={selectedCollection}
        onChange={(e) => onSelectCollection(e.target.value)}
      >
        {collections.map((collection) => (
          <option key={collection.id} value={collection.id}>
            {collection.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CollectionSwitching;
