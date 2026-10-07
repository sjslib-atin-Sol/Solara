import './App.css';
import { useState } from 'react';

function App() {
  const myname = "shen";
  const [myvalue, setMyValue] = useState(0);

  const addfunction = () => setMyValue((value) => value + 1);
  const subtractfunction = () => setMyValue((value) => value - 1);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Solara, I am {myname}!</h1>
        <h3>Happy Scripting!</h3>
        <button type="button" onClick={addfunction}>
          +
        </button>
        <button type="button" onClick={subtractfunction}>
          - 
        </button>
        <p aria-live="polite">Clicked {myvalue} times</p>
      </header>
    </div>
  );
}

export default App;
