import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Game from './Game';
import Test from './Test';


function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/Game" element={<Game />} />
        <Route path="/t" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;