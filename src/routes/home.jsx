import { useState } from 'react'

function Home() {

  return (
    <>
      <div className='container'>
        <header>
          <h1>
            Logo
          </h1>
        </header>

        <p>Day | Date</p>
        
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