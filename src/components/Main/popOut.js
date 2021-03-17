import React from 'react'
import { text } from './text'

class PopOut extends React.Component {
    closePop() {
        const pop = document.querySelector('#popout')
        pop.style.display = 'none'
    }

    render() {
        return (
            <>
                <div className="close" onClick={this.closePop}>X</div>
                <div className="popout_title">
                    {text.map(item => {
                        if(item.itemId === this.props.itemId) return item.title
                    })}
                </div>
                <div className="popout_text">
                    {text.map(item => {
                        if(item.itemId === this.props.itemId) return item.text
                    })}
                </div>
            </>
        )
    } 
}

export default PopOut