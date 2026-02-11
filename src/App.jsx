import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/navbar";

import Home from "./components/Home/home";
import Students from "./components/Students/students";
import Academics from "./components/Academics/academics";
import Examination from "./components/Examination/examination";
import IQAC from "./components/IQAC/placement";
import Careers from "./components/Careers/careers";

import AboutLayout from "./components/About/AboutLayout";
import TheCollege from "./components/About/Thecollege";

import Life from "./components/Life/life";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutLayout />}>
          <Route index element={<TheCollege />} />
        </Route>

        <Route path="/students" element={<Students />} />

        <Route path="/academics" element={<Academics />} />
        <Route path="/examination" element={<Examination />} />
        <Route path="/iqac" element={<IQAC />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/life" element={<Life />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
