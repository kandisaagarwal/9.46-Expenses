
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';  

const App = () => {
  const monthlyExpenses = [500, 700, 800, 600, 900, 1000, 750, 850, 950, 650, 550, 1100];
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Monthly Expenses',
        data: monthlyExpenses,
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>Expense Tracker</h1>
      </header>

      <main>
        {/* Bar chart */}
        <div className="chart-container">
          <Bar data={data} options={options} />
        </div>

        {/* Four buttons */}
        <div className="button-container">
          <button className="square-button">Add Expense</button>
          <button className="square-button">View Expenses</button>
          <button className="square-button">Manage Budget</button>
          <button className="square-button">Settings</button>
        </div>
      </main>

      <footer>
        <p>&copy; 2024 Expense Tracker</p>
      </footer>
    </div>
  );
};
=======

import Savings from './Components/Savings/Savings'
import { useState } from 'react'
import './App.css'
import React from 'react';

function App() {
  return 

    <div className="App">
     
    </div>
  );
}

export default App;
