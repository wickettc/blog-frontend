import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import NotFound from './pages/NotFound';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <div className="app-container">
                    <Switch>
                        <Route exact path="/" render={() => <Home />} />
                        <Route
                            exact
                            path="/post/:id"
                            render={({ match }) => <PostPage match={match} />}
                        />
                        <Route path="*" render={() => <NotFound />} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;
