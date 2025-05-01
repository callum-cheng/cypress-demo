import React from 'react'
import './App.css';

function App() {
  const [num, setNum] = React.useState(0);
  const [numInput, setNumInput] = React.useState(1);

  const increment = () => {
    setNum(num + numInput)
  }
  const updateNumInput = (event) => {
    setNumInput(Number(event.target.value))
  }
  const reset = () => {
    setNum(0)
    setNumInput(1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-main">
          <h1>Counter</h1>
          <label data-testid="prompt">Increase by:</label>
          <input className='Num-Input' type="number" data-testid="input-number" onChange={updateNumInput} value={numInput} min={1}></input>
          <p className="result" data-testid="result">{num}</p>
          <div className='inline'>
            <button onClick={increment} data-testid="btn-increment">Increment</button>
            <button onClick={reset} data-testid="btn-reset">Reset</button>
          </div>
          <br />
        </div>
      </header>
    </div>
  );
}

export default App;
