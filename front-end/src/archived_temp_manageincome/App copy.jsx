import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // array of incomes
  // Initialize the array of incomes with a sample data for testing
  const [incomeSources, setIncomeSources] = useState([
    { name: 'Freelancing', amount: 500 }
  ]);

  // we will be taking input of both name and amount and then
  // we will be adding it to the array of incomeSources
  // so we need var. to keep track of those.
  const [incomeName, setIncomeName] = useState('');
  const [incomeAmount, setIncomeAmount] = useState('');

  // number of incomes, totalincomes, searchterm
  const [numincomes, setNumIncomes] = useState(0);
  const [totalamount, seTotalAmount] = useState(0);
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
      setIncomeAmount(0);
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

   return (
    <>
      {/*header*/}
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
      {/*<p>Current search term: {searchTerm}</p>*/}

      {/* List of incomes that allow editing*/}
    <table>
    <thead>
      <tr>
        <th>Income Name</th>
        <th>Income Amount</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {incomeSources.map((income, index) => (
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
            onBlur={(e) => handleEdit(index, 'amount', parseFloat(e.target.textContent) || 0)}
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

      {/*number of incomes*/}
      {/*total income*/}
      <p>Total number of incomes: {numincomes}</p>
      <p>Total amount of incomes: ${totalamount.toFixed(2)}</p>

    </>
  )
}

export default App
