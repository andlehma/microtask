import React, { useState, useEffect } from "react";
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

    // currently this runs on initial render, this should be changed
    useEffect(() => {
        if (!edit) {
            props.sort();
        }
    }, [edit]);

    return (
        <div className="task-card">
            {edit ?
                <>
                    <input
                        type="text"
                        name="title"
                        placeholder="title"
                        value={props.task.title}
                        onChange={handleChange} />
                    <input
                        type="text"
                        name="description"
                        placeholder="description"
                        value={props.task.description}
                        onChange={handleChange} />
                    <label htmlFor="due">Due:
                    <input
                        type="date"
                        name="due"
                        value={props.task.due}
                        onChange={handleChange} />
                    </label>
                </> :
                <p>
                    <strong><u>{props.task.title}</u></strong>
                    <br />
                    {props.task.description}
                    <br />
                    {props.task.due.length > 0 ? "Due:" : null} {props.task.due}
                    <br />
                </p>}
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
        description: PropTypes.string,
        title: PropTypes.string,
        due: PropTypes.string
    }),
    id: PropTypes.number,
    delete: PropTypes.func,
};

export default TaskCard;