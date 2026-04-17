import React, { useState } from 'react';
import './App.css';
import { careers } from './data/careers';
import CareerSelection from './components/CareerSelection';
import Timeline from './components/Timeline';
import StepModal from './components/StepModal';
import ComparisonView from './components/ComparisonView';

function App() {
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [selectedStep, setSelectedStep] = useState(null);
  const [compareList, setCompareList] = useState([]);

  const handleCareerSelect = (career) => {
    setSelectedCareer(career);
    setSelectedStep(null);
  };

  const handleStepClick = (step) => {
    setSelectedStep(step);
  };

  const handleCompareToggle = (career) => {
    setCompareList((prev) => {
      if (prev.find((c) => c.id === career.id)) {
        return prev.filter((c) => c.id !== career.id);
      } else if (prev.length < 3) {
        return [...prev, career];
      } else {
        return prev;
      }
    });
  };

  const handleBack = () => {
    setSelectedCareer(null);
    setSelectedStep(null);
  };

  return (
    <div className="App">
      <h1>Career Path Builder</h1>
      {!selectedCareer ? (
        <>
          <CareerSelection onSelect={handleCareerSelect} />
          <div style={{ margin: '2rem 0' }}>
            <h3>Compare Careers</h3>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {careers.map((career) => (
                <button
                  key={career.id}
                  onClick={() => handleCompareToggle(career)}
                  style={{ background: compareList.find((c) => c.id === career.id) ? '#4f8cff' : '#eee', color: '#222', border: 'none', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer' }}
                >
                  {career.icon} {career.title}
                </button>
              ))}
            </div>
            <ComparisonView careers={compareList} />
          </div>
        </>
      ) : (
        <div>
          <button onClick={handleBack} style={{ marginBottom: '1rem' }}>← Back to Careers</button>
          <h2>{selectedCareer.icon} {selectedCareer.title}</h2>
          <Timeline steps={selectedCareer.steps} onStepClick={handleStepClick} />
          <StepModal step={selectedStep} onClose={() => setSelectedStep(null)} />
        </div>
      )}
    </div>
  );
}

export default App;
