import { useState } from 'react'
import Logo from '../components/logo'
import TaskList from '../components/tasklist'
import XButton from '../components/xbutton'
import { Link } from 'react-router-dom'

function Tasks() {

  return (
    <>
      <div className='container task-view'>
        <Link to={"/"}>
          <div className='xButton'> 
            <XButton />
          </div>
        </Link>
        
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