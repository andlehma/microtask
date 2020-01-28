import React from 'react';
import TaskCard from './TaskCard';
import NewTaskForm from './NewTaskForm.js';

let nextId = 0;

class Task {
  constructor(id, title, course, due) {
    this.id = id;
    this.title = title;
    this.course = course;
    this.due = due;
  }
}

function sortTasks(tasks) {
  tasks.sort((a, b) => (a.due > b.due) ? 1 : -1);
  return tasks;
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      showNewTaskForm: false,
    }

    this.toggleNewTaskForm = this.toggleNewTaskForm.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.pushTask = this.pushTask.bind(this);
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

  updateTask(form) {
    let targetTask = this.state.tasks.find(task => task.id === form.id);
    let index = this.state.tasks.indexOf(targetTask);
    let newTasks = [...this.state.tasks];
    newTasks[index] = form;
    this.setState({ tasks: newTasks });
  }

  pushTask(form) {
    let newTasks = [...this.state.tasks];
    newTasks.push(new Task(
      nextId++,
      form.title,
      form.course,
      form.due));
    newTasks = sortTasks(newTasks);
    this.setState({
      tasks: newTasks,
      showNewTaskForm: false,
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
          <NewTaskForm pushTask={this.pushTask} /> : null}

        <div id="mt-task-list">
          {this.state.tasks.map((task) =>
            <TaskCard key={task.id} task={task} deleteTask={this.deleteTask} updateTask={this.updateTask} />
          )}
        </div>
      </div>
    )
  }
}

module.exports = App;