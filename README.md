# Job Portal Backend

This is the backend for a Job Portal application built with **Node.js**, **Express**, and **MongoDB**. It supports user authentication, company registration, job postings, and job applications.

---

## 🚀 Features

- User registration, login, logout, and profile update
- Company registration and management
- Job posting, retrieval (all/by ID), and admin-specific job listings
- Job application system with status updates
- Token-based authentication using JWT
- Protected routes with middleware
- CORS-enabled API

---

## 📦 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **JWT** for authentication
- **bcryptjs** for password hashing
- **dotenv** for environment management
- **cookie-parser**
- **CORS**

---


---

## 🛠 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/job-portal-backend.git
   cd server
   npm install

2. **Create a .env file inside server**
     ```
   MONGO_URI=your_mongodb_uri
   PORT=5050
   jWT_SECRET=your_jwt_secret
   NODE_ENV=development

API Endpoints
 ```
   User Routes
  POST /api/v1/user/register
  
  POST /api/v1/user/login
  
  POST /api/v1/user/logout
  
  PUT /api/v1/user/update/:id
  
  Company Routes
  POST /api/v1/company/register
  
  GET /api/v1/company/get
  
  GET /api/v1/company/get/:id
  
  PUT /api/v1/company/update/:id
  
  Job Routes
  POST /api/v1/job/post
  
  GET /api/v1/job/get
  
  GET /api/v1/job/get/:id
  
  GET /api/v1/job/getadminjobs
  
  Application Routes
  POST /api/v1/application/apply/:id
  
  GET /api/v1/application/get
  
  GET /api/v1/application/:id/applicants
  
  POST /api/v1/application/status/:id/update


To Run the backend

node server.js


