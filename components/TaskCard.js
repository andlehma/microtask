import React from 'react';

class TaskCard extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			edit: false,
			form: {
				id: this.props.task.id,
				title: this.props.task.title,
				category: this.props.task.category,
				due: this.props.task.due,
			}
		}

		this.toggleEdit = this.toggleEdit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	toggleEdit() {
		if (this.state.edit) {
			// should probably check for changes before updating
			this.props.updateTask(this.state.form);
		}
		this.setState({ edit: !this.state.edit });
	}

	handleChange(e) {
		let newTask = this.state.form;
		newTask[e.target.name] = e.target.value;
		this.setState({ task: newTask });
	}

	render() {
		return (
			<div key={this.props.task.id} className="mt-card">
				{!this.state.edit ?
					<div>
						{this.props.task.category}
						<br />
						{this.props.task.title}
						<br />
						{this.props.task.due}
						<br />
					</div> :
					<form onSubmit={this.handleSubmit}>
						<input
							type="text"
							name="category"
							value={this.state.form.category}
							onChange={this.handleChange}></input>
						<input
							type="text"
							name="title"
							value={this.state.form.title}
							onChange={this.handleChange}></input>
						<input
							type="date"
							name="due"
							value={this.state.form.due}
							onChange={this.handleChange}></input>
					</form>}
				<button className="mt-card-button" onClick={this.toggleEdit}>{this.state.edit ? 'done' : 'edit'}</button>
				&nbsp;
              <button
					className="mt-card-button"
					onClick={() => this.props.deleteTask(this.props.task.id)}>
					delete
              </button>
			</div>
		)
	}
}

export default TaskCard;