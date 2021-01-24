import React, { Component } from 'react'
import { CollapsibleItem, Icon } from 'react-materialize'


class EventSummary extends Component{
    render() {
        return (
            <CollapsibleItem
                expanded={false}
                header="New Event"
                icon={<Icon>fastfood</Icon>}
                node="div"
            >
                Current participants (3/5):
                <ul className="collection">
                    <li className="collection-item">
                       test
                    </li>
                    <li className="collection-item">
                        test
                    </li>
                    <li className="collection-item">
                        test
                    </li>
                </ul>
                <button className="btn waves-effect waves-light" type="submit" name="action">Attend
                    <i className="material-icons right">send</i>
                </button>
            </CollapsibleItem>
        )
    }
}

export default EventSummary

