import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Layout/Header";
import About from "./component/Pages/About";
import Home from "./component/Pages/Home";
import Service from "./component/Pages/Service";
import Contact from "./component/Pages/Contact";
import Footer from "./component/Layout/Footer";
import Error from "./component/Pages/Error";
import GoTop from "./component/Layout/GoTop";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <GoTop />
      <Footer />
    </>
  );
}

export default App;
