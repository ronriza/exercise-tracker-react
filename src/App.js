import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import fire from './fire.js'
import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import EditPage from './pages/EditPage';
import CreatePage from './pages/CreatePage'
import LoginPage from './pages/LoginPage'
import NavbarCustom from './components/NavbarCustom'
import LoadingSymbol from './components/LoadingSymbol';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState([]);
  const [user, setUser] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [waiting, setWaiting] = useState(true)

  // changes state if user logs in or out
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user)
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
      setUser(false)
    }
    setWaiting(false)
  })

  // ensures login page shows if user is not authenticated
  useEffect(() => {
    setTimeout(() => setWaiting(false), 500)
  }, [])


  if (waiting) {
    return (
      <LoadingSymbol />
    )
  } else {
    return (
      <div className="App">
        <Router>
          {!isLoggedIn
            ? (
              <header className="App-header">
                <NavbarCustom isLoggedin={isLoggedIn} />
                <Switch>
                  <Route path="/" exact>
                    <LoginPage />
                  </Route>
                </Switch>
              </header>
            )
            : (
              <header className="App-header">
                <NavbarCustom isLoggedin={isLoggedIn} />
                <Switch>
                  <Route path="/" exact>
                    <HomePage user={user} setExerciseToEdit={setExerciseToEdit} />
                  </Route>
                  <Route path="/Edit" exact>
                    <EditPage user={user} exerciseToEdit={exerciseToEdit} />
                  </Route>
                  <Route path="/Create" exact>
                    <CreatePage user={user} />
                  </Route>
                </Switch>
              </header>
            )}
        </Router>
      </div>
    );
  }
}

export default App;
