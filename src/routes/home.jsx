import { useState } from 'react'
import Logo from '../components/logo'
import { Link } from 'react-router-dom'

function Home() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];
  const today = new Date();
  const day = today.getDay();
  const month = today.toLocaleString('default', {month: 'short'});

  const [shift, setShift] = useState(localStorage.getItem("shift"));
  const [position, setPosition] = useState(localStorage.getItem("position"));

  const handleShiftChange = (newShift) => {
    if (localStorage.getItem("shift") == newShift) {
      localStorage.removeItem("shift");
      setShift();
    }
    else {
      localStorage.setItem("shift", newShift);
      setShift(newShift);
    }
    console.log(localStorage.getItem("shift"));
    console.log(localStorage.getItem("position"));
  }

  const handlePositionChange = (newPosition) => {
    if (localStorage.getItem("position") == newPosition) {
      localStorage.removeItem("position");
      setPosition();
    }
    else {
      localStorage.setItem("position", newPosition);
      setPosition(newPosition);
    }
    console.log(localStorage.getItem("shift"));
    console.log(localStorage.getItem("position"));
  }

  return (
    <>
      <div className='container container-gap'>
        <header className='logo-container'>
          <Logo />
        </header>

        <p>{days[day].toUpperCase()} | {month.toUpperCase()} {today.getDate()}</p>
        
        <section className='shift-options'>
          <p onClick={() => handleShiftChange("Opening")}
            className={localStorage.getItem("shift") == "Opening" ? "active" : ""}>
            Opening
          </p>
          <p onClick={() => handleShiftChange("Closing")}
            className={localStorage.getItem("shift") == "Closing" ? "active" : ""}>Closing</p>
        </section>

        <section className='shift-options'>
          <p onClick={() => handlePositionChange("Box")}
            className={localStorage.getItem("position") == "Box" ? "active" : ""}>
            Box
          </p>
          <p onClick={() => handlePositionChange("Concessions")}
            className={localStorage.getItem("position") == "Concessions" ? "active" : ""}>
            Concessions
          </p>
          <p onClick={() => handlePositionChange("Usher")}
            className={localStorage.getItem("position") == "Usher" ? "active" : ""}>
            Usher
          </p>
        </section>

        <Link to={ ((localStorage.getItem("shift") == null) || (localStorage.getItem("position") == null)) ? "/" : "/tasks"} className='view-checklist-button'>View Checklist</Link>
      </div>
    </>
  )
}

export default Home