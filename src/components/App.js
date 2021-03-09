import React from 'react';
import Nav from './Nav/Nav';
import Main from './Main/Main'

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav title='Klub przyrodniczy "Budyń"'/>
                <Main />
            </div>
        );
    }
}

export default App;