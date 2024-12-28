import React from 'react';

const CaseSelection = ({ cases, selectedCase, onSelectCase }) => {
  return (
    <div className="case-selection">
      {cases.map((caseItem) => (
        <div
          key={caseItem.id}
          className={`case-item ${selectedCase === caseItem.id ? 'selected' : ''}`}
          onClick={() => onSelectCase(caseItem.id)}
        >
          <img src={`${process.env.PUBLIC_URL}/images/${caseItem.image}`} alt={caseItem.name} />
          <p>{caseItem.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CaseSelection;
