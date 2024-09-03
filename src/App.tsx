import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Index from "./pages/Index";
import ChallengeList from "./pages/ChallengeList";
import Navbar from "./components/Navbar";

const App : React.FC = () =>{

  return(
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={ <Index /> } /> */}
          <Route path="/" element={ <ChallengeList /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App