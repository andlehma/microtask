import React, { useState } from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function TaskCard(props) {
    const [edit, setEdit] = useState(false);
    const [task, setTask] = useState(props.task);

    function handleChange(e) {
        e.preventDefault();
        let newTask = Object.assign({}, task);
        newTask[event.target.name] = event.target.value;
        setTask(newTask);
    }

    return (
        <div className="task-card">
            {edit ?
                <>
                    <input type="text" name="category" value={task.category} onChange={handleChange} />
                    <input type="text" name="title" value={task.title} onChange={handleChange} />
                    <input type="date" name="due" value={task.due} onChange={handleChange} />
                </> :
                <div>
                    {task.category}
                    <br />
                    {task.title}
                    <br />
                    {task.due}
                    <br />
                </div>}
            <div className="card-buttons">
                <button onClick={() => setEdit(!edit)}>
                    <FontAwesomeIcon icon={faEdit} />
                </button>
                <button onClick={() => props.delete(props.id)}>
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