// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import HelloWorldPage from './components/HelloWorldPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hello-world" element={<HelloWorldPage />} />
      </Routes>
    </Router>
  );
}

export default App;
