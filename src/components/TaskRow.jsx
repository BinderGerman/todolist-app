export const TaskRow = ({ task, toggleTask }) => {
  return (
    <tr>
      <td>
        <label>
          <input
            className='checkbox checkbox-error'
            type='checkbox'
            checked={task.done}
            onChange={() => toggleTask(task)}
          />
        </label>
      </td>
      <td>{task.name}</td>
    </tr>
  )
}
