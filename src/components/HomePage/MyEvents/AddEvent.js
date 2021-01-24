import M from "materialize-css";
import React, { useState } from 'react';
import Button from "react-materialize/lib/Button";
import Modal from 'react-materialize/lib/Modal';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { addEvent } from '../../../actions/eventsActions';

const AddEvent = ({addEvent}) => {
  const [numPeople, setNumPeople] = useState(2);
  const [expires, setExpires] = useState(1);
  const [message, setMessage] = useState("");

  const updateNumPeople = e => {
    setNumPeople(e.target.value);
  }
  const updateExpires = e => {
    setExpires(e.target.value);
  }
  const updateMessage = e => {
    const value = e.target.value.replace(/[\r\n\v]+/g, "");
    setMessage(value);
  }

  const validated = numPeople && expires && message && (numPeople >= 2) && (expires >= 1);

  const maxLength = 250;

  return <Modal
    actions={[
      <button className="blue white-text modal-close waves-effect waves-light btn">Close</button>
    ]}
    bottomSheet
    fixedFooter={false}
    id="Modal-0"
    open={false}
    options={{
      dismissible: true,
      endingTop: '10%',
      inDuration: 250,
      onCloseEnd: null,
      onCloseStart: null,
      onOpenEnd: null,
      onOpenStart: null,
      opacity: 0.5,
      outDuration: 250,
      preventScrolling: true,
      startingTop: '4%'
    }}
    trigger={<Button className="blue" large waves="light" style={{width: "100%"}}>New Event</Button>}
  >
    <div className="row" style={{margin: 0}}>
      <div className="col s2">
        <div className="input-field">
          <input id="people" type="number" min={2} className="validate" onChange={updateNumPeople} value={numPeople}/>
          <label className="active" htmlFor="people">People needed</label>
        </div>
        <div className="input-field">
          <input id="expires_in" type="number" min={1} className="validate" onChange={updateExpires} value={expires}/>
          <label className="active" htmlFor="expires_in">Expires in (hours)</label>
        </div>
        
      </div>
      <div className="col s10">
        <div className="input-field">
          <textarea id="message" className="materialize-textarea validate" maxLength={maxLength} onChange={updateMessage} value={message}/>
          <label htmlFor="message">What do you want to do?</label>
          <span className="helper-text">{maxLength - message.length} characters remaining.</span>
        </div>

        <div style={{display: "flex", justifyContent: "flex-end"}}>
          <button className="blue col s2 btn waves-effect waves-light" disabled={!validated} onClick={() => {
            addEvent(message, numPeople, expires);
            setNumPeople(2);
            setExpires(1);
            setMessage("");
          }}>
            <i className="material-icons">send</i>
          </button>
        </div>
      </div>
    </div>
  </Modal>
}

const enhance = compose(
  connect(null, dispatch => ({
    addEvent: (message, numPeople, expires) => {
      dispatch(addEvent(message, numPeople, expires));
      const elem = document.getElementById("Modal-0")
      const instance = M.Modal.getInstance(elem);
      instance.close();
    }
  }))
)

export default enhance(AddEvent);