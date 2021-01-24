import React from 'react'
import MyEventSummary from './MyEventSummary'

const MyEventList = () => {
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

export default MyEventList