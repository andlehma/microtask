import React from 'react';

class TaskCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    }
  }

  render() {
    return (
      <div key={this.props.task.id} className="mt-card">
        {this.props.task.course}
        <br />
        {this.props.task.title}
        <br />
        {this.props.task.due}
        <br />
        <button className="mt-card-button">edit</button>
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