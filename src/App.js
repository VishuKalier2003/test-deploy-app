import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import About from './components/about';

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
      <BrowserRouter basename="/test-deploy-app">
        <Router>
          <Route exact path="/test-deploy-app/"></Route>
          <Route exact path="/test-deploy-app/about" element={About}></Route>
        </Router>
        </BrowserRouter>
    </div>
  );
}

export default App;
