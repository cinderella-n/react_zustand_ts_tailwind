import React from 'react';
// import logo from './logo.svg';
import './App.css';
import BearCounter from './components/BearCounter';
import { useBearStore } from './store/useStore';
function App() {
  const reset = useBearStore((state) => state.reset);
  const setBears = useBearStore((state) => state.increase);

  React.useEffect(() => {
    reset();
    setBears();
  }, [reset, setBears]);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
      </header>
      <BearCounter />
    </div>
  );
}

export default App;
