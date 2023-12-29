import { useState } from 'react'

export const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    createNewTask(newTaskName)
    setNewTaskName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='input input-bordered input-accent w-full mb-4'
        type='text'
        placeholder='Enter a new task'
        onChange={e => setNewTaskName(e.target.value)}
        value={newTaskName}
      />
      <button className='btn btn-success w-full mb-4'>Save task</button>
    </form>
  )
}
