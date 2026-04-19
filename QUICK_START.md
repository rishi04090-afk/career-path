# Quick Start Guide - Career Path Builder

## 🚀 Get Started in 5 Minutes

### Prerequisites
- Node.js installed (v14+)
- MongoDB running locally or MongoDB Atlas account

---

## ⚡ STEP 1: Start the Frontend

```bash
# Open terminal in project root
cd c:\Users\rishi\Apps\career-path

# Install dependencies (first time only)
npm install

# Start the React app
npm start
```

✅ Frontend will open at http://localhost:3000

**What you'll see:**
- 7 different careers with beautiful cards
- Click any career to see the step-by-step roadmap
- Click any step to see detailed information
- Compare careers side-by-side
- Customize career paths with scholarships
- Save careers to bookmarks

---

## ⚡ STEP 2: Start the Backend (Optional)

```bash
# Open NEW terminal in backend directory
cd c:\Users\rishi\Apps\career-path\backend

# Install dependencies (first time only)
npm install

# Create .env file (should already exist, verify it has:)
# MONGODB_URI=mongodb://localhost:27017/career-path
# JWT_SECRET=your_jwt_secret_key
# PORT=5000
# NODE_ENV=development
# CORS_ORIGIN=http://localhost:3000

# Start the server
npm run dev
```

✅ Backend API will run at http://localhost:5000

---

## 🗄️ STEP 3: Setup MongoDB (If using locally)

### Option A: Using Local MongoDB

1. Install MongoDB from https://www.mongodb.com/try/download/community
2. Start MongoDB service:
   - Windows: MongoDB should start automatically
   - Mac: `brew services start mongodb-community`
   - Linux: `sudo systemctl start mongod`

### Option B: Using MongoDB Atlas (Cloud - Easier)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create a cluster
4. Get connection string
5. Update `.env` file:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/career-path
   ```

---

## 🎯 Testing the Features

### Frontend Features (No Backend Needed)
- ✅ Browse careers
- ✅ View career roadmaps
- ✅ See step details
- ✅ Compare careers
- ✅ Customize paths
- ✅ Save bookmarks (local storage)

### Backend Features (Requires Backend Running)

#### Test with Postman or similar tool:

**1. Register a user:**
```
POST http://localhost:5000/api/users/register
Body:
{
  "email": "test@example.com",
  "password": "password123",
  "name": "John Doe"
}
```

**2. Login:**
```
POST http://localhost:5000/api/users/login
Body:
{
  "email": "test@example.com",
  "password": "password123"
}
```
(Save the returned token)

**3. Add a bookmark (use token from login):**
```
POST http://localhost:5000/api/bookmarks
Headers: Authorization: Bearer <your_token>
Body:
{
  "careerId": "developer",
  "careerTitle": "Software Developer",
  "careerIcon": "💻"
}
```

**4. Get all careers:**
```
GET http://localhost:5000/api/careers
```

---

## 🐛 Troubleshooting

### Frontend issues:
- Port 3000 already in use? Kill it: `netstat -ano | findstr :3000`
- Clear browser cache or try incognito mode
- Delete `node_modules` and run `npm install` again

### Backend issues:
- MongoDB not running? Start it (see Step 3)
- Port 5000 already in use? Change PORT in .env
- Check .env file exists with correct MONGODB_URI
- Check npm packages installed: `npm install`

### Connection issues:
- Frontend can't reach backend? Check CORS_ORIGIN in .env
- Make sure both frontend and backend are running
- Try clearing browser cache

---

## 📁 File Structure

```
career-path/
├── src/
│   ├── components/
│   │   ├── CareerSelection.js
│   │   ├── Timeline.js
│   │   ├── StepModal.js
│   │   ├── ComparisonView.js
│   │   └── PathCustomizer.js
│   ├── data/
│   │   └── careers.js (7 careers with full details)
│   ├── App.js (main component)
│   ├── App.css (beautiful styling)
│   └── index.js
│
├── backend/
│   ├── models/ (User, Bookmark, Progress)
│   ├── routes/ (careers, users, bookmarks, progress)
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── README.md (full documentation)
├── IMPLEMENTATION_SUMMARY.md (what was built)
└── package.json
```

---

## 🎨 UI Features

- **Gradient Theme**: Purple to violet backgrounds
- **Smooth Animations**: Fade-in, bounce, slide effects
- **Color Coding**: Blue (school), Green (work), Orange (growth)
- **Responsive**: Works on mobile, tablet, and desktop
- **Professional Design**: Clean, modern, user-friendly

---

## 💡 Pro Tips

1. **Bookmarks**: Saved to browser localStorage, persists even after closing
2. **Customization**: Try the "What If" feature to see how scholarships affect costs
3. **Comparison**: Compare up to 3 careers to see which fits you best
4. **Backend**: Only needed if you want user accounts and progress tracking

---

## ❓ Questions?

- See `README.md` for full documentation
- See `IMPLEMENTATION_SUMMARY.md` for complete feature list
- Check `backend/README.md` for API documentation

---

**You're all set! 🎉 Start exploring career paths!**
