import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Options from './Components/Options';

function App() {
// tilamuuttujat:
  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState("male")
  const [result, setResult] = useState(0)

// functio tuloksen laskemiseksi:
  function calculate (e){

    e.preventDefault()
    let litres= bottles*0.33
    let grams = litres*8*4.5
    let burning = weight/10
    let leftGrams = grams-(burning*time)
    let maleResult= leftGrams/(weight*0.7)
    let femaleResult= leftGrams/(weight*0.6)
    let count=0;

// sukupuolen tarkistus:

    if (gender === "male"){
      count=maleResult
    }
    else if ( gender === "female"){
    count=femaleResult
    }
// vastauksen tarkistus:
    if (count >0){
    setResult(count)
    }
    else {
    setResult(0)
    }
  }

//käyttöliittymä:
  return (
  <>
  <h3>Calculating alcohol blood level</h3>
  <form onSubmit={calculate}>
    <div>
      <label>Weight: </label>
      <input type="number" value={weight} onChange={e => setWeight(e.target.value)}></input>
    </div>
    <div>
      <label>Bottles: </label>
      <select value={bottles} onChange={e => setBottles(e.target.value)}>
        <Options/>
      </select>
    </div>
    <div>
      <label>Time: </label>
     <select value={time} onChange={e => setTime(e.target.value)}>
      {<Options/>}
     </select>
    </div>
    <div>
      <label>Gender: </label>
      <input type="radio" name="gender" defaultChecked value="male" onChange={e => setGender(e.target.value)}></input><label> Male</label>
      <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}></input><label> Female</label>
    </div>
    <div>
      <output>{result.toFixed(1)}</output>
    </div>
    <button>Laske</button>
  </form>
  </>
  );
}

export default App;
