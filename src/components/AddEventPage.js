import React, {Component} from 'react';
import Button from "react-materialize/lib/Button";
import Popup from 'reactjs-popup';

class AddEventPopup extends Component {
    render() {
        return (
            <Popup
                trigger={open => (
                    <Button large waves="green"><i className="material-icons">add</i></Button>
                )}
                position="center"
                closeOnEscape
                modal={true}
                >
                <div className="addPopup">
                    <span> 
                        <form>
                            <div className= "row">
                                <div className="col s3">
                                    <span>Expires in <input></input>hours.</span>
                                    <br></br>
                                    <br></br>
                                    <span>Require at least <input></input>people.</span>
                                    
                                </div>
                                <div className="col s8">
                                    <h1 className="makeEventTitle">Create New Event</h1>
                                    <br></br>
                                    <textarea rows="10" className="materialize-textarea" data-length="250" placeholder="What do you want to do?"></textarea>
                                    <span className="row"><span className="col s10"></span><button className="col s2 btn waves-effect waves-light"><i className="material-icons">send</i></button></span>
                                </div>
                            </div>
                        </form>
                    </span>
                    {/* <p className="popupLabel">Press ESC to exit</p> */}
                </div>
        </Popup>
        )
    }
}

export default AddEventPopup