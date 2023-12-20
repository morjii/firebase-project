import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './homepage';
import ContactsPage from './ContactsPage';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/contacts" element={<ContactsPage />} />
    </Routes>
  </Router>
  
  );
}

export default App;
