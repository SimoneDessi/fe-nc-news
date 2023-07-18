// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import  Navigator  from "./components/Navigator";
import Home  from "./pages/Home";
import Articles from "./pages/Articles";
import Login from "./pages/Login";
import Topics from "./pages/Topics";



function App() {
 

  return (
    <>
    <div>
    <Navigator />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/articles" element={<Articles />} />
    <Route path="/topics" element={<Topics />} />
    </Routes>
    </div>
    </>
  )
}

export default App