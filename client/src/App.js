import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import NoMatch from "./pages/nomatch";
import SavedPets from "./pages/savedpets";
import Search from "./pages/search"


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="nomatch" element={<NoMatch />} />
      <Route path="savedpets" element={<SavedPets />} />
      <Route path="search" element={<Search />} />
    </Routes>
  </BrowserRouter>
  )
}


export default App;
