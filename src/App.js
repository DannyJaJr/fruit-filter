import './App.css';
import { useState } from 'react'
import FruitContainer from './components/FruitContainer'

function App() {
  const fruits = ['apple ๐', 'pineapple๐', 'magos ๐ฅญ', 'banana ๐', 'avocado ๐ฅ', 'kiwi ๐ฅ']


  return (
    <div className="App">
   <h1>Fruit filter</h1>
   <FruitContainer  fruits={fruits}/>

    </div>
  );
}

export default App;
