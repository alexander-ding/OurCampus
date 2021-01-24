import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { eventsListSelector, usersSelector } from '../../../selectors'
import MyEventSummary from './MyEventSummary'

const MyEventList = ({events, users}) => {
  return (
    <div className="event-list section">
      <MyEventSummary name="Test1" size="1"/>
      <MyEventSummary name="Test2" size="4"/>
      <MyEventSummary name="Test3" size="2"/>
      <MyEventSummary name="Test4" size="1"/>
      <MyEventSummary name="Test5" size="5"/>
    </div>
  )
}

const enhance = compose(
  connect(state => ({
    events: eventsListSelector(state), // TODO: refine events
    users: usersSelector(state),
  }))
)

export default enhance(MyEventList)