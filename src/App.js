import { Routes,Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import DisplayAllReviews from "./Components/DisplayAllReviews";
import DisplaySingleReview from "./Components/DisplaySingleReview";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element = {<DisplayAllReviews/>}/>
        <Route path='/Home' element = {<DisplayAllReviews/>}/>
        <Route path ='/reviews/:review_id' element = {<DisplaySingleReview/>}/>
        {/* category drop list``
        on the left: checkbox ``
        on the right: display list name`` */}
      </Routes>
    </div>
  );
}

export default App;
