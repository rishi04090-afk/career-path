import React, { useState } from 'react';

const PathCustomizer = ({ career }) => {
  const [customizations, setCustomizations] = useState({
    schoolType: 'university', // or 'college'
    fastTrack: false,
    scholarshipAvailable: false,
  });

  const calculateCosts = (steps, customizations) => {
    let totalCost = 0;
    steps.forEach(step => {
      const cost = parseInt((step.cost || '').replace(/[^\d]/g, '')) || 0;
      let adjustedCost = cost;
      
      if (customizations.scholarshipAvailable && step.type === 'school') {
        adjustedCost = Math.floor(cost * 0.5); // 50% scholarship
      }
      
      totalCost += adjustedCost;
    });
    return totalCost;
  };

  const calculateTime = (steps, customizations) => {
    let totalTime = 0;
    steps.forEach(step => {
      let duration = parseInt(step.duration) || 0;
      if (customizations.fastTrack && step.type === 'school') {
        duration = Math.ceil(duration * 0.75); // 25% faster
      }
      totalTime += duration;
    });
    return totalTime;
  };

  const originalCost = calculateCosts(career.steps, {});
  const customizedCost = calculateCosts(career.steps, customizations);
  const originalTime = calculateTime(career.steps, {});
  const customizedTime = calculateTime(career.steps, customizations);

  const costSavings = originalCost - customizedCost;
  const timeSavings = originalTime - customizedTime;

  return (
    <div style={{ marginTop: '2rem', background: '#f0f4fa', padding: '1.5rem', borderRadius: '12px', border: '2px solid #667eea' }}>
      <h3>🔧 Customize Your Path</h3>
      <p style={{ color: '#666', marginBottom: '1rem' }}>See how different choices affect your timeline and costs!</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
            <input 
              type="checkbox" 
              checked={customizations.scholarshipAvailable}
              onChange={(e) => setCustomizations({...customizations, scholarshipAvailable: e.target.checked})}
              style={{ marginRight: '0.5rem' }}
            />
            💰 Have a Scholarship (50% off education costs)
          </label>
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
            <input 
              type="checkbox" 
              checked={customizations.fastTrack}
              onChange={(e) => setCustomizations({...customizations, fastTrack: e.target.checked})}
              style={{ marginRight: '0.5rem' }}
            />
            ⚡ Fast-track Option (25% quicker)
          </label>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', textAlign: 'center', border: '1px solid #e0e7ef' }}>
          <div style={{ color: '#666', fontSize: '0.9rem', marginBottom: '0.3rem' }}>Original Timeline</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>{originalTime} years</div>
        </div>

        <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', textAlign: 'center', border: '2px solid #4caf50' }}>
          <div style={{ color: '#666', fontSize: '0.9rem', marginBottom: '0.3rem' }}>Customized Timeline</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4caf50' }}>{customizedTime} years</div>
          {timeSavings > 0 && <div style={{ fontSize: '0.85rem', color: '#4caf50', marginTop: '0.3rem' }}>Save {timeSavings} years! ✓</div>}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
        <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', textAlign: 'center', border: '1px solid #e0e7ef' }}>
          <div style={{ color: '#666', fontSize: '0.9rem', marginBottom: '0.3rem' }}>Original Cost</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>${originalCost.toLocaleString()}</div>
        </div>

        <div style={{ background: '#fff', padding: '1rem', borderRadius: '8px', textAlign: 'center', border: '2px solid #4caf50' }}>
          <div style={{ color: '#666', fontSize: '0.9rem', marginBottom: '0.3rem' }}>Customized Cost</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4caf50' }}>${customizedCost.toLocaleString()}</div>
          {costSavings > 0 && <div style={{ fontSize: '0.85rem', color: '#4caf50', marginTop: '0.3rem' }}>Save ${costSavings.toLocaleString()}! ✓</div>}
        </div>
      </div>

      <div style={{ marginTop: '1rem', padding: '1rem', background: '#e8f5e9', borderRadius: '8px', border: '1px solid #4caf50', color: '#2e7d32' }}>
        <strong>💡 Pro Tip:</strong> Scholarships and financial aid can significantly reduce your education costs. Look for merit-based scholarships, bursaries, and employer sponsorship programs!
      </div>
    </div>
  );
};

export default PathCustomizer;
