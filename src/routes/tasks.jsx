import { useState } from 'react'
import Logo from '../components/logo'
import TaskList from '../components/tasklist'

function Tasks() {

  return (
    <>
      <div className='container task-view'>
        <div className='logo-container task-view'>
          <Logo />
          
          <div className='shift-info-container'>
            Opening Concessions
          </div>
        </div>

        <section className='card'>
          <TaskList />
        </section>
      </div>
    </>
  )
}

export default Tasks