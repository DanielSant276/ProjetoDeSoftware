import React from 'react'
<<<<<<< HEAD
import './App.css';

function App() {
  return (
    <></>
=======
import Rotas from './routes';
import "./App.css"
import {BrowserRouter as Router} from 'react-router-dom';


function App() {

  return (
    <Router >
      <Rotas/>
    </Router>

>>>>>>> f5a09c187d8245a2b7524b92211cda3871f7fa20
  );
}

export default App;