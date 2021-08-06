import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import EditPage from './pages/EditPage';
import CreatePage from './pages/CreatePage'

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState([]);
  return (
    <div className="App">
        <Router>
        <header className="App-header">
          <Route path="/" exact>
            <HomePage setExerciseToEdit={setExerciseToEdit}/>
          </Route>
          <Route path="/Edit" exact>
            <EditPage exerciseToEdit={exerciseToEdit}/>
          </Route>
          <Route path="/Create" exact>
            <CreatePage />
          </Route>
        </header>
      </Router>
        
    </div>
  );
}

export default App;
