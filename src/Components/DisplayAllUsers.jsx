import UserCard from "./UserCard"
function DisplayAllUsers({users,setLoggedInUser}) {

return (
    <div>
        <h2>Choose which user to sign in as:</h2>
        {users.map((user) => (
        <UserCard key={user.username} user={user} setLoggedInUser={setLoggedInUser}
        />
      ))}
    </div>
  )
}

export default DisplayAllUsers