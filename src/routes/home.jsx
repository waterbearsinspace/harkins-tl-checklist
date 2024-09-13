import { useState } from 'react'
import Logo from '../components/logo'
import { Link } from 'react-router-dom'

function Home() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];
  const today = new Date();
  const day = today.getDay();
  const month = today.toLocaleString('default', {month: 'short'});

  return (
    <>
      <div className='container container-gap'>
        <header className='logo-container'>
          <Logo />
        </header>

        <p>{days[day].toUpperCase()} | {month.toUpperCase()} {today.getDate()}</p>
        
        <section className='shift-options'>
            <p>Opening</p>
            <p>Closing</p>
        </section>

        <section className='shift-options'>
            <p>Box</p>
            <p>Concessions</p>
            <p>Usher</p>
        </section>

        <Link to={"/tasks"} className='view-checklist-button'>View Checklist</Link>
      </div>
    </>
  )
}

export default Home