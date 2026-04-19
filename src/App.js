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
      } else if (prev.length < 3) {
        return [...prev, career];
      } else {
        return prev;
      }
    });
  };

  const handleToggleBookmark = async (career) => {
    // If not logged in, show auth modal
    if (!token) {
      setShowAuthModal(true);
      return;
    }

    try {
      const isBookmarked = bookmarks.some((c) => c.id === career.id);
      
      if (isBookmarked) {
        // Remove bookmark
        const response = await fetch(`${API_URL}/bookmarks/${career.id}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        });

        if (response.ok) {
          setBookmarks((prev) => prev.filter((c) => c.id !== career.id));
        }
      } else {
        // Add bookmark
        const response = await fetch(`${API_URL}/bookmarks`, {
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
        });

        if (response.ok) {
          setBookmarks((prev) => [...prev, career]);
        }
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
          />
          <div style={{ margin: '2rem 0' }}>
            <h3>📊 Compare Careers (select up to 3)</h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              {careers.map((career) => (
                <button
                  key={career.id}
                  onClick={() => handleCompareToggle(career)}
                  style={{ 
                    background: compareList.find((c) => c.id === career.id) ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#eee', 
                    color: compareList.find((c) => c.id === career.id) ? '#fff' : '#222', 
                    border: 'none', 
                    padding: '0.7rem 1rem', 
                    borderRadius: '8px', 
                    cursor: 'pointer',
                    fontWeight: compareList.find((c) => c.id === career.id) ? 'bold' : 'normal',
                    transition: 'all 0.3s'
                  }}
                >
                  {career.icon} {career.title}
                </button>
              ))}
            </div>
            {bookmarks.length > 0 && (
              <div style={{ marginBottom: '1.5rem' }}>
                <h3>❤️ Your Bookmarks ({bookmarks.length})</h3>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {bookmarks.map((career) => (
                    <div key={career.id} style={{ background: '#fff0f5', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #ffb3d9' }}>
                      <span>{career.icon} {career.title}</span>
                      <button 
                        onClick={() => handleToggleBookmark(career)}
                        style={{ background: 'transparent', border: 'none', marginLeft: '0.5rem', cursor: 'pointer', color: '#ff69b4' }}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
          <h2>{selectedCareer.icon} {selectedCareer.title}</h2>
          <div style={{ background: '#f0f4fa', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', color: '#666' }}>
            <p><strong>📝 Description:</strong> {selectedCareer.description}</p>
            <p><strong>⏱️ Total Time:</strong> {selectedCareer.totalTime} | <strong>💰 Total Cost:</strong> {selectedCareer.totalCost}</p>
          </div>
          <h3>📋 Career Roadmap</h3>
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
