import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { JobDescriptionGenerator } from './components/JobDescriptionGenerator';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/generator" element={<JobDescriptionGenerator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;