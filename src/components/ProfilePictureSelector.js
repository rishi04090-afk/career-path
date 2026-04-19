import React, { useState } from 'react';

const ProfilePictureSelector = ({ onSelect, currentPfp }) => {
  const [selectedOption, setSelectedOption] = useState('avatar1');
  const [uploadedImage, setUploadedImage] = useState(null);

  // Default avatar options (emoji + color combinations)
  const defaultAvatars = [
    { id: 'avatar1', emoji: '👨‍💼', color: '#667eea', label: 'Professional' },
    { id: 'avatar2', emoji: '👩‍💼', color: '#764ba2', label: 'Professional Alt' },
    { id: 'avatar3', emoji: '🎓', color: '#f093fb', label: 'Student' },
    { id: 'avatar4', emoji: '💼', color: '#4facfe', label: 'Business' },
    { id: 'avatar5', emoji: '🚀', color: '#43e97b', label: 'Ambitious' },
    { id: 'avatar6', emoji: '⭐', color: '#fa709a', label: 'Star' },
    { id: 'avatar7', emoji: '🎯', color: '#feca57', label: 'Focused' },
    { id: 'avatar8', emoji: '💡', color: '#48dbfb', label: 'Innovator' }
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageData = event.target.result;
        setUploadedImage(imageData);
        onSelect({
          type: 'uploaded',
          data: imageData
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSelectDefault = (avatar) => {
    setSelectedOption(avatar.id);
    setUploadedImage(null);
    onSelect({
      type: 'default',
      avatar: avatar
    });
  };

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <h4 style={{ marginBottom: '1rem', color: '#333' }}>Choose a Profile Picture</h4>

      {/* Default Avatars */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(70px, 1fr))',
        gap: '0.8rem',
        marginBottom: '1.5rem'
      }}>
        {defaultAvatars.map((avatar) => (
          <button
            key={avatar.id}
            onClick={() => handleSelectDefault(avatar)}
            style={{
              background: avatar.color,
              border: selectedOption === avatar.id && !uploadedImage ? '3px solid #000' : '2px solid transparent',
              borderRadius: '50%',
              width: '70px',
              height: '70px',
              cursor: 'pointer',
              fontSize: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s',
              boxShadow: selectedOption === avatar.id && !uploadedImage ? '0 0 10px rgba(0,0,0,0.3)' : 'none'
            }}
            title={avatar.label}
          >
            {avatar.emoji}
          </button>
        ))}
      </div>

      {/* Upload Custom Image */}
      <div style={{
        border: '2px dashed #ddd',
        padding: '1rem',
        borderRadius: '8px',
        textAlign: 'center',
        background: '#f9f9f9'
      }}>
        <label style={{
          display: 'block',
          cursor: 'pointer'
        }}>
          <div style={{
            fontSize: '2rem',
            marginBottom: '0.5rem'
          }}>
            📸
          </div>
          <span style={{ color: '#667eea', fontWeight: 'bold' }}>
            Upload Your Own Picture
          </span>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
        </label>
        {uploadedImage && (
          <div style={{ marginTop: '0.8rem' }}>
            <img
              src={uploadedImage}
              alt="Uploaded"
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #667eea'
              }}
            />
            <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.5rem' }}>
              ✓ Image selected
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePictureSelector;
