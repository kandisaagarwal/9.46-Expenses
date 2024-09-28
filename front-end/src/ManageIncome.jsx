import { useState } from 'react';
import './ManageIncome.css';

function ManageIncome() {
  // Initialize the array of incomes with a sample data for testing
  const [incomeSources, setIncomeSources] = useState([]);

  // Input fields for new income name and amount
  const [incomeName, setIncomeName] = useState('');
  const [incomeAmount, setIncomeAmount] = useState('');

  // Track total number of incomes and total amount
  const [numIncomes, setNumIncomes] = useState(incomeSources.length);
  const [totalAmount, setTotalAmount] = useState(
    incomeSources.reduce((acc, income) => acc + income.amount, 0)
  );

  // State to track the search term
  const [searchTerm, setSearchTerm] = useState('');

  // Function to add a new income row to the table
  function addIncome() {
    if (incomeName !== '' && incomeAmount > 0) {
      // Create a new income object
      const newIncome = { name: incomeName, amount: parseFloat(incomeAmount) };
      
      // Add the new income to the list of income sources
      const updatedIncomes = [...incomeSources, newIncome];
      setIncomeSources(updatedIncomes);

      // Update the total number of incomes and the total amount
      setNumIncomes(updatedIncomes.length);
      setTotalAmount(totalAmount + newIncome.amount);

      // Clear the input fields
      setIncomeName('');
      setIncomeAmount('');
    }
  }

  // Function to handle inline editing of income (called when the user finishes editing a cell)
  function handleEdit(index, field, value) {
    const updatedIncomes = [...incomeSources];
    const oldAmount = updatedIncomes[index].amount;
    
    // If editing amount, ensure it's a number
    if (field === 'amount') {
      value = parseFloat(value) || 0;
    }

    // Update the specific field (either 'name' or 'amount') of the income at the given index
    updatedIncomes[index] = { ...updatedIncomes[index], [field]: value };

    // Update the state with the modified list
    setIncomeSources(updatedIncomes);

    // Update the total amount only when the amount changes
    if (field === 'amount') {
      setTotalAmount(totalAmount - oldAmount + value);
    }
  }

  // Function to remove an income row from the table
  function removeIncome(index) {
    const incomeToRemove = incomeSources[index];
    const updatedIncomes = incomeSources.filter((_, i) => i !== index);

    // Update the state with the new list
    setIncomeSources(updatedIncomes);

    // Update the total number of incomes and the total amount
    setNumIncomes(updatedIncomes.length);
    setTotalAmount(totalAmount - incomeToRemove.amount);
  }

  // Filter incomes based on search term
  const filteredIncomes = incomeSources.filter((income) =>
    income.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1>Manage Income</h1>
      
      {/* Search bar */}
      <div className="search">
        <input 
          type="text" 
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>


      {/* Table displaying the list of income sources */}
      <table>
        <thead>
          <tr>
            <th>Income Name</th>
            <th>Income Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredIncomes.map((income, index) => (
            <tr key={index}>
              {/* Editable cell for income name */}
              <td
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => handleEdit(index, 'name', e.target.textContent)}
              >
                {income.name}
              </td>

              {/* Editable cell for income amount */}
              <td
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => handleEdit(index, 'amount', e.target.textContent)}
              >
                {income.amount}
              </td>

              {/* Remove button to delete the row */}
              <td>
                <button onClick={() => removeIncome(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

            {/* Input fields and button for adding a new income */}
            <div className="income-form">
        <input
          type="text"
          placeholder="Income Name"
          value={incomeName}
          onChange={(e) => setIncomeName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Income Amount"
          value={incomeAmount}
          onChange={(e) => setIncomeAmount(e.target.value)}
        />
        <button onClick={addIncome}>Add Income</button>
      </div>

      {/* Display total number of incomes and total amount */}
      <p>Total number of incomes: {numIncomes}</p>
      <p>Total amount of incomes: ${totalAmount.toFixed(2)}</p>
    </>
  );
}

export default ManageIncome;
