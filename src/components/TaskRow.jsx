export const TaskRow = ({ task, toggleTask }) => {
  return (
    <tr className='flex mb-2'>
      <td>
        <label>
          <input
            type='checkbox'
            className='checkbox checkbox-error'
            checked={task.done}
            onChange={() => toggleTask(task)}
          />
        </label>
      </td>
      <td className='font-bold '>{task.name}</td>
    </tr>
  )
}
