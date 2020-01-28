import React from 'react';

class NewTaskForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="new-task-form-container" className="mt-card">
				<form onSubmit={this.handleSubmit}>
					<label>
						Course:
                <br />
						<input
							type="text"
							value={this.state.form.course}
							name="course"
							onChange={this.handleChange}>
						</input>
					</label>
					<br />
					<label>
						Title:
                <br />
						<input
							type="text"
							value={this.state.form.title}
							name="title"
							onChange={this.handleChange}>
						</input>
					</label>
					<br />
					<label>
						Due:
                <br />
						<input
							type="date"
							value={this.state.form.due}
							name="due"
							onChange={this.handleChange}>
						</input>
					</label>
					<br />
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default NewTaskForm;