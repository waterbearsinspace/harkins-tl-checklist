import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom'
import Logo from "./components/logo";

export default function ErrorPage() {
  return (
    <div className="container error">
      <header className='logo-container'>
          <Logo />
        </header>

      <div className="error">
        <p>Oops!</p>
        <br></br>
        <p>Sorry, an unexpected error has occurred.</p>
        <br></br>
        <p>Try refreshing the page.</p>
      </div>
      
      <Link to={"/"} className='view-checklist-button'>Home</Link>
    </div>
  );
}
