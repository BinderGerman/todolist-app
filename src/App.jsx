import { useEffect, useState } from 'react'
import { TaskCreator } from './components/TaskCreator'
import { TaskTable } from './components/TaskTable'
import { VisibilityControl } from './components/VisibilityControl'
import { Navbar } from './components/semanticComponent/Navbar'
import './styles/beer.scss'

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
    <>
      <Navbar />
      <main className='flex flex-col items-center justify-around h-screen p-4 sm:flex-row flex-wrap'>
        <div className='card w-96 bg-base-100 shadow-xl h-2/3 mb-4 p-4'>
          <TaskCreator createNewTask={createNewTask} />
          <TaskTable tasks={tasksItems} toggleTask={toggleTask} />
        </div>
        <div className='beer-animation-wrapper flex justify-center items-center card w-96 shadow-xl h-2/3 mb-4'>
          <div className='beer'>
            <div className='liquid'></div>
            <div className='foam'></div>
          </div>
        </div>
        <div className='card w-96 bg-base-100 shadow-xl h-2/3 mb-4 p-4'>
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
      </main>
    </>
  )
}

export default App