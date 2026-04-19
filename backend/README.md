# Career Path Builder - Backend API

This is the Node.js + Express backend for the Career Path Builder application. It provides APIs for managing careers, user accounts, bookmarks, and progress tracking.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the backend directory and add:

```
MONGODB_URI=mongodb://localhost:27017/career-path
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

### 3. Start MongoDB

Make sure MongoDB is running locally or update MONGODB_URI in .env to your cloud instance.

### 4. Run the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on http://localhost:5000

## API Endpoints

### Careers
- `GET /api/careers` - Get all careers
- `GET /api/careers/:id` - Get single career
- `GET /api/careers/:id/steps` - Get career steps

### Authentication
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user
- `GET /api/users/profile` - Get current user (requires token)

### Bookmarks
- `GET /api/bookmarks` - Get user's bookmarks (requires token)
- `POST /api/bookmarks` - Add bookmark (requires token)
- `DELETE /api/bookmarks/:careerId` - Remove bookmark (requires token)

### Progress
- `GET /api/progress/:careerId` - Get progress for career (requires token)
- `POST /api/progress/:careerId/:stepId` - Update step progress (requires token)
- `GET /api/progress/:careerId/summary` - Get career completion summary (requires token)

## Authentication

JWT tokens are required for bookmarks and progress endpoints. Include the token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## Project Structure

```
backend/
├── models/          # Mongoose schemas
├── routes/          # API routes
├── controllers/     # Business logic (optional)
├── server.js        # Express app entry point
├── .env             # Environment variables
└── package.json     # Dependencies
```

## Database Schema

### User
- email (unique)
- password (hashed with bcrypt)
- name
- createdAt
- updatedAt

### Bookmark
- userId (reference to User)
- careerId
- careerTitle
- careerIcon
- createdAt

### Progress
- userId (reference to User)
- careerId
- stepId
- status (not-started, in-progress, completed)
- completedDate
- notes
- createdAt
- updatedAt

## Security Notes

- Passwords are hashed using bcryptjs
- JWT tokens expire in 7 days
- Always change JWT_SECRET in production
- Use environment variables for sensitive data
- Enable HTTPS in production

## Development

To add new features:
1. Create a route in the `routes/` directory
2. Create/update models in `models/`
3. Add error handling
4. Test with Postman or similar tool

## Future Enhancements

- Progress analytics and visualizations
- Email notifications
- Real database for career data
- Advanced filtering and search
- Social features (sharing paths, etc.)
