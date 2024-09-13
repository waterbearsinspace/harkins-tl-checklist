import { useState } from 'react'
import Logo from '../components/logo'

function Home() {

  return (
    <>
      <div className='container'>
        <header className='logo-container'>
          <Logo />
        </header>

        <p>SUNDAY | SEP 7</p>
        
        <section className='shift-options'>
            <p>Opening</p>
            <p>Closing</p>
        </section>

        <section className='shift-options'>
            <p>Box</p>
            <p>Concessions</p>
            <p>Usher</p>
        </section>

        <button>Placeholder</button>
      </div>
    </>
  )
}

export default Home