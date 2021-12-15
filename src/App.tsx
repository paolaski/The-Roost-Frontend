import React from 'react';
import './styles.css';
import { BiBody } from "react-icons/bi";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h2 className="texto">Hola Mundo  	😀😸🤡💃💅💥⚡✏⚠⤴⤵</h2>
				<h2><i className='bx-pull-left bx bxs-quote-alt-left bx-lg'/></h2>
				<p><BiBody color="blue" size="64px"/></p>
      </header>
    </div>
  );
}

export default App;
