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
    <div className='overflow-x-auto'>
      <table className='table table-zebra'>
        <thead>
          <tr>
            <th className='font-bold text-center'>Tasks</th>
          </tr>
        </thead>
        <tbody>{taskTableRows(showCompleted)}</tbody>
      </table>
    </div>
  )
}
