import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'

function NewTask(props) {
	const [form, setForm] = useState(false);
	const [task, setTask] = useState({
		category: "",
		title: "",
		due: ""
	});

	function handleSubmit(e) {
		e.preventDefault();
		setForm(false);
		setTask({
			category: "",
			title: "",
			due: ""
		});
		props.submit(task);
	}

	function handleChange(e) {
		e.preventDefault();
		let newTask = { ...task }
		newTask[event.target.name] = event.target.value;
		setTask(newTask);
	}

	return (
		<div id="new-task">
			<button onClick={() => setForm(!form)}>
				{form ?
					<FontAwesomeIcon className="new-task-icon close-form" icon={faPlus} /> :
					<FontAwesomeIcon className="new-task-icon" icon={faPlus} />
				}
			</button>
			<>
				<br />
				<form id="new-task-form" className={form ? "" : "hide"} onSubmit={handleSubmit}>
					<p>
						<input
							type="text"
							name="category"
							placeholder="category"
							value={task.category}
							onChange={handleChange} />
						<br />
						<input
							type="text"
							name="title"
							placeholder="title"
							value={task.title}
							onChange={handleChange} />
						<br />
						<label htmlFor="due">Due:
					<input
								type="date"
								name="due"
								value={task.due}
								onChange={handleChange} />
						</label>
						<input type="submit" value="Add Task" />
					</p>
				</form>
			</>
		</div>
	)
}

export default NewTask;