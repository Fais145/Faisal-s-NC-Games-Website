import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function HeaderNavbar({ loggedInUser, setLoggedInUser }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleSignOut = () => {
    // Call a function to handle sign out logic, e.g. API call, etc.
    // Then update the loggedInUser state to an empty object
    setLoggedInUser({});
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

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
          {loggedInUser.username ?
            <div className="profile-dropdown" onClick={() => setShowDropdown(!showDropdown)} ref={dropdownRef}>
              <div className="profile-info">
                <img className="logged-in-dp" src={loggedInUser.avatar_url} alt='your profile picture' />
                <span>{loggedInUser.username}</span>
              </div>
              {showDropdown &&
                <div className="dropdown-menu">
                  <div className="dropdown-item">About me</div>
                  <div className="dropdown-item" onClick={handleSignOut}>Sign Out</div>
                </div>
              }
            </div>
            :
            <Link to='/signIn'>
              Demo User
            </Link>
          }
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavbar;
