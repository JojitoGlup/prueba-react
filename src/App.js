import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './pages/contact';
import Aboutme from './components/aboutme';
import Profile from './components/profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome message="hola desde apps" name="Alex"/>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">contacto</Link>
              </li>
              <li>
                <Link to="/about-me">about-me</Link>
              </li>
              <li>
                <Link to="/profile">profile</Link>
              </li>
            </ul>
          </div>
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-me" element={<Aboutme />} />
            <Route path="/profile/:name" element={<Profile />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
