import { Route, Routes, BrowserRouter as Router } from "react-router";

import MainLayout from "./layout/MainLayout";

import { HomePage } from "src/pages";

const Paths = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default Paths;
