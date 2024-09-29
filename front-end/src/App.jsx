import Savings from './Components/Savings/Savings'

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Savings/>
      <div class="header">
        <li><a href="#">Logo</a></li>
        <div class="header-right">
          <ul>
            <li><a href="#">Profile</a></li>
          </ul>
        </div>
      </div>
    </div>
      )
      
}

      export default App
