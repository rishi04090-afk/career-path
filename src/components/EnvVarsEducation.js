import React, { useState } from 'react';

const EnvVarsEducation = () => {
  const [showDetails, setShowDetails] = useState(false);

  const envVarExamples = [
    {
      name: 'MONGODB_URI',
      value: '****hidden****',
      purpose: 'Database connection string with password',
      why_env: 'Password must never be in code or GitHub',
      example: 'mongodb+srv://user:password@cluster.mongodb.net/db'
    },
    {
      name: 'JWT_SECRET',
      value: '****hidden****',
      purpose: 'Secret key for creating login tokens',
      why_env: 'If exposed, hackers can create fake login tokens',
      example: 'your_super_secret_key_12345'
    },
    {
      name: 'PORT',
      value: '5000',
      purpose: 'Which port the server runs on',
      why_env: 'Different ports on different servers',
      example: 'Development: 5000, Production: 80'
    },
    {
      name: 'NODE_ENV',
      value: 'development',
      purpose: 'Tells app whether it\'s in development or production',
      why_env: 'Different behavior for dev vs production',
      example: 'development, staging, production'
    },
    {
      name: 'CORS_ORIGIN',
      value: 'http://localhost:3000',
      purpose: 'Which websites can use the API',
      why_env: 'Different domains for dev vs production',
      example: 'Dev: localhost:3000, Prod: yourwebsite.com'
    }
  ];

  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#fff',
      padding: '2rem',
      borderRadius: '12px',
      marginTop: '2rem',
      marginBottom: '2rem'
    }}>
      <h2>🔐 What Are Environmental Variables?</h2>
      
      <p style={{ fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
        <strong>Environmental Variables</strong> are settings stored on your computer that programs can read. 
        Think of them like invisible config files that tell your app how to behave.
      </p>

      <div style={{
        background: 'rgba(255,255,255,0.1)',
        padding: '1.2rem',
        borderRadius: '8px',
        marginBottom: '1.5rem',
        border: '2px solid rgba(255,255,255,0.3)'
      }}>
        <h3>❌ The WRONG Way (NEVER do this!):</h3>
        <pre style={{
          background: '#000',
          color: '#00ff00',
          padding: '1rem',
          borderRadius: '6px',
          overflow: 'auto',
          fontSize: '0.9rem'
        }}>
{`const DATABASE_PASSWORD = "3474Fishy";
const JWT_SECRET = "super_secret_key";

// Now if you push to GitHub, ANYONE can see these!
// Hackers can steal your database and fake logins!`}
        </pre>
      </div>

      <div style={{
        background: 'rgba(255,255,255,0.1)',
        padding: '1.2rem',
        borderRadius: '8px',
        marginBottom: '1.5rem',
        border: '2px solid rgba(255,255,255,0.3)'
      }}>
        <h3>✅ The RIGHT Way (use environment variables!):</h3>
        <pre style={{
          background: '#000',
          color: '#00ff00',
          padding: '1rem',
          borderRadius: '6px',
          overflow: 'auto',
          fontSize: '0.9rem'
        }}>
{`// .env file (NEVER push to GitHub):
MONGODB_URI=mongodb+srv://user:password@cluster...
JWT_SECRET=super_secret_key

// app.js (SAFE to push to GitHub):
const dbUri = process.env.MONGODB_URI;
const secret = process.env.JWT_SECRET;

// These are loaded from .env file, not hardcoded!`}
        </pre>
      </div>

      <h3>📌 Why Use Environment Variables?</h3>
      <ul style={{ fontSize: '1rem', lineHeight: '2' }}>
        <li>🔒 <strong>Security:</strong> Passwords/secrets never in code</li>
        <li>🌍 <strong>Different servers:</strong> Dev uses localhost, production uses real domain</li>
        <li>👥 <strong>Team safety:</strong> Everyone can use the code, but with different secrets</li>
        <li>⚙️ <strong>Easy to change:</strong> Update settings without rewriting code</li>
        <li>📦 <strong>GitHub safe:</strong> Can push code without exposing secrets (if .env is in .gitignore)</li>
      </ul>

      <button
        onClick={() => setShowDetails(!showDetails)}
        style={{
          background: 'rgba(255,255,255,0.3)',
          color: '#fff',
          border: '2px solid #fff',
          padding: '0.8rem 1.5rem',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '1rem',
          marginTop: '1.5rem',
          transition: 'all 0.3s'
        }}
      >
        {showDetails ? '▼ Hide Examples' : '▶ Show This App\'s Environment Variables'}
      </button>

      {showDetails && (
        <div style={{ marginTop: '1.5rem' }}>
          <h3>🛠️ Environment Variables Used in This App:</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1rem'
          }}>
            {envVarExamples.map((env) => (
              <div key={env.name} style={{
                background: 'rgba(0,0,0,0.2)',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <h4 style={{ color: '#ffd700', marginBottom: '0.5rem' }}>
                  {env.name}
                </h4>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  <strong>Current Value:</strong> {env.value}
                </p>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  <strong>Purpose:</strong> {env.purpose}
                </p>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: '#ffb3d9' }}>
                  <strong>Why environment?</strong> {env.why_env}
                </p>
                <p style={{ fontSize: '0.85rem', color: '#ccc' }}>
                  <strong>Example:</strong> {env.example}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            background: 'rgba(0,0,0,0.2)',
            padding: '1.2rem',
            borderRadius: '8px',
            marginTop: '1.5rem',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <h4>📁 Where to Find These:</h4>
            <pre style={{
              background: '#000',
              color: '#00ff00',
              padding: '1rem',
              borderRadius: '6px',
              overflow: 'auto',
              fontSize: '0.85rem',
              marginTop: '0.5rem'
            }}>
{`Backend folder: backend/.env

MONGODB_URI=mongodb+srv://user:pass@cluster...
JWT_SECRET=your_secret_key
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000`}
            </pre>
          </div>

          <div style={{
            background: 'rgba(255,215,0,0.1)',
            padding: '1.2rem',
            borderRadius: '8px',
            marginTop: '1.5rem',
            border: '2px solid #ffd700'
          }}>
            <h4>⚠️ IMPORTANT: .gitignore</h4>
            <p style={{ marginBottom: '0.8rem' }}>
              Never push your .env file to GitHub! It's already in .gitignore, but verify it:
            </p>
            <pre style={{
              background: '#000',
              color: '#00ff00',
              padding: '1rem',
              borderRadius: '6px',
              overflow: 'auto',
              fontSize: '0.85rem'
            }}>
{`# .gitignore file should contain:
node_modules/
.env
.env.local
.env.*.local`}
            </pre>
            <p style={{ marginTop: '0.8rem', fontSize: '0.9rem' }}>
              ✅ This app's .gitignore already has this!
            </p>
          </div>
        </div>
      )}

      <div style={{
        background: 'rgba(0,0,0,0.2)',
        padding: '1.2rem',
        borderRadius: '8px',
        marginTop: '1.5rem',
        border: '1px solid rgba(255,255,255,0.2)'
      }}>
        <h4>📚 For Your Teacher:</h4>
        <p style={{ marginBottom: '0.8rem' }}>
          This Career Path Builder app demonstrates proper use of environment variables:
        </p>
        <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', marginLeft: '1rem' }}>
          <li>✅ Sensitive data (passwords) stored in .env</li>
          <li>✅ Configuration values read from process.env</li>
          <li>✅ Different settings for different environments</li>
          <li>✅ .env file added to .gitignore (never pushed to GitHub)</li>
          <li>✅ Backend code is GitHub-safe even though it handles secrets</li>
        </ul>
      </div>
    </div>
  );
};

export default EnvVarsEducation;
