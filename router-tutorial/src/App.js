import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profiles";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import NotFound from "./pages/NotFound";


const App = () => {
  return(
    <Routes>
      <Route element = {<Layout/>}>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profiles/:username" element={<Profile/>}/>
      </Route>
      <Route path="/articles" element={<Articles/>}>
        <Route path=":id" element={<Article/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default App;