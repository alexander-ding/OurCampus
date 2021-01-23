import React from 'react'
import EventSummary from './EventSummary'
import {Collapsible} from "react-materialize"

const EventList = () => {
    return (
        <div className="event-list section">
            <Collapsible
                accordion
                popout
                >
                <EventSummary name="Test1" host="User5"/>
                <EventSummary name="Test2" host="User4"/>
                <EventSummary name="Test3" host="User3"/>
                <EventSummary name="Test4" host="User2"/>
                <EventSummary name="Test5" host="User1"/>
            </Collapsible>
        </div>
    )
}

export default EventList