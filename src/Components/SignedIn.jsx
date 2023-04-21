import { Link } from 'react-router-dom';

function SignedIn({loggedInUser}) {
  return (
    <section className="signed-in">
        <h2>{`Succesfully signed in as ${loggedInUser.username}!` }</h2>
        <Link to={'/Home'}>
            <button>
                Return to Home
                </button>
        </Link>
    </section>
  )
}

export default SignedIn