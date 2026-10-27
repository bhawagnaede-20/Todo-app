import { useState } from 'react'
import './App.css'

function App() {
  // State for the list of tasks
  const [tasks, setTasks] = useState([])

  // State for the current text in the input box
  const [taskInput, setTaskInput] = useState('')

  // Function to add a new task
  const handleAddTask = (e) => {
    e.preventDefault()

    // Validate: Do not add empty or whitespace-only tasks
    if (taskInput.trim() === '') {
      return
    }

    // Create a new task object
    const newTask = {
      id: Date.now(), // unique ID based on current timestamp
      text: taskInput.trim(),
      completed: false,
    }

    // Add new task to the task list and clear input
    setTasks([...tasks, newTask])
    setTaskInput('')
  }

  // Function to toggle task completion (checkbox)
  const handleToggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTasks(updatedTasks)
  }

  // Function to delete a task
  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(updatedTasks)
  }

  return (
    <div className="app-container">
      <h1>My TODO List</h1>

      {/* Input section to add a new task */}
      <form onSubmit={handleAddTask} className="task-form">
        <input
          type="text"
          placeholder="Enter a task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="task-input"
        />
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>

      {/* Task list section */}
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task.id)}
              className="task-checkbox"
            />
            <span className={task.completed ? 'task-text completed' : 'task-text'}>
              {task.text}
            </span>
            <button
              type="button"
              onClick={() => handleDeleteTask(task.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
