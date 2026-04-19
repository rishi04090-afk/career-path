import React from 'react';

const ProfilePictureDisplay = ({ user, size = 'small' }) => {
  if (!user) return null;

  const sizes = {
    small: { width: '40px', height: '40px', fontSize: '1.2rem' },
    medium: { width: '60px', height: '60px', fontSize: '1.8rem' },
    large: { width: '100px', height: '100px', fontSize: '3rem' }
  };

  const currentSize = sizes[size] || sizes.small;

  // If user has uploaded custom image
  if (user.profilePicture && user.profilePicture.type === 'uploaded') {
    return (
      <img
        src={user.profilePicture.data}
        alt={user.name || user.email}
        style={{
          width: currentSize.width,
          height: currentSize.height,
          borderRadius: '50%',
          objectFit: 'cover',
          border: '2px solid #667eea'
        }}
      />
    );
  }

  // If user has default avatar
  if (user.profilePicture && user.profilePicture.type === 'default') {
    const avatar = user.profilePicture.avatar;
    return (
      <div
        style={{
          width: currentSize.width,
          height: currentSize.height,
          borderRadius: '50%',
          background: avatar.color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: currentSize.fontSize,
          border: '2px solid #ddd'
        }}
      >
        {avatar.emoji}
      </div>
    );
  }

  // Fallback - return empty div
  return (
    <div
      style={{
        width: currentSize.width,
        height: currentSize.height,
        borderRadius: '50%',
        background: '#ddd',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: currentSize.fontSize
      }}
    >
      ❓
    </div>
  );
};

export default ProfilePictureDisplay;
