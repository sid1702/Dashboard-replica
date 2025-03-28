import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <HomePage />
      </div>
    </Router>
  );
}

export default App;
