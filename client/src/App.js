import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home'; 
import GlobalStyle from './GlobalStyles';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
   <Router>
  <GlobalStyle />
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</Router>
  );
}

export default App;