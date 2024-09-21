import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HeaderTop from "./components/HeaderTop/HeaderTop";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Project from "./pages/Project/Project";
import Contact from "./pages/Contact/Contact";
import CompanyLogo from "./pages/CompanyLogo/CompanyLogo";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/brand" element={<CompanyLogo />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
