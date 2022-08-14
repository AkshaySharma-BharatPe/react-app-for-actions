import logo from './logo.svg';
import img1 from './assets/1.jpeg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpeg';
import img4 from './assets/4.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <img src={img1} className="App-logo" alt="logo" />
      <img src={img2} className="App-logo" alt="logo" />
      <img src={img3} className="App-logo" alt="logo" />
      <img src={img4} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
