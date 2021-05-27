import './App.css';
import { useState } from 'react'
import FruitContainer from './components/FruitContainer'

function App() {
  const fruits = ['apple 🍎', 'pineapple🍍', 'magos 🥭', 'banana 🍌', 'avocado 🥑', 'kiwi 🥝']


  return (
    <div className="App">
   <h1>Fruit filter</h1>
   <FruitContainer  fruits={fruits}/>

    </div>
  );
}

export default App;
