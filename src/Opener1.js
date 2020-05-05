import React, { Component } from 'react'

class Opener1 extends Component {
    render() {
        if (!this.props.support) {
            return(<></>)
        }
        else {
            return(
                <> {this.props.support} / </>
            )
        }
    }
}

export default Opener1