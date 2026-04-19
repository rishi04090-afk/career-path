import React from 'react';
import { careers } from '../data/careers';

const CareerSelection = ({ onSelect, bookmarks = [], onToggleBookmark }) => (
  <div className="career-selection">
    <h2>🎓 Select a Career to Explore</h2>
    <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
      💡 <strong>Tip:</strong> Log in to save your favorite careers to your personal bookmarks!
    </p>
    <div className="career-list">
      {careers.map(career => {
        const isBookmarked = bookmarks.some(b => b.id === career.id);
        return (
          <div key={career.id} className="career-card">
            <span className="career-icon">{career.icon}</span>
            <div className="career-title">{career.title}</div>
            <div className="career-desc">{career.description}</div>
            <div style={{ marginTop: '0.8rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
              <button
                onClick={() => onSelect(career)}
                style={{
                  flex: 1,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: '#fff',
                  border: 'none',
                  padding: '0.5rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}
              >
                Explore
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleBookmark(career);
                }}
                style={{
                  background: isBookmarked ? '#ff69b4' : '#ddd',
                  color: isBookmarked ? '#fff' : '#666',
                  border: 'none',
                  padding: '0.5rem 0.8rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'all 0.3s'
                }}
                title={isBookmarked ? 'Remove from bookmarks' : 'Login to bookmark this career'}
              >
                {isBookmarked ? '❤️' : '🤍'}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default CareerSelection;
