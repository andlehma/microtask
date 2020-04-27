import React, { useState } from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function TaskCard(props) {
    const [edit, setEdit] = useState(false);

    function handleChange(e) {
        e.preventDefault();
        let newTask = { ...props.task }
        newTask[event.target.name] = event.target.value;
        props.edit(newTask);
    }

    return (
        <div className="task-card">
            {edit ?
                <>
                    <input
                        type="text"
                        name="category"
                        value={props.task.category}
                        onChange={handleChange} />
                    <input
                        type="text"
                        name="title"
                        value={props.task.title}
                        onChange={handleChange} />
                    <input
                        type="date"
                        name="due"
                        value={props.task.due}
                        onChange={handleChange} />
                </> :
                <div>
                    {props.task.category}
                    <br />
                    {props.task.title}
                    <br />
                    {props.task.due}
                    <br />
                </div>}
            <div className="card-buttons">
                <button onClick={() => setEdit(!edit)}>
                    <FontAwesomeIcon icon={faEdit} />
                </button>
                <button onClick={props.delete}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </div>
        </div>
    );
}

TaskCard.propTypes = {
    task: PropTypes.shape({
        title: PropTypes.string,
        category: PropTypes.string,
        due: PropTypes.string
    }),
    id: PropTypes.number,
    delete: PropTypes.func,
};

export default TaskCard;