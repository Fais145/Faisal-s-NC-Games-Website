import { Routes,Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import DisplayAllReviews from "./Components/DisplayAllReviews";
import DisplaySingleReview from "./Components/DisplaySingleReview";
import { useEffect, useState } from "react";
import DisplayAllUsers from "./Components/DisplayAllUsers";
import { fetchAllUsers } from "./utils/gamesAPI";
import SignedIn from "./Components/SignedIn";

function App() {

  const [loggedInUser,setLoggedInUser]= useState({})
  const [users, setUsers] = useState([]);

  useEffect(()=> 
    fetchAllUsers().then((res)=>{setUsers(res)})
  ,[])

  return (
    <div className="App">
      <Header loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
      <Routes>
        <Route path='/' element = {<DisplayAllReviews/>}/>
        <Route path='/Home' element = {<DisplayAllReviews/>}/>
        <Route path='/reviews/:review_id' element = {<DisplaySingleReview users={users} loggedInUser={loggedInUser}/>}/>
        <Route path='/signIn' element = {<DisplayAllUsers users ={users} setLoggedInUser={setLoggedInUser}/>}/>
        <Route path='/signedIn' element = {<SignedIn loggedInUser={loggedInUser}/> } />
        <Route path ='/Home/:category' element={<DisplayAllReviews/>}/>
      </Routes>
    </div>
  );
}

export default App;
