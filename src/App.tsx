import React from 'react';
import { useState } from 'react';
import './App.css';
import Product from './components/products';
import data from './data.json';

function App() {
  const [listOfProd, setList] = useState(data.products);

  return (
    <div className='grid-container'>
      <header>
        <a href='/'>Harpazar</a>
      </header>
      <main>
        <div className='main'>
          <Product props={listOfProd} />
        </div>
        <div className='sidebar'>Cart items</div>
      </main>
      <footer>all rights reserved</footer>
    </div>
  );
}

export default App;
