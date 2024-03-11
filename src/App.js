import { Routes, Route } from "react-router-dom";
// import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Model from "./components/Model";
import Demo from "./components/Demo";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model" element={<Model />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
      <Footer />
    </>
  );
}
