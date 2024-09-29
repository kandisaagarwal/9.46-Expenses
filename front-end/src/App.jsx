
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';  
import ManageExpenses from './Components/ManageExpenses';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return(
    <div>
    <Home />
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/manage-income" element={<ManageIncome />} />
      <Route path="/manage-expenses" element={<ManageExpenses />} />
      <Route path="/savings" element={<Savings />} />
    </Routes>
  </Router>
  </div>
  )
};

export default App;
