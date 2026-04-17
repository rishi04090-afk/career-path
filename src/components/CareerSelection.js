import React from 'react';
import { careers } from '../data/careers';

const CareerSelection = ({ onSelect }) => (
  <div className="career-selection">
    <h2>Select a Career</h2>
    <div className="career-list">
      {careers.map(career => (
        <div key={career.id} className="career-card" onClick={() => onSelect(career)}>
          <span className="career-icon" style={{ fontSize: '2rem' }}>{career.icon}</span>
          <div className="career-title">{career.title}</div>
          <div className="career-desc">{career.description}</div>
        </div>
      ))}
    </div>
  </div>
);

export default CareerSelection;
