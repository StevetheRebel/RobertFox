import React from "react";
import Navbar from "./Components/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import { Home, About, Contact } from "./components/pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
