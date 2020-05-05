import React, { Component } from 'react'

class HoldNotes extends Component {
    render() {
        if (!this.props.notes) {
            return(<></>)
        }
        else {
            return(
                <div className="hold-notes-container">
                    <div className="hold-notes">
                        {this.props.notes}
                    </div>
                </div>
            )
        }
    }
}

export default HoldNotes