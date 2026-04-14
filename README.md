# mern-stack-basic-connection

🚀 MERN Stack Demo (Frontend + Backend)

A full-stack MERN (MongoDB, Express, React, Node.js) demo project that demonstrates frontend-backend communication using a simple API.

📌 Project Overview

This project includes:

✅ Express backend server with MongoDB connection
✅ React frontend with API integration
✅ REST API endpoint (/test)
✅ Stylish UI for both backend and frontend
✅ Real-time data fetching using fetch()

🏗️ Project Structure
mern-demo/
│
├── backend/
│   ├── server.js
│   ├── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   ├── package.json
│
└── README.md

⚙️ Technologies Used
Backend
Node.js
Express.js
MongoDB
Mongoose
CORS
Nodemon
Frontend
React.js

CSS (Glass UI Design)
🔧 Backend Setup
1. Create Backend Folder
mkdir backend
cd backend
2. Initialize Project
npm init -y
3. Install Dependencies
npm install express cors mongoose nodemon
4. Create Server File
Create server.js and paste your backend code.
5. Run Server
npx nodemon server.js


✅ Output:

MongoDB Connected
Server running on port 5000
🌐 Backend API Endpoints
🔹 Root Route
GET http://localhost:5000/
Returns a beautiful HTML UI
Shows server status
🔹 Test Route
GET http://localhost:5000/test

Response Example:

{
  "success": true,
  "message": "MERN BACKEND IS CONNECTED SUCCESSFULLY",
  "request": {
    "method": "GET",
    "url": "/test",
    "time": "2026-04-14T..."
  },
  "server": {
    "status": "OK",
    "uptime": "10.23 seconds"
  }
}


💻 Frontend Setup
1. Create React App
npx create-react-app frontend
cd frontend
2. Replace App.js
Go to:
src/App.js
Replace with your provided React code.
3. Add CSS
Update:
src/App.css
Paste your styling code.
4. Run Frontend
npm start
🔗 Frontend-Backend Connection

The frontend fetches data from:

http://localhost:5000/test


Workflow:
Click button in React UI
API request sent to backend
Backend responds with JSON
Message displayed on screen


🎯 Features
✨ Modern Glassmorphism UI
⚡ Fast API communication
🔄 Live server status
🌐 Cross-Origin support (CORS enabled)
📦 Clean project structure
🧪 Test API endpoint


🚀 How to Run Full Project

Step 1: Start Backend
cd backend
npx nodemon server.js

Step 2: Start Frontend
cd frontend
npm start

📷 Output

Backend
Runs on: http://localhost:5000
Displays animated UI

Frontend
Runs on: http://localhost:3000
Button fetches backend message