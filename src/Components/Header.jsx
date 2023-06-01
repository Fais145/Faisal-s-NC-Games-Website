import { Link } from "react-router-dom"
import HeaderLogo from "./HeaderLogo"
import HeaderNavbar from "./HeaderNavbar"

function Header({loggedInUser,setLoggedInUser}) {
  return (
    <header className="header">
      <HeaderLogo className="logo"/>
      <Link to={'/Home'}>
      <h1 className="MAINtitle">Game Critic</h1>  
      </Link> 
      <HeaderNavbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>     
    </header>
  )
}

export default Header