export const VisibilityControl = ({
  isChecked,
  setShowCompleted,
  cleanTasks,
}) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete it')) {
      cleanTasks()
    }
  }

  return (
    <>
      <div className='flex mb-4 justify-center'>
        <input
          className='toggle toggle-error mr-4'
          checked={isChecked}
          type='checkbox'
          onChange={e => setShowCompleted(e.target.checked)}
        />
        <label className='font-bold'>Show Task Done</label>
      </div>
      <button className='btn btn-error w-full mb-4' onClick={handleDelete}>
        Clear Tasks
      </button>
    </>
  )
}
