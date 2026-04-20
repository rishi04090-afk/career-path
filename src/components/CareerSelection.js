import React, { useState, useMemo } from 'react';
import { careers } from '../data/careers';

const CareerSelection = ({ onSelect, bookmarks = [], onToggleBookmark, onCompareToggle, compareList = [] }) => {
  const [selectedId, setSelectedId] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sort careers alphabetically
  const sortedCareers = useMemo(() => {
    return [...careers].sort((a, b) => a.title.localeCompare(b.title));
  }, []);

  // Filter careers based on search
  const filteredCareers = useMemo(() => {
    return sortedCareers.filter(career =>
      career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      career.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [sortedCareers, searchTerm]);

  const selectedCareer = careers.find(c => c.id === selectedId);
  const isBookmarked = selectedCareer ? bookmarks.some(b => b.id === selectedCareer.id) : false;

  const handleSelect = (careerId) => {
    const career = careers.find(c => c.id === careerId);
    if (career) {
      setSelectedId(careerId);
      onSelect(career);
    }
  };

  return (
    <div className="career-selection">
      <h2>🎓 Select a Career to Explore</h2>
      <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '2rem' }}>
        💡 <strong>Tip:</strong> Log in to save your favorite careers to your personal bookmarks!
      </p>
      
      <div className="dropdown-section">
        <label htmlFor="career-search" style={{ display: 'block', marginBottom: '0.8rem', fontWeight: 'bold', color: '#333' }}>
          Search or Choose a Career:
        </label>
        <input
          id="career-search"
          type="text"
          placeholder="🔍 Search careers by name or skill..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="career-search"
          style={{
            width: '100%',
            padding: '0.9rem 1rem',
            border: '2px solid #e0e7ef',
            borderRadius: '8px 8px 0 0',
            fontSize: '1rem',
            fontFamily: 'inherit',
            marginBottom: '0'
          }}
        />
        <select
          id="career-dropdown"
          value={selectedId}
          onChange={(e) => handleSelect(e.target.value)}
          className="career-dropdown"
          style={{
            borderRadius: '0 0 8px 8px',
            marginTop: '-2px'
          }}
        >
          <option value="">-- Select a career -- ({filteredCareers.length} results)</option>
          {filteredCareers.map(career => (
            <option key={career.id} value={career.id}>
              {career.icon} {career.title}
            </option>
          ))}
        </select>
      </div>

      {selectedCareer && (
        <div className="career-details" style={{ marginTop: '2rem', padding: '1.5rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e0e7ef' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '2.5rem' }}>{selectedCareer.icon}</span>
              <div>
                <h3 style={{ margin: 0, color: '#333' }}>{selectedCareer.title}</h3>
                <p style={{ margin: '0.5rem 0 0 0', color: '#666', fontSize: '0.95rem' }}>{selectedCareer.description}</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.8rem', flexShrink: 0 }}>
              <button
                onClick={() => onCompareToggle(selectedCareer)}
                style={{
                  background: compareList.find((c) => c.id === selectedCareer.id) ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#ddd',
                  color: compareList.find((c) => c.id === selectedCareer.id) ? '#fff' : '#666',
                  border: 'none',
                  padding: '0.7rem 1.2rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: compareList.find((c) => c.id === selectedCareer.id) ? 'bold' : 'normal',
                  transition: 'all 0.3s',
                  fontSize: '0.9rem'
                }}
                title={compareList.find((c) => c.id === selectedCareer.id) ? 'Remove from comparison' : 'Add to comparison (max 3)'}
              >
                {compareList.find((c) => c.id === selectedCareer.id) ? '✓ Compare' : '📊 Compare'}
              </button>
              <button
                onClick={() => onToggleBookmark(selectedCareer)}
                style={{
                  background: isBookmarked ? '#ff69b4' : '#ddd',
                  color: isBookmarked ? '#fff' : '#666',
                  border: 'none',
                  padding: '0.7rem 1rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  transition: 'all 0.3s',
                  minWidth: '50px'
                }}
                title={isBookmarked ? 'Remove from bookmarks' : 'Login to bookmark this career'}
              >
                {isBookmarked ? '❤️' : '🤍'}
              </button>
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.9rem' }}>
            <div>
              <strong style={{ color: '#667eea' }}>Total Time:</strong>
              <p style={{ margin: '0.3rem 0', color: '#666' }}>{selectedCareer.totalTime}</p>
            </div>
            <div>
              <strong style={{ color: '#667eea' }}>Total Cost:</strong>
              <p style={{ margin: '0.3rem 0', color: '#666' }}>{selectedCareer.totalCost}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerSelection;
