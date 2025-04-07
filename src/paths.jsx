import { Route, Routes, BrowserRouter as Router } from "react-router";

import MainLayout from "./layout/MainLayout";

import { HomePage,Portfolio,OurServices,Contact } from "src/pages";

const Paths = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="service" element={<OurServices />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default Paths;
