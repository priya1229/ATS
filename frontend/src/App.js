// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CreateJobPage from './pages/CreateJobPage';
import DashboardPage from './pages/DashboardPage';
import ReviewApplicationsPage from './pages/ReviewApplicationsPage';
import { AuthProvider, useAuth } from './context/AuthContext'; // Import AuthProvider and useAuth

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/create-job" element={<CreateJobPage />} />
            <Route path="/review-applications" element={<ReviewApplicationsPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

const PrivateRoutes = () => {
  const { user } = useAuth();

  return user ? (
    <Routes>
      {user.role === 'Employer' ? (
        <>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/create-job" element={<CreateJobPage />} />
        </>
      ) : user.role === 'Recruiter' ? (
        <Route path="/review-applications" element={<ReviewApplicationsPage />} />
      ) : (
        <Route path="*" element={<Navigate to="/" />} />
      )}
    </Routes>
  ) : (
    <Navigate to="/login" />
  );
};

export default App;
