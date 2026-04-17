import React from 'react';

const colorMap = {
  school: '#4f8cff',
  work: '#4caf50',
  growth: '#ffb300',
};

const Timeline = ({ steps, onStepClick }) => (
  <div className="timeline">
    {steps.map((step, idx) => (
      <div
        key={step.id}
        className="timeline-step"
        style={{ borderLeft: `6px solid ${colorMap[step.type] || '#ccc'}` }}
        onClick={() => onStepClick && onStepClick(step)}
      >
        <div className="step-title">{step.title}</div>
        <div className="step-details">
          Duration: {step.duration} | Cost: {step.cost} | Salary After: {step.salary_after}
        </div>
      </div>
    ))}
  </div>
);

export default Timeline;
