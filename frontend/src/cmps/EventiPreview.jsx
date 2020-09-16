import React, { Component } from 'react'

// redirect to details 'category:_id'
export class EventiPreview extends Component {
    render() {
        return (
            <div>
                {/* Check */}
                received {this.props.event.title}
            </div>
        )
    }
}


