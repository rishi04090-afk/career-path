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
    if (!sortedCareers || sortedCareers.length === 0) return [];
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
    <div style={{ width: '100%' }}>
      {/* Search & Browse Section */}
      <div style={{
        background: 'linear-gradient(135deg, #0066cc 0%, #0052a3 100%)',
        borderRadius: '16px',
        padding: '3rem 2.5rem',
        marginBottom: '3rem',
        boxShadow: '0 8px 24px rgba(0, 102, 204, 0.15)'
      }}>
        <h2 style={{
          color: '#fff',
          fontSize: '2rem',
          fontWeight: 700,
          marginBottom: '0.5rem',
          letterSpacing: '-0.5px'
        }}>Browse All Careers</h2>
        <p style={{
          color: 'rgba(255, 255, 255, 0.9)',
          fontSize: '1.05rem',
          marginBottom: '2rem',
          lineHeight: '1.5'
        }}>Explore {filteredCareers.length} professional careers in Canada. Search, compare, and find your perfect path.</p>
        
        {/* Search Box */}
        <div style={{
          position: 'relative',
          marginBottom: '0.5rem'
        }}>
          <input
            id="career-search"
            type="text"
            placeholder="Search careers by name, skills, or interests..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '1rem 1.2rem 1rem 2.8rem',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              fontSize: '1rem',
              fontFamily: 'inherit',
              boxSizing: 'border-box',
              background: 'rgba(255, 255, 255, 0.95)',
              color: '#1a2332',
              transition: 'all 0.3s',
              outline: 'none'
            }}
            onFocus={(e) => {
              e.target.style.border = '2px solid rgba(255, 255, 255, 0.6)';
              e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
              e.target.style.background = '#fff';
            }}
            onBlur={(e) => {
              e.target.style.border = '2px solid rgba(255, 255, 255, 0.2)';
              e.target.style.boxShadow = 'none';
            }}
          />
          <span style={{
            position: 'absolute',
            left: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#0066cc',
            fontSize: '1.2rem'
          }}>🔍</span>
        </div>
        <p style={{
          color: 'rgba(255, 255, 255, 0.85)',
          fontSize: '0.9rem',
          margin: 0
        }}>Found <strong>{filteredCareers.length}</strong> career{filteredCareers.length !== 1 ? 's' : ''}</p>
      </div>

      {/* Career Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.5rem',
        marginBottom: '3rem'
      }}>
        {filteredCareers.map((career) => (
          <div
            key={career.id}
            onClick={() => handleSelect(career.id)}
            style={{
              background: '#fff',
              borderRadius: '12px',
              border: selectedId === career.id ? '3px solid #0066cc' : '2px solid #e1e6ed',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: selectedId === career.id 
                ? '0 12px 28px rgba(0, 102, 204, 0.2)' 
                : '0 2px 8px rgba(0, 0, 0, 0.05)',
              transform: selectedId === career.id ? 'translateY(-4px)' : 'translateY(0)',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}
            onMouseEnter={(e) => {
              if (selectedId !== career.id) {
                e.currentTarget.style.borderColor = '#0066cc';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 102, 204, 0.12)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedId !== career.id) {
                e.currentTarget.style.borderColor = '#e1e6ed';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }
            }}
          >
            {/* Career Image Preview */}
            {career.image && (
              <div style={{
                width: '100%',
                height: '150px',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #0066cc 0%, #0052a3 100%)',
                position: 'relative'
              }}>
                <img
                  src={career.image}
                  alt={career.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            )}
            
            {/* Card Content */}
            <div style={{
              padding: '1.5rem',
              flex: 1,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h3 style={{
                margin: '0 0 0.5rem 0',
                fontSize: '1.15rem',
                fontWeight: 700,
                color: '#0f1419',
                letterSpacing: '-0.3px',
                lineHeight: '1.3'
              }}>
                {career.title}
              </h3>
              
              <p style={{
                margin: '0 0 1rem 0',
                fontSize: '0.9rem',
                color: '#5c6b7f',
                lineHeight: '1.4',
                flex: 1
              }}>
                {career.description.length > 80 
                  ? career.description.substring(0, 77) + '...' 
                  : career.description}
              </p>
              
              {/* Career Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginTop: 'auto',
                paddingTop: '1rem',
                borderTop: '1px solid #e1e6ed'
              }}>
                <div>
                  <p style={{
                    margin: 0,
                    fontSize: '0.8rem',
                    color: '#5c6b7f',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>Time</p>
                  <p style={{
                    margin: '0.3rem 0 0 0',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: '#0f1419'
                  }}>{career.totalTime}</p>
                </div>
                <div>
                  <p style={{
                    margin: 0,
                    fontSize: '0.8rem',
                    color: '#5c6b7f',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>Cost</p>
                  <p style={{
                    margin: '0.3rem 0 0 0',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: '#0f1419'
                  }}>{career.totalCost}</p>
                </div>
              </div>

              {/* Bookmark Status Badge */}
              {bookmarks.some(b => b.id === career.id) && (
                <div style={{
                  marginTop: '0.8rem',
                  padding: '0.4rem 0.8rem',
                  background: '#ecfdf5',
                  color: '#10b981',
                  borderRadius: '6px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  textAlign: 'center'
                }}>
                  ★ Saved
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Selected Career Detail View */}
      {selectedCareer && (
        <div style={{
          background: '#f5f7fa',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '2px solid #e1e6ed',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)'
        }}>
          {/* Banner Image */}
          {selectedCareer.image && (
            <div style={{
              width: '100%',
              height: '280px',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #0066cc 0%, #0052a3 100%)',
              position: 'relative'
            }}>
              <img
                src={selectedCareer.image}
                alt={selectedCareer.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          )}

          {/* Content */}
          <div style={{ padding: '2.5rem' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              <div style={{ flex: 1 }}>
                <h2 style={{
                  margin: 0,
                  fontSize: '2.2rem',
                  fontWeight: 700,
                  color: '#0f1419',
                  letterSpacing: '-0.5px',
                  marginBottom: '0.8rem'
                }}>
                  {selectedCareer.title}
                </h2>
                <p style={{
                  margin: 0,
                  fontSize: '1.05rem',
                  color: '#5c6b7f',
                  lineHeight: '1.6'
                }}>
                  {selectedCareer.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                minWidth: '180px'
              }}>
                <button
                  onClick={() => onToggleBookmark(selectedCareer)}
                  style={{
                    background: isBookmarked ? '#10b981' : '#e1e6ed',
                    color: isBookmarked ? '#fff' : '#1a2332',
                    border: 'none',
                    padding: '0.85rem 1.5rem',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    transition: 'all 0.3s',
                    boxShadow: isBookmarked ? '0 4px 12px rgba(16, 185, 129, 0.2)' : 'none'
                  }}
                >
                  {isBookmarked ? '★ Saved' : '☆ Save'}
                </button>
                <button
                  onClick={() => onCompareToggle(selectedCareer)}
                  style={{
                    background: compareList.find((c) => c.id === selectedCareer.id) ? '#0066cc' : '#fff',
                    color: compareList.find((c) => c.id === selectedCareer.id) ? '#fff' : '#0066cc',
                    border: '2px solid #0066cc',
                    padding: '0.85rem 1.5rem',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    transition: 'all 0.3s',
                    boxShadow: compareList.find((c) => c.id === selectedCareer.id) ? '0 4px 12px rgba(0, 102, 204, 0.2)' : 'none'
                  }}
                >
                  {compareList.find((c) => c.id === selectedCareer.id) ? '✓ Selected' : '+ Compare'}
                </button>
              </div>
            </div>

            {/* Key Info Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              paddingTop: '2rem',
              borderTop: '2px solid #e1e6ed'
            }}>
              <div>
                <p style={{
                  margin: 0,
                  fontSize: '0.85rem',
                  color: '#5c6b7f',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '0.5rem'
                }}>Total Time to Complete</p>
                <p style={{
                  margin: 0,
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#0066cc'
                }}>{selectedCareer.totalTime}</p>
              </div>
              <div>
                <p style={{
                  margin: 0,
                  fontSize: '0.85rem',
                  color: '#5c6b7f',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '0.5rem'
                }}>Total Investment</p>
                <p style={{
                  margin: 0,
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#0066cc'
                }}>{selectedCareer.totalCost}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {filteredCareers.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '4rem 2rem',
          background: '#f5f7fa',
          borderRadius: '12px',
          border: '2px dashed #e1e6ed'
        }}>
          <p style={{
            fontSize: '1.1rem',
            color: '#5c6b7f',
            margin: 0
          }}>No careers found matching "{searchTerm}"</p>
          <p style={{
            fontSize: '0.95rem',
            color: '#5c6b7f',
            margin: '0.5rem 0 0 0'
          }}>Try searching with different keywords</p>
        </div>
      )}
    </div>
  );
};

export default CareerSelection;
