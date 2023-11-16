import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import useModal from "../hooks/useModal";
import { useEffect } from "react";
import PromotionalModal from "../common/PromotionalModal";
import { twMerge } from "tailwind-merge";

export default function Default() {
  const modal = useModal();

  useEffect(() => {
    const flag =
      Number(localStorage.getItem("blockpeer__seen__callSchedule")) || 1;

    if (flag === 1) {
      localStorage.setItem("blockpeer__seen__callSchedule", "1");
    }

    setTimeout(() => {
      if (flag != -1) {
        localStorage.setItem(
          "blockpeer__seen__callSchedule",
          (flag + 1).toString()
        );
        modal.show(<PromotionalModal.CallSchedule />);
      }
    }, 60 * 1000 * flag);
  }, []);

  return (
    <main className="relative">
      <Navbar />
      <Outlet />
      <Footer />

      <article
        className={twMerge(
          "flex justify-center items-center z-[1001] bg-black bg-opacity-60 fixed top-0 left-0 w-full h-full duration-500",
          modal.element ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        {modal.element}
      </article>
    </main>
  );
}
