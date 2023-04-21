import { Link } from 'react-router-dom';

function UserCard({user,setLoggedInUser}) {
    const chooseUser = () => {
        setLoggedInUser(user)

    }

    return (
      <div className="user-card-container">
        <Link to={'/SignedIn'}>
        <div className="user-card" onClick={chooseUser}>
          <img src={user.avatar_url} alt={`${user.username} profile picture`} />
          <h3>{user.username}</h3>
        </div>
        </Link>
      </div>
    );
  }
  
  export default UserCard;
  