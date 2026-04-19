import React from 'react';

const StepModal = ({ step, onClose }) => {
  if (!step) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{step.title}</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          {step.details && (
            <p className="step-description"><strong>Overview:</strong> {step.details}</p>
          )}
          <div className="step-info-grid">
            <div className="info-item">
              <span className="label">⏱️ Duration</span>
              <span className="value">{step.duration}</span>
            </div>
            <div className="info-item">
              <span className="label">💰 Cost</span>
              <span className="value">{step.cost}</span>
            </div>
            <div className="info-item">
              <span className="label">📊 Starting Salary</span>
              <span className="value">{step.salary_after}</span>
            </div>
            <div className="info-item">
              <span className="label">📋 Prerequisites</span>
              <span className="value">{step.requirements}</span>
            </div>
          </div>
          {step.schools && step.schools.length > 0 && (
            <div className="schools-section">
              <strong>📚 Popular Schools/Institutions:</strong>
              <ul>
                {step.schools.map((school, idx) => (
                  <li key={idx}>{school}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="modal-footer">
          <button className="btn-primary" onClick={onClose}>Got it!</button>
        </div>
      </div>
    </div>
  );
};

export default StepModal;
