import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from './Nav/';
import Main from './Main/'

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Nav title='Klub przyrodniczy "Budyń"' />
                    <Switch >
                        <Route exact path="/" component={Main}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;