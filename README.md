# TaskNest

TaskNest is a full-stack task management application built with React and Node.js.

Users can register and log in securely, create personal tasks, update them, mark them as completed, delete them, and manage their tasks through a simple responsive interface.

## Features

- User registration
- User login
- Password hashing with bcryptjs
- JWT-based authentication
- Protected routes
- User-specific tasks
- Add tasks
- Update tasks
- Delete tasks
- Mark tasks as completed
- Filter tasks
- Search tasks
- Stats page
- Settings page
- Logout
- REST API
- MongoDB database
- Responsive UI

## Tech Stack

### Frontend

- React
- Vite
- React Router
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- JSON Web Token (JWT)
- CORS

## Project Structure

The project is divided into two separate repositories:

### Frontend

`tasknest-react`

The frontend is built with React and Vite.

### Backend

`tasknest-api`

The backend provides REST APIs for authentication and task management.

## Authentication

TaskNest uses JWT authentication.

When a user registers or logs in successfully:

1. The backend verifies the user's credentials.
2. A JWT token is generated.
3. The frontend stores the token in localStorage.
4. The API wrapper sends the token using the Authorization header.
5. Protected routes require a valid token.
6. Tasks are associated with the logged-in user.

## API

The backend provides authentication, task management, and health check APIs.

### Authentication

POST /api/auth/register
POST /api/auth/login

### Tasks

GET /api/tasks
GET /api/tasks/:id
POST /api/tasks
PUT /api/tasks/:id
DELETE /api/tasks/:id

### Health Check

GET /api/health

### Deployment

- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

## Live Demo

### Frontend
https://tasknest-react.vercel.app

### Backend
https://tasknest-api-ysgd.onrender.com