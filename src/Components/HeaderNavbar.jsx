import {Link} from 'react-router-dom'
function HeaderNavbar() {
    return <nav className="navbar">
      <ul>
            <li>
              <Link to ='/Home'>
                Home
                </Link>
                </li>
            <li><a>Post review</a></li>
            <li><a>Profile</a></li>
          </ul>
    </nav>;
  }
  
  
  export default HeaderNavbar;
  