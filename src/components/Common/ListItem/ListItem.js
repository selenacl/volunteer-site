import React from 'react';
import './ListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

class ListItem extends React.Component {

    render () {
        return (
            <div className="container-fluid, listItem">
                <h4 className="listItemText">Lorem Ipsum Event</h4>
                <button type="button" class="btn" id="editEventBtn"><FontAwesomeIcon icon={faPencilAlt} /></button>
            </div>
        )
    }
}

export default ListItem;
