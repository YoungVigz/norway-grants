import React from 'react'
import { text } from './text'
import { ReactComponent as Close } from './close.svg';

class PopOut extends React.Component {
    closePop() {
        const pop = document.querySelector('#popout')
        pop.style.display = 'none'
    }

    render() {
        return (
            <>
                <div className="close" onClick={this.closePop}><Close /></div>
                <div className="popout_title">
                    {text.map(item => {
                        let title = ''
                        if(item.itemId === this.props.itemId) title = item.title
                        
                        return title
                    })}
                </div>
                <div className="container-text">
                    <div className="popout_image">
                        {text.map(item => {
                            let symbol1
                            if(item.itemId === this.props.itemId) symbol1 = item.symbol1
                        
                            return symbol1
                        })}
                    </div>
                    <div className="popout_text">
                        {text.map(item => {
                            let text = ''
                            if(item.itemId === this.props.itemId) text = item.text

                            return text
                        })}
                    </div>
                </div>
            </>
        )
    } 
}

export default PopOut