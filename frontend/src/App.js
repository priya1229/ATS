// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import CreateJobPage from './pages/CreateJobPage';
import JobListPage from './pages/JobListPage';
import JobDetailsPage from './pages/JobDetailsPage';
import ReviewApplicationsPage from './pages/ReviewApplicationsPage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/create-job" element={<CreateJobPage />} />
            <Route path="/jobs" element={<JobListPage />} />
            <Route path="/job/:id" element={<JobDetailsPage />} />
            <Route path="/review-applications" element={<ReviewApplicationsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
