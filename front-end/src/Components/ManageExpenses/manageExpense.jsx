import { useState } from 'react';
import './manageExpense.css';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip } from 'chart.js';

// Register necessary Chart.js components
Chart.register(ArcElement, Tooltip);

function App() {
  const [expenses, setExpenses] = useState([]);
  const [formData, setFormData] = useState({
    category: '',
    date: '',
    amount: '',
  });

  const categories = ['Groceries', 'Entertainment', 'Utilities', 'Rent', 'Other'];
  
  const categoryColors = {
    Groceries: '#FF6384',
    Entertainment: '#36A2EB',
    Utilities: '#FFCE56',
    Rent: '#4BC0C0',
    Other: '#9966FF',
  };

  const handleChange = (event) => {
    console.log(`Selected month: ${event.target.value}`);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.category || !formData.date || !formData.amount) {
      alert('Please fill in all fields.');
      return;
    }
    setExpenses([...expenses, { ...formData, serialNumber: expenses.length + 1 }]);
    setFormData({ category: '', date: '', amount: '' });
  };

  // Calculate total amount
  const totalAmount = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount || 0), 0);

  // Calculate totals per category
  const categoryTotals = categories.reduce((acc, category) => {
    acc[category] = expenses
      .filter(expense => expense.category === category)
      .reduce((sum, expense) => sum + parseFloat(expense.amount || 0), 0);
    return acc;
  }, {});

  // Prepare data for the pie chart
  const pieData = {
    labels: categories,
    datasets: [
      {
        data: categories.map(category => categoryTotals[category] || 0),
        backgroundColor: categories.map(category => categoryColors[category]),
        hoverBackgroundColor: categories.map(category => categoryColors[category]),
      },
    ],
  };

  // Chart options to disable the built-in legend
  const pieOptions = {
    plugins: {
      legend: {
        display: false, // Disable the built-in legend
      },
      tooltip: {
        enabled: true,
      },
    },
    maintainAspectRatio: false, // Allows us to control chart size via CSS
  };

  return (
    <div>
      <br></br>
      <h1 className="title">Manage Expenses</h1>
      
      <select className="selectMonth" onChange={handleChange} required>
        <option value="">Select Month</option>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>

      <form onSubmit={handleFormSubmit} className="expense-form">
        <div className="input-row">
          <select name="category" value={formData.category} onChange={handleFormChange} required>
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleFormChange}
            required
          />
          <input
            type="number"
            name="amount"
            placeholder="$ Amount"
            value={formData.amount}
            onChange={handleFormChange}
            required
            min="0"
            step="0.01"
          />
          <button className="addExpense" type="submit">Add Expense</button>
        </div>
      </form>

      {/* table */}
      <table className="expense-table">
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Category</th>
            <th>Date</th>
            <th>Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.serialNumber}</td>
              <td>{expense.category}</td>
              <td>{expense.date}</td>
              <td>{parseFloat(expense.amount).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Display total amount */}
      <div className="totalAmount">
        <h2>Total: ${totalAmount.toFixed(2)}</h2>
      </div>

      {/* Pie Chart Section */}
      <div className="chart-section">
        <div className="pie-chart">
          <Pie data={pieData} options={pieOptions} />
        </div>
        <div className="legend">
          <h3 class="categoryLegend">Category Legend</h3>
          <ul>
            {categories.map((category) => (
              <li key={category}>
                <span
                  className="legend-color"
                  style={{ backgroundColor: categoryColors[category] }}
                ></span>
                {category}: ${categoryTotals[category] ? categoryTotals[category].toFixed(2) : '0.00'}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default App;
