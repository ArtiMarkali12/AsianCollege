import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/navbar";

import Home from "./components/Home/home";

import Students from "./components/Students/Students";
import Courses from "./components/Students/Courses";
import NoticeBoard from "./components/Students/NoticeBoard";
import Admission from "./components/Students/Admission";
import Bcom from "./components/Students/bcom";

import Nss from "./components/Academics/Nss";
import Gallery from "./components/Academics/Gallery";
import Blog from "./components/Academics/blog";
import NewsSection from "./components/Academics/newspeper";

import Examination from "./components/Examination/examination";
import IQAC from "./components/IQAC/placement";
import Careers from "./components/Careers/careers";

import AboutLayout from "./components/About/AboutLayout";
import TheCollege from "./components/About/Thecollege";

import Life from "./components/Life/life";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Art from "./components/Students/art";
import Bsc from "./components/Students/sci";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* About Section */}
        <Route path="/about" element={<AboutLayout />}>
          <Route index element={<TheCollege />} />
        </Route>

        {/* ✅ Students Nested Routes */}
        <Route path="/students" element={<Students />}>
          <Route path="courses" element={<Courses />} />
          <Route path="courses/bcom" element={<Bcom />} />
          <Route path="courses/art" element={<Art/>}/>
          <Route path="courses/sci" element={<Bsc/>}/>
          <Route path="noticeboard" element={<NoticeBoard />} />
          <Route path="admission" element={<Admission />} />
        </Route>
        
        {/* Academics Section */}
        <Route path="/academics/blog" element={<Blog />} />
        <Route path="/academics/nss" element={<Nss />} />
        <Route path="/academics/newspeper" element={<NewsSection />} />
        <Route path="/academics/gallery" element={<Gallery />} />

        {/* Other Pages */}
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
