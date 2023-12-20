import { useState } from 'react'

export const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    createNewTask(newTaskName)
    setNewTaskName('')
  }

  return (
    <form className='flex flex-wrap justify-center' onSubmit={handleSubmit}>
      <input
        className='input input-bordered input-accent w-full max-w-xs my-5'
        type='text'
        placeholder='Enter a new task'
        onChange={e => setNewTaskName(e.target.value)}
        value={newTaskName}
      />
      <button className='btn btn-outline btn-accent w-full max-w-xs mb-5'>
        Save task
      </button>
    </form>
  )
}
