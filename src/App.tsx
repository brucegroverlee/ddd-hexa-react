import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './contexts/home/home';
import Settings from './contexts/home/settings';
import Signup from './contexts/auth/signup';
import Signin from './contexts/auth/signin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
