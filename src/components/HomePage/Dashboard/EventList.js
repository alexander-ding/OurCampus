import React from 'react'
import { Collapsible } from "react-materialize"
import CollapsibleItem from 'react-materialize/lib/CollapsibleItem'
import Icon from 'react-materialize/lib/Icon'
import { connect } from 'react-redux'
import ReactTimeAgo from 'react-time-ago'
import { compose } from 'redux'
import { eventsListSelector, usersSelector } from '../../../selectors'

const EventList = ({users, events}) => {
  if (events.length === 0) {
    return <div className="center">
      No matching events...
    </div>
  }
  return (
    <Collapsible
      accordion
    >
      { events.map((event, index) => 
        <CollapsibleItem
          header={event.message}
          icon={<Icon>fastfood</Icon>}
          node="div"
          key={index}
        >
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
          <button className="btn waves-effect waves-light">
            Attend
            <Icon className="right">send</Icon>
          </button>
        </CollapsibleItem>
      )}
    </Collapsible>
  )
}

const enhance = compose(
  connect(state => ({
    events: eventsListSelector(state), // TODO: refine events
    users: usersSelector(state),
  }))
)

export default enhance(EventList);