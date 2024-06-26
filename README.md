


# Applicant Tracking System (ATS) Prototype

This repository contains the code for an Applicant Tracking System (ATS) prototype. The ATS is designed to streamline the recruitment process for organizations, providing functionalities for job posting, candidate applications, and interview scheduling.

## Features

### User Roles
- Candidates: Can register, search for jobs, and apply for positions.
- Employers: Can post job openings and manage applications.
- Coordinators & Recruiters: Can view candidate profiles, manage interview schedules, and oversee the recruitment process.

### Authentication
- Secure user registration and login using JWT for authentication.
- Role-based access control ensuring that users only access the features they are authorized to use.

### Job Management
- Employers can create and manage job postings.
- Job listings include details like title, location, salary, and responsibilities.
- Integration of interview questions for screening candidates.

### Application Management
- Candidates can apply for jobs and track their application status.
- Employers can review applications and manage candidate progress through various recruitment stages.

### Dashboard
- A comprehensive dashboard for viewing all job postings and users in the system.
- Real-time data fetching to provide up-to-date information about the recruitment process.

## Technology Stack

### Backend
- Node.js: Server-side JavaScript runtime.
- Express.js: Web framework for building APIs.
- MongoDB Atlas: Cloud-based NoSQL database for storing application data.
- Mongoose: ODM for MongoDB to model and manage application data.
- JWT: For secure authentication and authorization.
- dotenv: For managing environment variables.

### Frontend
- React: JavaScript library for building user interfaces.
- Axios: Promise-based HTTP client for making API requests.
- Tailwind CSS: Utility-first CSS framework for styling the application.
- React Router: For managing navigation and routing in the application.

## Installation

### Prerequisites
- Node.js
- npm (Node Package Manager)
- MongoDB Atlas account

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/priya1229/ATS.git
   cd ats-prototype
   ```

2. Backend Configuration:
   - Navigate to the backend directory:
     ```bash
     cd ats-backend
     ```
   - Install backend dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `ats-backend` directory with the following contents:
     ```
     MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/ats?retryWrites=true&w=majority
     JWT_SECRET=your_jwt_secret
     ```
   - Start the backend server:
     ```bash
     npm start
     ```

3. Frontend Configuration:
   - Navigate to the frontend directory:
     ```bash
     cd ats-frontend
     ```
   - Install frontend dependencies:
     ```bash
     npm install
     ```
   - Start the frontend development server:
     ```bash
     npm start
     ```

4. Access the Application:
   - Open your browser and navigate to `http://localhost:3000` to use the application.

## Usage

1. Register a new user: Access the registration page to create a new account as a candidate, employer, recruiter, or coordinator.
2. Login: Use your credentials to log in to the system.
3. Dashboard: Access the dashboard to view job postings and user information (depending on your role).
4. Job Management: Employers can create and manage job postings, while candidates can view and apply for jobs.
5. Application Tracking: Track the status of applications and manage candidate progress through various recruitment stages.

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.

