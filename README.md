# 🎯 Career Path Builder

A full-stack web application that helps students and career seekers explore different career paths with detailed step-by-step roadmaps, costs, timelines, and salary projections.

## 🌟 Features

### Frontend (React)
- **Career Selection**: Browse 7+ different careers with icons and descriptions
- **Interactive Timeline**: Visual step-by-step roadmap for each career
- **Detailed Step Information**: Click any step to see duration, cost, requirements, and salary info
- **Career Comparison**: Compare up to 3 careers side-by-side
- **Bookmarks**: Save favorite careers locally or to your profile
- **What If Exploration**: Customize your path with scholarships and fast-track options
- **Beautiful UI**: Modern, animated, gradient-based design with responsive layout
- **Progress Tracking**: Track your progress on each career path

### Backend (Node.js + Express + MongoDB)
- **User Authentication**: Register, login, and secure JWT-based authentication
- **Bookmark Management**: Save/manage career bookmarks
- **Progress Tracking**: Track which steps you've completed
- **RESTful API**: Well-structured endpoints for all features
- **Database Integration**: MongoDB for persistent data storage

## 🚀 Getting Started

### Prerequisites
- Node.js v14+
- MongoDB (local or cloud)
- npm or yarn

### Frontend Setup

```bash
# Navigate to project root
cd career-path

# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at http://localhost:3000

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Configure environment variables
# Create .env file (see backend/README.md for details)

# Start the backend server
npm run dev
```

The API will run at http://localhost:5000

## 📁 Project Structure

```
career-path/
├── src/
│   ├── components/
│   │   ├── CareerSelection.js      # Career selection UI
│   │   ├── Timeline.js             # Step-by-step timeline
│   │   ├── StepModal.js            # Detailed step information
│   │   ├── ComparisonView.js       # Career comparison table
│   │   └── PathCustomizer.js       # What If exploration
│   ├── data/
│   │   └── careers.js              # Career data (7+ careers)
│   ├── App.js                       # Main app component
│   ├── App.css                      # Beautiful styling
│   └── index.js                     # React entry point
├── backend/
│   ├── models/                      # MongoDB schemas
│   ├── routes/                      # API endpoints
│   ├── server.js                    # Express server
│   ├── .env                         # Environment variables
│   └── package.json                 # Dependencies
└── public/
    └── index.html                   # HTML template
```

## 🎓 Careers Included

1. **🧑‍🏫 Teacher** - 9-11 years, $30k-$110k total cost
2. **👩‍⚕️ Nurse** - 8-10 years, $15k-$60k total cost
3. **💻 Software Developer** - 7-9 years, $20k-$100k total cost
4. **🔌 Electrician** - 7-9 years, $5k-$15k total cost
5. **⚖️ Lawyer** - 11-13 years, $60k-$250k total cost
6. **💊 Pharmacist** - 10-12 years, $80k-$200k total cost
7. **🔧 Plumber** - 6-8 years, $5k-$15k total cost

Each career includes:
- Step-by-step roadmap from high school to advanced roles
- Duration for each step
- Cost ranges for education
- Expected salary after each milestone
- Prerequisites and requirements
- Popular schools and institutions

## 🔌 API Endpoints

### Careers
```
GET /api/careers              - Get all careers
GET /api/careers/:id          - Get single career
GET /api/careers/:id/steps    - Get career steps
```

### Authentication
```
POST /api/users/register      - Register new user
POST /api/users/login         - Login user
GET /api/users/profile        - Get current user (auth required)
```

### Bookmarks (requires JWT token)
```
GET /api/bookmarks            - Get user's bookmarks
POST /api/bookmarks           - Add bookmark
DELETE /api/bookmarks/:careerId - Remove bookmark
```

### Progress (requires JWT token)
```
GET /api/progress/:careerId   - Get progress for career
POST /api/progress/:careerId/:stepId - Update step progress
GET /api/progress/:careerId/summary - Get completion summary
```

## 💾 Data Models

### User
```javascript
{
  email: String (unique),
  password: String (hashed),
  name: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Bookmark
```javascript
{
  userId: ObjectId,
  careerId: String,
  careerTitle: String,
  careerIcon: String,
  createdAt: Date
}
```

### Progress
```javascript
{
  userId: ObjectId,
  careerId: String,
  stepId: Number,
  status: String ('not-started', 'in-progress', 'completed'),
  completedDate: Date,
  notes: String,
  createdAt: Date,
  updatedAt: Date
}
```

## 🎨 Design Features

- **Gradient Theme**: Purple to violet gradient backgrounds
- **Smooth Animations**: Fade-in, slide-in, and bounce effects
- **Hover Effects**: Interactive card elevations and transformations
- **Color Coding**: Blue (school), green (work), orange (growth)
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Dark Mode Ready**: Can be extended with dark theme

## 🔐 Security

- Passwords hashed with bcryptjs
- JWT tokens for authentication
- Token expiration (7 days)
- CORS protection
- Environment variables for sensitive data

## 🚀 Future Enhancements

- [ ] AI-powered career recommendations
- [ ] Progress analytics and charts
- [ ] Email notifications
- [ ] Social sharing features
- [ ] Real salary data from APIs
- [ ] Job market trends
- [ ] Networking features
- [ ] Mentorship connections
- [ ] Dark theme
- [ ] Multiple languages

## 📖 Documentation

- Frontend: See [src/components/](src/components/) for component details
- Backend: See [backend/README.md](backend/README.md) for API documentation

## 🤝 Contributing

Feel free to fork, modify, and improve this project!

## 📝 License

This project is open source and available under the MIT License.

## 💬 Questions?

Check the README files in each directory for more detailed information:
- Frontend features: [Creating new components, styling with CSS](src/)
- Backend setup: [API routes, database schema](backend/README.md)

---

**Happy career planning! 🎯**

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
