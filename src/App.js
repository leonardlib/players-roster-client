import React, {useState} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import PlayersList from "./pages/players/list";
import UserLogin from "./pages/users/login";

function App() {
    const logout = () => {
        localStorage.removeItem('auth_token');
    };

    return (
        <Router>
            <div className="container">
                <nav>
                    <ul>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/players">Players</Link>
                        </li>
                        <li>
                            <Link to="/" onClick={() => logout()}>Logout</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/login">
                        <UserLogin />
                    </Route>
                    <Route path="/players">
                        <PlayersList />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
