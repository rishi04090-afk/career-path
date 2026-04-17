import React from 'react';

const StepModal = ({ step, onClose }) => {
  if (!step) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h3>{step.title}</h3>
        <p><strong>Duration:</strong> {step.duration}</p>
        <p><strong>Cost:</strong> {step.cost}</p>
        <p><strong>Requirements:</strong> {step.requirements}</p>
        <p><strong>Expected Salary After:</strong> {step.salary_after}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default StepModal;
