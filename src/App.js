
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [amount,setAmount] = useState(1);
  const [currency1,setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('EUR');
  const [newCurr, setNewCurr] = useState(0)
  const [loading, setLoading] = useState(false)

  const host = 'api.frankfurter.app'

    useEffect(function(){
        
        async function convertCurr(){

          if (!amount || !currency1 || !currency2) {
            console.log('Please provide valid amount and currencies');
            return;
          } else if (currency1===currency2) return

          setLoading(true)
          const res = await fetch(`https://${host}/latest?amount=${amount}&from=${currency1}&to=${currency2}`);
          const data= await res.json()
          setLoading(false)
       
          setNewCurr(data.rates[currency2])
            
        }
           convertCurr();

    },[amount,currency1,currency2])

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
             <option value='AUD'>AUD</option>

            </select>
            
            <select value={currency2} onChange={(e)=> setCurrency2(e.target.value)}>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
            </select>

           {loading ? <Loading/> : <p>Output is : {newCurr} {currency2} </p>}

    </div>
  );
}


function Loading(){
 return (
  <p>Loading...</p>
 )
}

export default App;
