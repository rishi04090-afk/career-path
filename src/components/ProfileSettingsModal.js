import React, { useState } from 'react';
import ProfilePictureSelector from './ProfilePictureSelector';

const ProfileSettingsModal = ({ user, token, onClose, onProfileUpdate }) => {
  const [profilePicture, setProfilePicture] = useState(user?.profilePicture || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const API_URL = 'http://localhost:5000/api/users';

  const handleSaveChanges = async () => {
    try {
      setError('');
      setSuccess('');
      setLoading(true);

      const response = await fetch(`${API_URL}/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          profilePicture
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to update profile');
      }

      setSuccess('Profile updated successfully!');
      
      // Update the user in App.js
      const updatedUser = { ...user, profilePicture };
      onProfileUpdate(updatedUser);

      // Close modal after 1.5 seconds
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: '#fff',
        padding: '2rem',
        borderRadius: '12px',
        maxWidth: '500px',
        width: '90%',
        boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
          ⚙️ Customize Your Profile
        </h2>

        <ProfilePictureSelector 
          onSelect={setProfilePicture}
          currentPfp={profilePicture}
        />

        {error && (
          <div style={{
            color: '#d32f2f',
            marginBottom: '1rem',
            padding: '0.8rem',
            background: '#ffebee',
            borderRadius: '6px',
            fontSize: '0.9rem'
          }}>
            {error}
          </div>
        )}

        {success && (
          <div style={{
            color: '#2e7d32',
            marginBottom: '1rem',
            padding: '0.8rem',
            background: '#e8f5e9',
            borderRadius: '6px',
            fontSize: '0.9rem'
          }}>
            {success}
          </div>
        )}

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
          <button
            onClick={handleSaveChanges}
            disabled={loading}
            style={{
              flex: 1,
              padding: '0.8rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1
            }}
          >
            {loading ? 'Saving...' : '✓ Save Changes'}
          </button>
          <button
            onClick={onClose}
            disabled={loading}
            style={{
              flex: 1,
              padding: '0.8rem',
              background: '#e0e0e0',
              color: '#333',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettingsModal;
