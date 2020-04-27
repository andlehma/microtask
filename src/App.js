import React, { useState } from "react";
import TaskCard from './TaskCard';

function App(props) {

    // placeholder task
    let myTask = {
        title: "test",
        category: "asfd",
        due: new Date().toISOString().substring(0, 10)
    }

    const [tasks, setTasks] = useState([
        myTask,
        myTask,
        myTask,
        myTask,
        myTask,
        myTask
    ]);

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

    return (
        <div id="container">
            {tasks.map((x, i) =>
                <TaskCard key={i}
                    task={x}
                    edit={(newTask) => editTask(newTask, i)}
                    delete={() => deleteTask(i)} />
            )}
        </div>
    );
}

export default App;