// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Head from './components/Head';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Head />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
