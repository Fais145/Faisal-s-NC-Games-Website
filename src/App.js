import { Routes,Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import DisplayAllReviews from "./Components/DisplayAllReviews";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element = {<DisplayAllReviews/>}/>
        <Route path='/home' element = {<DisplayAllReviews/>}/>
        {/* category drop list``
        on the left: checkbox ``
        on the right: display list name`` */}
      </Routes>
    </div>
  );
}

export default App;
