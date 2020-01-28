import React from 'react';
import TaskCard from './TaskCard';

let nextId = 0;

class Task {
  constructor(id, title, course, due) {
    this.id = id;
    this.title = title;
    this.course = course;
    this.due = due;
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      showNewTaskForm: false,
      form: {
        title: "",
        course: "",
        due: "",
      },
    }

    this.toggleNewTaskForm = this.toggleNewTaskForm.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleNewTaskForm() {
    this.setState({ showNewTaskForm: !this.state.showNewTaskForm });
  }

  deleteTask(i) {
    let targetTask = this.state.tasks.find(task => task.id === i);
    let index = this.state.tasks.indexOf(targetTask);
    let newTasks = [...this.state.tasks];
    newTasks.splice(index, 1);
    this.setState({ tasks: newTasks });
  }

  handleChange(e) {
    let newForm = this.state.form;
    newForm[e.target.name] = e.target.value;
    this.setState({ form: newForm });
  }

  handleSubmit(e) {
    e.preventDefault();
    let newTasks = [...this.state.tasks];
    newTasks.push(new Task(nextId++,
      this.state.form.title,
      this.state.form.course,
      this.state.form.due));
    this.setState({
      tasks: newTasks,
      showNewTaskForm: false,
      form: {
        title: "",
        course: "",
        due: "",
      }
    });
  }

  render() {
    return (
      <div id="container">
        <header>
          <div id="mt-main-title-container">
            <h1 id="mt-main-title">MicroTask</h1>
          </div>
          <div id="new-task-button-root">
            <button
              className="mt-header-button"
              onClick={this.toggleNewTaskForm}>
              {this.state.showNewTaskForm ? "✖" : "New Task"}
            </button>
          </div>
          <div id="mt-header-right-placeholder"></div>
        </header>

        {this.state.showNewTaskForm ?
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
          : null}

        <div id="mt-task-list">
          {this.state.tasks.map((task) =>
            <TaskCard key={task.id} task={task} deleteTask={this.deleteTask} />
          )}
        </div>
      </div>
    )
  }
}

module.exports = App;