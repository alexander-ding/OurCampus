import React from 'react'

const MyEventSummary = ({name, size}) => {
    return (
        <div className="card">
            <div className="card-content">
                <span className="activator grey-text text-darken-4"><i className="material-icons left">fastfood</i>My Event<i className="material-icons right">keyboard_arrow_up</i></span>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">My Event<i className="material-icons right">close</i></span>
                <p>This is where the event information will go</p>
            </div>
        </div>
    )
}

export default MyEventSummary
