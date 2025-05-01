import React from 'react';
import './App.css';

function App() {
  const [num, setNum] = React.useState(0);
  const [numInput, setNumInput] = React.useState(1);

  const increment = () => {
    setNum(num + numInput);
  };
  const updateNumInput = (event) => {
    setNumInput(Number(event.target.value));
  };
  const reset = () => {
    setNum(0);
    setNumInput(1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <main className="App-main">
          <h1>Counter</h1>
          <label htmlFor="num-input" data-testid="prompt">Increase by:</label>
          <input
            id="num-input"
            className="Num-Input"
            type="number"
            data-testid="input-number"
            onChange={updateNumInput}
            value={numInput}
            min={1}
            aria-label="Enter the increment value"
          />
          <p className="result" data-testid="result" aria-live="polite">
            {num}
          </p>
          <div className="inline">
            <button onClick={increment} data-testid="btn-increment" aria-label="Increment the counter result">
              Increment
            </button>
            <button onClick={reset} data-testid="btn-reset" aria-label="Reset the counter">
              Reset
            </button>
          </div>
          <br />
        </main>
      </header>
    </div>
  );
}

export default App;
