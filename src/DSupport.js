import React, { Component } from 'react'

class DSupport extends Component {
    render() {
        if (!this.props.support) {
            return(<></>)
        }
        else {
            return(
                <>{this.props.support} / </>
            )
        }
    }
}

export default DSupport