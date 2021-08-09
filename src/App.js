import {useState, useEffect} from 'react';
import './App.css';
import Alumno from "./components/Alumno"


function App() {
  const [dolar, setDolar] = useState(0);
  const [euro, setEuro] = useState(0);
  const [bitcoin, setBitcoin] = useState(0);


  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setDolar((total * tipo));
    setEuro((total * tipo) / 1.17);
    setBitcoin((total * tipo) / 45764.60);
  }, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };


  return (
    <div className="App">
      <h1>Convertidor de divisas (Dolar, Euro, Bitcoin)</h1>

      <p>Dolar: {dolar}</p>
      <p>Euro: {euro}</p>
      <p>Bitcoins: {bitcoin}</p>
      <hr />

      <h3>{total}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={1}>Dolar</option>
        <option value={1.17}>Euro</option>
        <option value={45764.60}>bitcoin</option>
      </select>
      <input onChange={handleTotalChange} value={total} />

<Alumno/>

    </div>
  );
}

export default App;