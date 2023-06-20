import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Write from "./pages/write";
import ClassGroup from "./pages/class";
import Home from "./pages/home";
import States from "./pages/states";
import Nav from "./components/nav";



function App() {

    const [apiStateData, setApiStateData] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:5000/api/states")
      .then((response) => response.json())
      .then((data) => {
        setApiStateData(data);
      });
  }, []);
  
  return (
    <>
    <Nav />
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/states" element={<States data={apiStateData}/>} />
          <Route path="/write" element={<Write />} />
          <Route path="/class" element={<ClassGroup teacher={'Ms.teach-teach'}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
