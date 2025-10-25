import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ContactPage from "./pages/Contact";
import BlogDetail from "./pages/BlogDetail";  // make sure this path is correct
import AboutPage from "./pages/about";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogdetail/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<ContactPage />} />
         <Route path="/about" element={<AboutPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;


