import { Outlet } from "react-router";
import Footer from "src/sections/layout/Footer";
import NavBar from "src/sections/layout/NavBar";

export default function MainLayout() {
  return (
    <div className="font-main">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
