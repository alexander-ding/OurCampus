import React from 'react'
import Button from 'react-materialize/lib/Button'
import Icon from 'react-materialize/lib/Icon'
import { connect } from 'react-redux'
import ReactTimeAgo from 'react-time-ago'
import { compose } from 'redux'
import { eventsListSelector, usersSelector } from '../../../selectors'

const MyEvents = ({events, users}) => {
  return (
    <div>
      <div className="center">
        <Button large waves="green" style={{width: "100%"}}><i className="material-icons">add</i></Button>
      </div>
      <ul className="collapsible">
        { events.map((event, index) => 
          <li key={index}>
            <div className="collapsible-header">
              <Icon>fastfood</Icon>
              {event.message}
            </div>
            <div className="collapsible-body" style={{display: "block"}}>
              Current participants ({event.people.length}/{event.numPeople}):
              <ul className="collection">
                {event.people.map(person => 
                  <li className="collection-item" key={person}>
                    {users[person].displayName}
                  </li>
                )}
              </ul>
              <div>Expires <ReactTimeAgo date={event.expires.toDate()} locale="en-US"/></div>
              <br/>
              <button className="btn waves-effect waves-dark red">
                Cancel
                <Icon className="right">clear</Icon>
              </button>
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}

const enhance = compose(
  connect(state => ({
    events: eventsListSelector(state), // TODO: refine events
    users: usersSelector(state),
  }))
)

export default enhance(MyEvents);