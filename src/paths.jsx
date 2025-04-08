import { Route, Routes, BrowserRouter as Router } from "react-router";

import MainLayout from "./layout/MainLayout";

import {
  HomePage,
  Portfolio,
  OurServices,
  Contact,
  AboutUs,
  Blogs,
} from "src/pages";

const Paths = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="service" element={<OurServices />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default Paths;
