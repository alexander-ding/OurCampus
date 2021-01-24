import React from 'react'
import { Collapsible } from "react-materialize"
import CollapsibleItem from 'react-materialize/lib/CollapsibleItem'
import Icon from 'react-materialize/lib/Icon'
import { connect } from 'react-redux'
import ReactTimeAgo from 'react-time-ago'
import { compose } from 'redux'
import { attendEvent } from '../../../actions/eventsActions'
import { suggestedEventsSelector, usersSelector } from '../../../selectors';
import { iconMap } from "../../../utils";

const EventList = ({users, events, attend}) => {
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
          icon={<Icon style={{marginTop: "auto", marginBottom: "auto"}}>{iconMap[event.category]}</Icon>}
          node="div"
          key={index}
        >
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
          <button className="btn waves-effect waves-light" onClick={() => attend(event)}>
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
    events: suggestedEventsSelector(state),
    users: usersSelector(state),
  }), dispatch => ({
    attend: (event) => dispatch(attendEvent(event)),
  }))
)

export default enhance(EventList);