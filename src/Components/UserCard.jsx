function UserCard({user,setLoggedInUser}) {
    const chooseUser = () => {
        setLoggedInUser(user)
    }

    return (
      <div className="user-card-container" onClick={chooseUser}>
        <div className="user-card">
          <img src={user.avatar_url} alt={`${user.username} profile picture`} />
          <h3>{user.name}</h3>
          <p>{user.username}</p>
        </div>
      </div>
    );
  }
  
  export default UserCard;
  