import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import NotfoundPage from "./pages/NotfoundPage";


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>   
        <Route index element={<HomePage />} />
        <Route path='*' element={<NotfoundPage/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
