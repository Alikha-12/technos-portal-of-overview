import React from "react";
import Home from "./pages/home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/about";
import AcademicsPage from "./pages/academics";
import BlogPage from "./pages/Blog";
import ContactPage from "./pages/Contact/Index";
import Footer from "./components/Footer";
import EnrollPage from "./pages/Enroll/Index";
import PageNotFound from "./pages/Error/Index";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/enroll" element={<EnrollPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
