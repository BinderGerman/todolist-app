export const VisibilityControl = ({ isChecked, setShowCompleted, cleanTasks }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete it')) {
      cleanTasks()
    }
  }

  return (
    <>
      <div className=' w-full max-w-xs flex my-5 justify-center'>
        <input
          checked={isChecked}
          className='checkbox checkbox-error mr-2'
          type='checkbox'
          onChange={e => setShowCompleted(e.target.checked)}
        />
        <label className='text-base text-center'>Show Task Done</label>
      </div>
      <button
        className='w-full max-w-xs btn btn-outline btn-error my-5'
        onClick={handleDelete}
      >
        Clear Tasks
      </button>
    </>
  )
}
