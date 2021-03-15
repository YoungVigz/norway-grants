import React from 'react'

class PopOut extends React.Component {
    closePop() {
        const pop = document.querySelector('#popout')
        pop.style.display = 'none'
    }

    render() {
        return (
            <>
                <div>{this.props.itemId}</div>
                <div className="close" onClick={this.closePop}>X</div>
            </>
        )
    } 
}

export default PopOut