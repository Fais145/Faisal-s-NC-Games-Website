import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HeaderNavbar({ loggedInUser, setLoggedInUser }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSignOut = () => {
    // Call a function to handle sign out logic, e.g. API call, etc.
    // Then update the loggedInUser state to an empty object
    setLoggedInUser({});
  }

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to='/Home'>
            Home
          </Link>
        </li>
        <li>
          <a>Post review</a>
        </li>
        <li>
          <div className="profile-dropdown" onClick={() => setShowDropdown(!showDropdown)}>
            {loggedInUser.username ?
              <div className="profile-info">
                <img className="logged-in-dp" src={loggedInUser.avatar_url} alt='your profile picture' />
                <span>{loggedInUser.username}</span>
              </div>
              :
              <Link to='/signIn'>
                Demo User
              </Link>
            }
            {showDropdown &&
              <div className="dropdown-menu">
                <button onClick={handleSignOut}>Sign Out</button>
              </div>
            }
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavbar;
