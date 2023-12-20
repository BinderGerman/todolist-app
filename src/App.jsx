import { useEffect, useState } from 'react'
import { TaskCreator } from './components/TaskCreator'
import { TaskTable } from './components/TaskTable'
import { VisibilityControl } from './components/VisibilityControl'

function App() {
  const [tasksItems, setTaskItems] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)

  const createNewTask = taskName => {
    if (!tasksItems.find(task => task.name === taskName)) {
      setTaskItems([...tasksItems, { name: taskName, done: false }])
    }
  }

  // Cambia el done de las tareas de false a true o viceversa
  const toggleTask = task => {
    setTaskItems(
      tasksItems.map(t => (t.name === task.name ? { ...t, done: !t.done } : t)),
    )
  }

  const cleanTasks = () => {
    setTaskItems(tasksItems.filter(task => !task.done))
    setShowCompleted(false)
  }

  // Se ejcuta una vez sola cuando carga la app
  useEffect(() => {
    const data = localStorage.getItem('tasks')
    if (data) {
      setTaskItems(JSON.parse(data))
    }
  }, [])

  // Se ejecuta cada vez que la variable tasksItems se modifique
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksItems))
  }, [tasksItems])

  return (
    <div className='w-screen h-screen flex justify-center items-center flex-col'>
      <TaskCreator createNewTask={createNewTask} />
      <TaskTable tasks={tasksItems} toggleTask={toggleTask} />
      <VisibilityControl
        isChecked={showCompleted}
        setShowCompleted={checked => setShowCompleted(checked)}
        cleanTasks={cleanTasks}
      />

      {showCompleted === true && (
        <TaskTable
          tasks={tasksItems}
          toggleTask={toggleTask}
          showCompleted={showCompleted}
        />
      )}
    </div>
  )
}

export default App
