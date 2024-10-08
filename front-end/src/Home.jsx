import React from 'react'
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
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
            <header className='title'>
                <h1>Expense Tracker</h1>
            </header>

            <main>
                {/* Bar chart */}
                <div className="chart-container">
                    <Bar data={data} options={options} />
                </div>

                <div className="button-container">
                    <Link to='/manage-expenses'><button className="square-button">Add Expense</button></Link>
                    {/* <a href='./Components/ManageExpeneses'><button className="square-button">Add Expense</button></a> */}
                    <Link to='/manage-income'><button className="square-button">Add Expense</button></Link>
                    <Link to='/savings'><button className="square-button">Add Expense</button></Link>

                    {/* <a href='./Components/ManageIncome'><button className="square-button">View Income</button></a>
            <a href='./Components/Savings'><button className="square-button">View Savings</button></a>
            <a href='./Components/ManageExpeneses'><button className="square-button">Settings</button></a>
   */}
                </div>
            </main>

            <footer className='footer'>
                <p>&copy; 2024 Expense Tracker</p>
            </footer>
        </div>
    );
};


export default Home;
