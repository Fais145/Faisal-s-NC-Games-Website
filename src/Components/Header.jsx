import HeaderLogo from "./HeaderLogo"
import HeaderNavbar from "./HeaderNavbar"

function Header({loggedInUser,setLoggedInUser}) {
  return (
    <header className="header">
      <HeaderLogo className="logo"/>
      <h1 className="MAINtitle">Game Critic</h1>   
      <HeaderNavbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>     
    </header>
  )
}

export default Header