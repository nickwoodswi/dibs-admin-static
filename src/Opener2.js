import React, { Component } from 'react'

class Opener2 extends Component {
    render() {
        if (!this.props.support) {
            return(<></>)
        }
        else {
            return(
                <>{this.props.support}</>
            )
        }
    }
}

export default Opener2