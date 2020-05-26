import React from 'react';
import HelloWorld from './components/HelloWorld'
import Header from './components/Header'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <div>
      <Header />

      <HelloWorld name="Winnie"/>

      <Router>
        <ul>
          <li>
            <Link to="/" className="text-blue-500">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-blue-500">About</Link>
          </li>
        </ul>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
