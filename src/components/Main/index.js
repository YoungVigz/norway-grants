import React from 'react'
import './main.scss'
import { ReactComponent as Island } from './island.svg'

function Main() {
    return (
        <>
            <div className="island-container">
                <Island className="island"/>
            </div>
        </>
    );
}

export default Main;