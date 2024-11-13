import { BrowserRouter,Route, Routes } from "react-router-dom";
import PostMain from "./page/post/PostMain";
import PostView from "./page/post/PostView";

function App(){
  return(
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path="/postView/:no" Component={PostView}/>
        <Route exact path="/" Component={PostMain}/></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
