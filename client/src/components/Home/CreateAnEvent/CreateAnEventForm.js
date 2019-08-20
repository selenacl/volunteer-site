import React from 'react';
import './CreateAnEventForm.css';
import '../HomeLayout/HomeLayout.css';

class CreateAnEventForm extends React.Component {

    render() {
        return (
        <div className="container-fluid">
            <div className="container-fluid, createEventContainer">
                <div className="row, homeTitle">
                        <h3><b>CREATE AN EVENT</b></h3>        
                    </div>
                    <div className="row" id="createEventForm">
                        <form id="eventForm">
                            <div className="form-group">
                                <input type="text" class="form-control" id="contactEmail" aria-describedby="enterEventName" placeholder="Event Name"></input>
                            </div>
                            <div className="form-group">
                                <textarea class="form-control" id="eventDescription" rows= "5" placeholder="Event Description"></textarea>
                            </div>

                            <div className="row">

                                {/*GENERATE TIME SLOTS FORM*/}
                                <div className="form-group" id="generateTimesContainer">
                                    <label class="timeTitle">Generate Time Slots</label>
                                    <div class="row, timeRow">
                                        <label className="timeLabel">Date</label>
                                        <input type="date" className="timeInput"></input>
                                    </div>
                                    <div class="row, timeRow">
                                        <label className="timeLabel">From</label>
                                        <input type="time" className="timeInput"></input>
                                    </div>
                                    <div class="row, timeRow">
                                        <label className="timeLabel">To</label>
                                        <input type="time" className="timeInput"></input>
                                    </div>
                                    <div class="row, timeRow">
                                        <label className="timeLabel">Every</label>
                                        <input type="number" className="timeInput"></input>
                                        <select>
                                            <option>Minute(s)</option>
                                            <option>Hour(s)</option>
                                        </select>
                                    </div>
                                    <div className="row, timeRow">
                                        <label className="timeLabel">Max People</label>
                                        <input type="number" className="timeInput"></input>
                                    </div>
                                    <div className="row, timeRow">
                                        <label className="timeLabel"></label>
                                        <button class="btn btn-primary" className="submitBtn">GENERATE</button>                                    
                                    </div>
                                </div>

                                {/*MANUAL TIME SLOTS FORM*/}
                                <div className="form-group" id="manualTimesContainer">
                                    <label className="timeTitle">Enter Time Slots Manually</label>
                                    <div class="row, timeRow">
                                        <label className="timeLabel">Date</label>
                                        <input type="date" className="timeInput"></input>
                                    </div>
                                    <div class="row, timeRow">
                                        <label className="timeLabel">Start</label>
                                        <input type="time" className="timeInput"></input>
                                    </div>
                                    <div class="row, timeRow">
                                        <label className="timeLabel">End</label>
                                        <input type="time" className="timeInput"></input>
                                    </div>
                                    <div className="row, timeRow">
                                        <label className="timeLabel">Max People</label>
                                        <input type="number" className="timeInput"></input>
                                    </div>
                                    <div className="row, timeRow">
                                        <label className="timeLabel"></label>
                                        <button class="btn btn-primary" className="submitBtn">ADD</button>                                    
                                    </div>
                                </div>
                                
                            </div>

                            <div className="row" id="timeSlotsContainer">
                                <label className="timeTitle">Time Slots</label>
                            </div>
                            
                            <div className="row" id="timeSlotsContainer">
                                <div className="row">
                                    <label className="timeTitle">Send Invites</label>
                                </div>
                            </div>

                            <button type="submit" class="btn btn-primary" className="submitBtn">SUBMIT</button>
                        </form>
                    </div>
                </div>
        </div>
        )
    }
}

export default CreateAnEventForm;