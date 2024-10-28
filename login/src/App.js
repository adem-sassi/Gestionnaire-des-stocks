import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { StyledContainer } from './components/Styles';
import ProtectedResource from './components/ProtectedResource'; // Import the ProtectedResource component

function App() {
  const isAuthenticated = !!localStorage.getItem('token'); // Check if the user is authenticated

  return (
    <Router>
      <StyledContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          
          {/* Protected Route: Dashboard */}
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
          
          {/* Example of a protected resource route */}
          <Route path="/protected" element={isAuthenticated ? <ProtectedResource /> : <Navigate to="/login" />} />

          {/* Add other routes as needed */}
        </Routes>
      </StyledContainer>
    </Router>
  );
}

export default App;
