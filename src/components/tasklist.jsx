import tasks from "../scripts/tasks"

function TaskList() {
  return (
    <>
      <h1 className='section-title'>Opening</h1>
      {tasks
      .filter((task) => 
      {
        return ( 
          (task.shift == localStorage.getItem("shift")) && 
          (task.position == localStorage.getItem("position")) &&
          (task.type == "Opening")
        )
      })
      .map((task) => {
        return (
          <div className="task-container">
            <p className="task-name">{task.taskName}</p>
            <p className="task-description">{task.description}</p>
          </div>
        )
      })}

      <h1 className='section-title'>Weekly - {localStorage.getItem("day")}</h1>
      {tasks
      .filter((task) => 
      {
        return ( 
          (task.shift == localStorage.getItem("shift")) && 
          (task.position == localStorage.getItem("position")) &&
          (task.type == "Weekly") &&
          (task.day == localStorage.getItem("day"))
        )
      })
      .map((task) => {
        return (
          <div className="task-container">
            <p className="task-name">{task.taskName}</p>
            <p className="task-description">{task.description}</p>
          </div>
        )
      })}

      <h1 className='section-title'>Dailies</h1>
      {tasks
      .filter((task) => 
      {
        return ( 
          (task.shift == localStorage.getItem("shift")) && 
          (task.position == localStorage.getItem("position")) &&
          (task.type == "Daily")
        )
      })
      .map((task) => {
        return (
          <div className="task-container">
            <p className="task-name">{task.taskName}</p>
            <p className="task-description">{task.description}</p>
          </div>
        )
      })}

    </>
  )
}

export default TaskList