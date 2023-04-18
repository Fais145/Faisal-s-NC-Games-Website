import HeaderLogo from "./HeaderLogo"
import HeaderNavbar from "./HeaderNavbar"

function Header() {
  return (
    <header className="header">
      <HeaderLogo className="logo"/>
      <h1 className="MAINtitle">Game Critic</h1>   
      <HeaderNavbar/>     
    </header>
  )
}

export default Header