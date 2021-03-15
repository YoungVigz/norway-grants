import React from 'react'
import ReactDOM from 'react-dom';
import './main.scss'
import { ReactComponent as Island } from './map.svg'

import PopOut from './popOut';

class Main extends React.Component {
    componentDidMount() {
        const data = [
            document.querySelector('#arrow_lab'),
            document.querySelector('#arrow_fan'),
            document.querySelector('#arrow_flag'),
            document.querySelector('#arrow_people'),
            document.querySelector('#arrow_cinema')
        ]

        data.forEach(item => {
            item.onclick = () => {
                ReactDOM.render(<PopOut itemId={item.id}/>, document.getElementById('popout'))
                document.getElementById('popout').style.display = 'block'
            }
        })
    }

    render() {
        return (
            <>
                <div id="popout"></div>
                <div className="island-container">
                    <Island className="island"/>
                </div>
            </>
        );
    } 
}

export default Main;