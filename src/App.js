
import { useState } from 'react';
import './App.css';

function App() {

  const [amount,setAmount] = useState('');
  const [currency1,setCurrency1] = useState(0)
  const [currency2, setCurrency2] = useState(0)



  return (
    <div>
      
      <input 
      type='number' 
      value={amount} 
      onChange={(e)=>setAmount(e.target.value)}  
      placeholder='type in the currency'/>
            
            <select onChange={(e)=> setCurrency1(e.target.value)} value={currency1}>
             <option value='USD'>USD</option>
             <option value='EUR'>EUR</option>
             <option value='NGN'>NGN</option>

            </select>
            
            <select value={currency2} onChange={(e)=> setCurrency2(e.target.value)}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="NGN">NGN</option>
            </select>

            <p>Output is :</p>

    </div>
  );
}

export default App;
