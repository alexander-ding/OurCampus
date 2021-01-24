import React from 'react'
import { Collapsible } from "react-materialize"
import CollapsibleItem from 'react-materialize/lib/CollapsibleItem'
import Icon from 'react-materialize/lib/Icon'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { eventsListSelector, usersSelector } from '../../../selectors'

const EventList = ({users, events}) => {
  return (
    <div className="event-list section">
      <Collapsible
        accordion
      >
        { events.map((event, index) => 
          <CollapsibleItem
            expanded={false}
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
            <button className="btn waves-effect waves-light" name="action">
              Attend
              <Icon className="right">send</Icon>
            </button>
          </CollapsibleItem>
        )}
      </Collapsible>
    </div>
  )
}

const enhance = compose(
  connect(state => ({
    events: eventsListSelector(state), // TODO: refine events
    users: usersSelector(state),
  }))
)

export default enhance(EventList);