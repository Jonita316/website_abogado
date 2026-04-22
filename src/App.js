import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ConsultaLegal from "./pages/ConsultaLegal";
import Footer from "./components/Footer";
import Penal from "./pages/Penal";
import Familia from "./pages/Familia";
import Divorcio from "./pages/Divorcio";
import Laboral from "./pages/Laboral";
import Civiles from "./pages/Civiles";
import Mercantil from "./pages/Mercantil";
import Tributario from "./pages/Tributario";
import Ambiental from "./pages/Ambiental";
import Herencias from "./pages/Herencias";
import Inmobiliarios from "./pages/Inmobiliarios";
import SmoothScrollbar from "./components/SmoothScrollbar";

export default function App() {
  return (
    <Router>
      <NavMenu />
      <SmoothScrollbar>
        <Routes>
          <Route path="/inmobiliarios" element={<Inmobiliarios />} />
          <Route path="/herencias" element={<Herencias />} />
          <Route path="/ambiental" element={<Ambiental />} />
          <Route path="/tributario" element={<Tributario />} />
          <Route path="/mercantil" element={<Mercantil />} />
          <Route path="/civiles" element={<Civiles />} />
          <Route path="/laboral" element={<Laboral />} />
          <Route path="/divorcio" element={<Divorcio />} />
          <Route path="/familia" element={<Familia />} />
          <Route path="/penal" element={<Penal />} />

          <Route path="/ConsultaLegal" element={<ConsultaLegal />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </SmoothScrollbar>
    </Router>
  );
}
