import React, { useState } from "react";
import TaskCard from './TaskCard';

function deleteTask(i) {
    console.log(i);
}

function App(props) {
    const [greeting, setGreeting] = useState("Hello");

    let myTask = {
        title: "test",
        category: "asfd",
        due: new Date().toISOString().substring(0, 10)
    }

    let tasks = [
        myTask,
        myTask,
        myTask,
        myTask,
        myTask,
        myTask
    ];

    return (
        <div id="container">
            {tasks.map((x, i) =>
                <TaskCard key={i} task={x} delete={() => deleteTask(i)} />
            )}
        </div>
    );
}

export default App;