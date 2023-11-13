import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

export default function Default() {
  return (
    <main className="relative">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
