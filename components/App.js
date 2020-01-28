import React from 'react';
import NewTaskButton from './NewTaskButton';

class Task {
  constructor(id, title, course, assigned, due) {
    this.id = id;
    this.title = title;
    this.course = course;
    this.assigned = assigned;
    this.due = due;
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        // placeholder tasks
        new Task(1, "test1"),
        new Task(2, "test2"),
      ],
    }
  }

  render() {
    return (
      <div id="container">
        <header>
          <div id="mt-main-title-container">
            <h1 id="mt-main-title">MicroTask</h1>
          </div>
          <NewTaskButton />
          <div id="mt-header-right-placeholder"></div>
        </header>
        <ul>
          {this.state.tasks.map((task) =>
            <li key={task.id}>{task.title}</li>
          )}
        </ul>
      </div>
    )
  }
}

module.exports = App;
