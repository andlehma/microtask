import React from 'react';

class NewTaskButton extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="new-task-button-root">
				<button className="mt-header-button">New Task</button>
			</div>
		)
	}
}

module.exports = NewTaskButton;