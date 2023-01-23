import React from "react";
import Home from "./pages/home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/about";
import AcademicsPage from "./pages/academics";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/academics" element={<AcademicsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
