import React from 'react'
import Icon from 'react-materialize/lib/Icon'
import { connect } from 'react-redux'
import ReactTimeAgo from 'react-time-ago'
import { compose } from 'redux'
import { cancelEvent } from "../../../actions/eventsActions"
import { myEventsSelector, usersSelector } from '../../../selectors'
import { iconMap } from "../../../utils"
import AddEvent from './AddEvent'

const MyEvents = ({events, users, cancelEvent}) => {
  return (
    <div>
      <div className="center">
        <AddEvent/>
      </div>
      { events.length !== 0 && 
        <ul className="collapsible">
          { events.map(event => 
            <li key={event.key}>
              <div className="collapsible-header">
                <i className="material-icons" style={{marginTop: "auto", marginBottom: "auto"}}>{iconMap[event.category]}</i>
                {event.message}
              </div>
              <div className="collapsible-body" style={{display: "block"}}>
                Current participants ({event.people.length}/{event.numPeople}):
                <ul className="collection">
                  {event.people.map(person => 
                    <li className="collection-item" key={person}>
                      {users[person] && users[person].displayName}
                    </li>
                  )}
                </ul>
                <div>Expires <ReactTimeAgo date={event.expires.toDate()} locale="en-US"/></div>
                <br/>
                <button className="btn waves-effect waves-dark red" onClick={() => cancelEvent(event)}>
                  Cancel
                  <Icon className="right">clear</Icon>
                </button>
              </div>
            </li>
          )}
        </ul>
      }
    </div>
  )
}

const enhance = compose(
  connect(state => ({
    events: myEventsSelector(state),
    users: usersSelector(state),
  }), dispatch => ({
    cancelEvent: (event) => dispatch(cancelEvent(event)),
  }))
)

export default enhance(MyEvents);