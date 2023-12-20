import { TaskRow } from './TaskRow'

export const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {
  const taskTableRows = doneValue => {
    return tasks
      .filter(task => task.done === doneValue)
      .map(task => (
        <TaskRow task={task} toggleTask={toggleTask} key={task.name} />
      ))
  }

  return (
    <div className='overflow-x-auto w-full max-w-xs mb-5'>
      <table className='table'>
        <thead>
          <tr>
            <th className='text-base text-center'>Tasks</th>
          </tr>
        </thead>
        <tbody>{taskTableRows(showCompleted)}</tbody>
      </table>
    </div>
  )
}
