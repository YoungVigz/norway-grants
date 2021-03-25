import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from './Nav/';
import Main from './Main/'

class App extends React.Component {
    componentDidMount() {
        window.addEventListener('resize', () => {
            const width = window.innerWidth;
            if(width <= 1300) 
                document.querySelector('.error').style.display = 'block'
            else 
                document.querySelector('.error').style.display = 'none'
        })
    }

    render() {
        return (
            <Router>
                <div className="container">
                    <div className="error">Your screen is too small</div>
                    <Nav />
                    <Switch >
                        <Route exact path="/" component={Main}/>
                    </Switch>

                    <div className="footer">by Klub Przyrodniczy "Budyń"</div>
                </div>
            </Router>
        );
    }
}


export default App;