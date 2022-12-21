import React from 'react';
import { useState } from 'react';
import TaskList from './components/TaskList.js';
import Task from './components/Task.js';
import './App.css';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [tasks, setTasks] = useState(TASKS);

  const strikethroughToggle = (id) => {
    const newTasks = TASKS.map((task) => {
      if (task.id === id) {
        const task = { ...task };
        return {
          // ...task,
          isComplete: !task.isComplete,
        };
      } else {
        return task;
      }
    });
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList tasks={tasks} strikethroughToggle={strikethroughToggle} />
        </div>
      </main>
    </div>
  );
};

export default App;
