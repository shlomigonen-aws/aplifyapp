import logo from './PGE-Symbol.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" height="300"/>
        <p>
          Welcome to SMD Client Web Application Data Download Tool (SCWADD) 
        </p>
        <a
          className="App-link"
          href="https://www.pge.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          By PG&E
        </a>
      </header>
    </div>
  );
}

export default App;
