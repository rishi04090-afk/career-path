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
  const [showHome, setShowHome] = useState(true);
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
    setShowHome(false);
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
    setShowHome(false);
  };

  const isBookmarked = (careerId) => bookmarks.some((c) => c.id === careerId);

  return (
    <div className="App">
      {/* Professional Header/Navigation */}
      <header className="app-header">
        <div className="header-container">
          <div className="logo-section" onClick={() => { setShowHome(true); setSelectedCareer(null); }} style={{ cursor: 'pointer' }}>
            <h1 className="logo">PathFinder</h1>
            <p className="tagline">Career Guidance Platform</p>
          </div>
          <nav className="header-nav">
            <button className="nav-link" onClick={() => setShowHome(true)}>Home</button>
            <button className="nav-link" onClick={() => { setShowHome(false); setSelectedCareer(null); }}>Browse Careers</button>
            {user && <span className="nav-user-name">{user.name || user.email}</span>}
          </nav>
          <div className="header-actions">
            {user ? (
              <>
                <button
                  className="profile-button"
                  onClick={() => setShowProfileSettings(true)}
                  title="Profile Settings"
                >
                  <ProfilePictureDisplay user={user} size="small" />
                </button>
                <button className="btn-logout" onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <button className="btn-login" onClick={() => setShowAuthModal(true)}>Sign In</button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {showHome && !selectedCareer ? (
          <>
            {/* Hero Section */}
            <section className="hero-section">
              <div className="hero-content">
                <h2>Discover Your Ideal Career Path</h2>
                <p>Explore 80+ professional career tracks with detailed timelines, costs, and salary progression. Make informed decisions about your future.</p>
                <button className="btn-primary-large" onClick={() => setShowHome(false)}>Start Exploring</button>
              </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
              <div className="feature-card">
                <div className="feature-icon feature-icon-chart">▣</div>
                <h3>Detailed Career Paths</h3>
                <p>Step-by-step progression from entry-level to advanced roles with accurate timelines and costs.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon feature-icon-salary">$</div>
                <h3>Salary Insights</h3>
                <p>Canadian salary ranges at each career stage to help you plan your financial future.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon feature-icon-education">✓</div>
                <h3>Education Guidance</h3>
                <p>Understand educational requirements, costs, and certifications needed for your chosen field.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon feature-icon-compare">⟺</div>
                <h3>Comparison Tools</h3>
                <p>Compare up to 10 careers side-by-side to find the best fit for your goals and lifestyle.</p>
              </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
              <h2>Ready to Plan Your Career?</h2>
              <button className="btn-primary-large" onClick={() => setShowHome(false)}>Browse All Careers</button>
            </section>
          </>
        ) : (
          <>
            {!selectedCareer ? (
              <>
                <div className="careers-header">
                  <h2>Explore Our Career Paths</h2>
                  <p>Browse detailed progression timelines, salary ranges, and educational requirements for 80+ professional careers in Canada</p>
                </div>
                <CareerSelection 
                  onSelect={handleCareerSelect}
                  bookmarks={bookmarks}
                  onToggleBookmark={handleToggleBookmark}
                  onCompareToggle={handleCompareToggle}
                  compareList={compareList}
                />
                {bookmarks.length > 0 && (
                  <div className="bookmarks-section">
                    <h3>Saved Careers ({bookmarks.length})</h3>
                    <div className="bookmarks-list">
                      {bookmarks.map((career) => (
                        <div key={career.id} className="bookmark-item">
                          <span className="bookmark-title" onClick={() => handleCareerSelect(career)}>{career.title}</span>
                          <button 
                            className={`btn-compare ${compareList.find((c) => c.id === career.id) ? 'active' : ''}`}
                            onClick={() => handleCompareToggle(career)}
                          >
                            {compareList.find((c) => c.id === career.id) ? '✓ Selected' : 'Compare'}
                          </button>
                          <button 
                            className="btn-remove"
                            onClick={() => handleToggleBookmark(career)}
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="comparison-container">
                  <ComparisonView careers={compareList} />
                </div>
              </>
            ) : (
              <div>
                <button className="btn-back" onClick={handleBack}>← Back</button>
                {selectedCareer.image && (
                  <div style={{
                    width: '100%',
                    height: '280px',
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, #0066cc 0%, #0052a3 100%)',
                    borderRadius: '12px',
                    marginBottom: '2rem',
                    marginTop: '1rem'
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
                <div className="career-detail-header">
                  <div>
                    <h2>{selectedCareer.title}</h2>
                    <p className="career-detail-desc">{selectedCareer.description}</p>
                  </div>
                  <button 
                    className={`btn-bookmark ${isBookmarked(selectedCareer.id) ? 'bookmarked' : ''}`}
                    onClick={() => handleToggleBookmark(selectedCareer)}
                  >
                    {isBookmarked(selectedCareer.id) ? '★ Saved' : '☆ Save'}
                  </button>
                </div>
                <Timeline 
                  steps={selectedCareer.steps}
                  onStepClick={handleStepClick}
                />
              </div>
            )}
          </>
        )}
      </main>

      {/* Modals */}
      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} onLoginSuccess={handleLoginSuccess} />}
      {showProfileSettings && user && <ProfileSettingsModal user={user} onClose={() => setShowProfileSettings(false)} onUpdate={handleProfileUpdate} />}
      {selectedStep && <StepModal step={selectedStep} career={selectedCareer} onClose={() => setSelectedStep(null)} />}
    </div>
  );
}

export default App;
