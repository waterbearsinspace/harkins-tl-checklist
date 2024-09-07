import { useState } from 'react'
import Logo from './Logo'
import tasks from './Tasks'
import './App.css'

function App() {

  return (
    <>
      <div style={{display: "flex", flexDirection: "column", minHeight: "100%"}}>
        <header style={{
            display: "flex", flexDirection: "column", 
            gap: "20px", backgroundColor: "rbg(25, 31, 64)",
          }}>
          
          <Logo />

          <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
            <div style={{display: "flex", justifyContent: "center", gap: "2%"}}>
              <button >Opening</button>
              <button >Closing</button>
            </div>

            <div style={{display: "flex", justifyContent: "center", gap: "2%"}}>
              <button >Box</button>
              <button >Concessions</button>
              <button >Usher</button>
            </div>
          </div>
        </header>


        <div style={{display: "flex", flexDirection: "column", height: "100%",
          justifyContent: "start", alignItems: "start",
          paddingLeft: "10%", paddingRight: "10%", margin: "0"}}>

          <h1>Opening</h1>

        </div>
      </div>
    </>
  )
}

export default App