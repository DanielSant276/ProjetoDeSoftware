import React from 'react'
import Rotas from './routes';
import "./App.css"
import {BrowserRouter as Router} from 'react-router-dom';


function App() {

  return (
    <Router >
      <Rotas/>
    </Router>

  );
}

export default App;