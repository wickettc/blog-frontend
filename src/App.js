import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Router>
                {/* NavBar */}
                <Switch>
                    <Route exact path="/" render={() => <Home />} />
                    <Route
                        exact
                        path="/post/:id"
                        render={({ match }) => <PostPage match={match} />}
                    />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
