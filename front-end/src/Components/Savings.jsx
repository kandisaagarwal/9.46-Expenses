import { useState } from 'react';
import './Savings.css';

function Savings() {
    const [expenses, setExpenses] = useState([
        { id: 1, month: 'Jan', income: 7809, expense: 902, savings: 7809 - 902 },
        { id: 2, month: 'Feb', income: 7809, expense: 902, savings: 7809 - 902 },
        { id: 3, month: 'March', income: 7809, expense: 902, savings: 7809 - 902 },
        { id: 1, month: 'May', income: 7809, expense: 902, savings: 7809 - 902 },
        { id: 1, month: 'June', income: 7809, expense: 902, savings: 7809 - 902 },
        { id: 1, month: 'July', income: 7809, expense: 902, savings: 7809 - 902 },
    ]);

    const [savings, setSavings] = useState([
        { id: 1, place: 'Equity', investedamt: 8000, maturityamt: 7300, percentage: (7300-8000)/100, date: '03-22-2024', maturity: 'none'},
        { id: 2, place: 'FD', investedamt: 33442, maturityamt: 33800, percentage: (33800-33442)/100, date: '03-22-2024', maturity: '03-22-2025'},
    ]);

    // const updateExpenses = (newIncome, newExpense) => {
    //     setExpenses(prevExpenses => prevExpenses.map(expense => 
    //         expense.id === 1 ? { ...expense, income: newIncome, expense: newExpense, savings: newIncome - newExpense } : expense
    //     ));
    // };

    const year = ['2020', '2021', '2022', '2023', '2024'];

    // Calculate total savings
    const totalSavings = expenses.reduce((acc, expense) => acc + parseFloat(expense.savings || 0), 0);
    

    return (
        <div>
            <h1 className="title">Savings Tracker</h1>

            <select className="selectyear">
                <option value="">Select Year</option>
                {year.map((y) => (
                    <option key={y} value={y}>{y}</option>
                ))}
            </select>

            <table className="savings-table">
                <thead>
                    <tr>
                        <th>Serial No.</th>
                        <th>Month</th>
                        <th>Income ($)</th>
                        <th>Expense ($)</th>
                        <th>Savings ($)</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{expense.month}</td>
                            <td>{expense.income}</td>
                            <td>{expense.expense}</td>
                            <td>{expense.savings}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Display total savings */}
            <div className="totalSavings">
                <h2>Total Savings: ${totalSavings.toFixed(2)}</h2>
            </div>

            <table className="savings-table">
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Invested In</th>
                        <th>Investment Amount</th>
                        <th>Maturity Amount ($)</th>
                        <th>Growth Percentage (%)</th>
                        <th>Invested On ($)</th>
                        <th>Maturity Date(If any) ($)</th>
                    </tr>
                </thead>
                <tbody>
                    {savings.map((savings, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{savings.place}</td>
                            <td>{savings.investedamt}</td>
                            <td>{savings.maturityamt}</td>
                            <td>{savings.percentage}</td>
                            <td>{savings.date}</td>
                            <td>{savings.maturity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Display total savings */}
            <div className="totalSavings">
                <h2>Total Savings: ${totalSavings.toFixed(2)}</h2>
            </div>
            
        </div>
    );
}

export default Savings;
