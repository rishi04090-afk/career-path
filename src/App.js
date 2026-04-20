// Vercel rebuild trigger v2 - 2026-04-18
import React, { useState, useEffect } from 'react';
import './App.css';
import { careers } from './data/careers';
import CareerSelection from './components/CareerSelection';
import Timeline from './components/Timeline';
import StepModal from './components/StepModal';
import ComparisonView from './components/ComparisonView';
import PathCustomizer from './components/PathCustomizer';
import AuthModal from './components/AuthModal';
import ProfilePictureDisplay from './components/ProfilePictureDisplay';
import ProfileSettingsModal from './components/ProfileSettingsModal';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

function App() {
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [selectedStep, setSelectedStep] = useState(null);
  const [compareList, setCompareList] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showProfileSettings, setShowProfileSettings] = useState(false);

  const loadBookmarksFromAPI = async (authToken) => {
    try {
      const response = await fetch(`${API_URL}/bookmarks`, {
        headers: { 'Authorization': `Bearer ${authToken}` }
      });
      const data = await response.json();
      if (response.ok) {
        setBookmarks(data);
      }
    } catch (e) {
      console.error('Error loading bookmarks from API:', e);
    }
  };

  // Load user and bookmarks on mount
  useEffect(() => {
    const savedToken = localStorage.getItem('authToken');
    const savedUser = localStorage.getItem('user');
    
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
      loadBookmarksFromAPI(savedToken);
    } else {
      // Load guest bookmarks from localStorage
      const saved = localStorage.getItem('careerBookmarks');
      if (saved) {
        try {
          setBookmarks(JSON.parse(saved));
        } catch (e) {
          console.error('Error loading bookmarks:', e);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Save guest bookmarks to localStorage when they change (if not logged in)
  useEffect(() => {
    if (!token) {
      localStorage.setItem('careerBookmarks', JSON.stringify(bookmarks));
    }
  }, [bookmarks, token]);

  const handleLoginSuccess = (newToken, newUser) => {
    setToken(newToken);
    setUser(newUser);
    loadBookmarksFromAPI(newToken);
  };

  const handleLogout = () => {
    setToken(null);
    setUser(null);
    setBookmarks([]);
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  };

  const handleProfileUpdate = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

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
      } else if (prev.length < 10) {
        return [...prev, career];
      } else {
        return prev;
      }
    });
  };

  const handleToggleBookmark = async (career) => {
    // If not logged in, toggle bookmark locally
    if (!token) {
      setShowAuthModal(true);
      return;
    }

    try {
      const isBookmarked = bookmarks.some((c) => c.id === career.id);
      
      if (isBookmarked) {
        // Remove bookmark - update UI immediately
        setBookmarks((prev) => prev.filter((c) => c.id !== career.id));
        // Also remove from compare list
        setCompareList((prev) => prev.filter((c) => c.id !== career.id));
        
        // Then try to sync with API (don't wait for response)
        fetch(`${API_URL}/bookmarks/${career.id}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        }).catch(e => console.error('Error syncing bookmark removal:', e));
      } else {
        // Add bookmark - update UI immediately
        setBookmarks((prev) => [...prev, career]);
        
        // Then try to sync with API (don't wait for response)
        fetch(`${API_URL}/bookmarks`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            careerId: career.id,
            careerTitle: career.title,
            careerIcon: career.icon
          })
        }).catch(e => console.error('Error syncing bookmark add:', e));
      }
    } catch (e) {
      console.error('Error toggling bookmark:', e);
    }
  };

  const handleBack = () => {
    setSelectedCareer(null);
    setSelectedStep(null);
  };

  const isBookmarked = (careerId) => bookmarks.some((c) => c.id === careerId);

  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h1>🎯 Career Path Builder</h1>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {user ? (
            <>
              <button
                onClick={() => setShowProfileSettings(true)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  borderRadius: '50%',
                  transition: 'all 0.3s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem'
                }}
                onMouseEnter={(e) => e.target.style.background = 'rgba(0,0,0,0.05)'}
                onMouseLeave={(e) => e.target.style.background = 'none'}
                title="Click to customize profile"
              >
                <ProfilePictureDisplay user={user} size="small" />
                <span style={{ color: '#667eea', fontWeight: 'bold' }}>
                  {user.name || user.email}
                </span>
              </button>
              <button
                onClick={handleLogout}
                style={{
                  background: '#e0e0e0',
                  border: 'none',
                  padding: '0.6rem 1rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => setShowAuthModal(true)}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#fff',
                border: 'none',
                padding: '0.6rem 1.2rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              🔐 Login / Register
            </button>
          )}
        </div>
      </div>
      {!selectedCareer ? (
        <>
          <CareerSelection 
            onSelect={handleCareerSelect}
            bookmarks={bookmarks}
            onToggleBookmark={handleToggleBookmark}
            onCompareToggle={handleCompareToggle}
            compareList={compareList}
          />
          {bookmarks.length > 0 && (
            <div style={{ margin: '2rem 0', padding: '1.5rem', background: '#fff0f5', borderRadius: '12px', border: '1px solid #ffb3d9' }}>
              <h3>❤️ Your Bookmarks ({bookmarks.length})</h3>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {bookmarks.map((career) => (
                  <div key={career.id} style={{ background: '#fff', padding: '1rem 1.2rem', borderRadius: '8px', border: '1px solid #ffb3d9', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <span style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={() => handleCareerSelect(career)} title="Click to view details">
                      {career.icon} {career.title}
                    </span>
                    <button 
                      onClick={() => handleCompareToggle(career)}
                      style={{ 
                        background: compareList.find((c) => c.id === career.id) ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#f0f0f0',
                        color: compareList.find((c) => c.id === career.id) ? '#fff' : '#666',
                        border: 'none', 
                        padding: '0.5rem 0.8rem', 
                        borderRadius: '6px', 
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: compareList.find((c) => c.id === career.id) ? 'bold' : 'normal',
                        transition: 'all 0.3s'
                      }}
                      title={compareList.find((c) => c.id === career.id) ? 'Remove from comparison' : 'Add to comparison'}
                    >
                      {compareList.find((c) => c.id === career.id) ? '✓' : '⚖️'} Compare
                    </button>
                    <button 
                      onClick={() => handleToggleBookmark(career)}
                      style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#ff69b4', padding: '0', fontSize: '1.2rem' }}
                      title="Remove bookmark"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div style={{ margin: '2rem 0' }}>
            <ComparisonView careers={compareList} />
          </div>
        </>
      ) : (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <button 
              onClick={handleBack} 
              style={{ 
                background: '#e0e7ef', 
                border: 'none', 
                padding: '0.6rem 1.2rem', 
                borderRadius: '8px', 
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              ← Back to Careers
            </button>
            <button 
              onClick={() => handleToggleBookmark(selectedCareer)}
              style={{ 
                background: isBookmarked(selectedCareer.id) ? '#ff69b4' : '#ddd', 
                border: 'none', 
                padding: '0.6rem 1.2rem', 
                borderRadius: '8px', 
                cursor: 'pointer',
                color: '#fff',
                fontWeight: 'bold',
                transition: 'all 0.3s'
              }}
            >
              {isBookmarked(selectedCareer.id) ? '❤️ Bookmarked' : '🤍 Bookmark'}
            </button>
          </div>
          
          {/* Career Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem', padding: '2rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '12px', color: '#fff' }}>
            <div style={{ fontSize: '5rem' }}>{selectedCareer.icon}</div>
            <div>
              <h1 style={{ margin: 0, fontSize: '2.5rem', marginBottom: '0.5rem' }}>{selectedCareer.title}</h1>
              <p style={{ margin: 0, fontSize: '1.1rem', opacity: 0.95 }}>{selectedCareer.description}</p>
            </div>
          </div>

          {/* Key Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ background: '#f0f4fa', padding: '1.5rem', borderRadius: '10px', border: '2px solid #e0e7ef' }}>
              <div style={{ color: '#667eea', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem' }}>⏱️ TOTAL TIME</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>{selectedCareer.totalTime}</div>
            </div>
            <div style={{ background: '#f0f4fa', padding: '1.5rem', borderRadius: '10px', border: '2px solid #e0e7ef' }}>
              <div style={{ color: '#667eea', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem' }}>💰 TOTAL COST</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>{selectedCareer.totalCost}</div>
            </div>
            <div style={{ background: '#f0f4fa', padding: '1.5rem', borderRadius: '10px', border: '2px solid #e0e7ef' }}>
              <div style={{ color: '#667eea', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem' }}>💵 STARTING SALARY</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>{selectedCareer.steps[3]?.salary_after || 'Varies'}</div>
            </div>
            <div style={{ background: '#f0f4fa', padding: '1.5rem', borderRadius: '10px', border: '2px solid #e0e7ef' }}>
              <div style={{ color: '#667eea', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem' }}>📈 POTENTIAL SALARY</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>{selectedCareer.steps[5]?.salary_after || '$80k+'}</div>
            </div>
          </div>

          {/* Stage Breakdown */}
          <div style={{ marginBottom: '2rem', background: '#fafbfc', padding: '2rem', borderRadius: '12px', border: '1px solid #e0e7ef' }}>
            <h2 style={{ marginTop: 0, color: '#333' }}>📚 What This Career Looks Like</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              {selectedCareer.steps.map((step, idx) => (
                <div 
                  key={step.id} 
                  style={{ 
                    background: '#fff', 
                    padding: '1.5rem', 
                    borderRadius: '10px', 
                    border: `3px solid ${step.type === 'school' ? '#4f8cff' : step.type === 'work' ? '#4caf50' : '#ffb300'}`,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    position: 'relative'
                  }}
                  onClick={() => handleStepClick(step)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                    {step.type === 'school' ? '🎓' : step.type === 'work' ? '💼' : '🚀'}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#999', fontWeight: 'bold', marginBottom: '0.5rem' }}>STAGE {idx + 1}</div>
                  <h4 style={{ margin: '0 0 0.8rem 0', color: '#333', fontSize: '1.1rem' }}>{step.title}</h4>
                  <div style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.6' }}>
                    <p style={{ margin: '0.5rem 0' }}><strong>⏱️</strong> {step.duration}</p>
                    <p style={{ margin: '0.5rem 0' }}><strong>💰</strong> {step.cost}</p>
                    <p style={{ margin: '0.5rem 0' }}><strong>💵</strong> {step.salary_after}</p>
                  </div>
                  <p style={{ margin: '0.8rem 0 0 0', fontSize: '0.9rem', color: '#555', fontStyle: 'italic' }}>{step.details}</p>
                  <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#667eea', fontWeight: 'bold' }}>Click for more details →</div>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div style={{ marginBottom: '2rem', background: '#fff8e1', padding: '1.5rem', borderRadius: '10px', border: '2px solid #ffd700' }}>
            <h3 style={{ marginTop: 0, color: '#f57f17' }}>📋 Requirements to Get Started</h3>
            <p style={{ fontSize: '1.1rem', color: '#666' }}><strong>Prerequisites:</strong> {selectedCareer.steps[0]?.requirements || 'None'}</p>
            <p style={{ fontSize: '1rem', color: '#888' }}>You'll need: {selectedCareer.steps[1]?.requirements || 'High School Diploma or equivalent'}</p>
          </div>

          <h2 style={{ marginTop: '2rem', marginBottom: '1rem', color: '#333' }}>📊 Detailed Career Roadmap</h2>
          <p style={{ color: '#666', marginBottom: '1.5rem' }}>Click on any stage below to explore more details about what to expect, costs, schools, and requirements.</p>
          <Timeline steps={selectedCareer.steps} onStepClick={handleStepClick} />
          
          <PathCustomizer career={selectedCareer} />
          <StepModal step={selectedStep} onClose={() => setSelectedStep(null)} />
        </div>
      )}
      {showAuthModal && (
        <AuthModal 
          onClose={() => setShowAuthModal(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
      {showProfileSettings && user && (
        <ProfileSettingsModal
          user={user}
          token={token}
          onClose={() => setShowProfileSettings(false)}
          onProfileUpdate={handleProfileUpdate}
        />
      )}
    </div>
  );
}

export default App;
