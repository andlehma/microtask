import React, { useState } from "react";
import TaskCard from './TaskCard';
import NewTask from './NewTask';

function App() {

    const [tasks, setTasks] = useState([
        {
            title: "delete this task",
            description: "it's just a placeholder",
            due: new Date().toISOString().substring(0, 10)
        },
    ]);

    function sortTasks() {
        let newTasks = [...tasks];
        newTasks.sort((a, b) => (a.due > b.due) ? 1 : -1);
        setTasks(newTasks);
    }

    function deleteTask(i) {
        const newTasks = [...tasks];
        newTasks.splice(i, 1);
        setTasks(newTasks);
    }

    function editTask(newTask, i) {
        const newTasks = [...tasks];
        newTasks[i] = newTask;
        setTasks(newTasks);
    }

    function addTask(task) {
        const newTasks = [...tasks, task];
        setTasks(newTasks);
    }

    return (
        <>
            <header>
                <h1>MicroTask</h1>
                <NewTask submit={(task) => { addTask(task) }} />
                <div id="header-placeholder"></div>
            </header>
            <div id="container">
                {tasks.map((x, i) =>
                    <TaskCard key={i}
                        task={x}
                        edit={(newTask) => editTask(newTask, i)}
                        delete={() => deleteTask(i)}
                        sort={sortTasks} />
                )}
            </div>
        </>
    );
}

export default App;