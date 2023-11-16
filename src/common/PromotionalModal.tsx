import Icon from "./Icon";
import { Link } from "react-router-dom";
import useModal from "../hooks/useModal";

function CallSchedule() {
  const modal = useModal();
  return (
    <div className="w-[50vw] aspect-[21/9] flex bg-secondary rounded-3xl duration-300 relative">
      <div className="flex-1 flex flex-col h-full justify-between pl-10 pt-8 pr-3 relative z-10 text-back drop-shadow-lg">
        <div>
          <div className="flex invert brightness-0 gap-x-2 items-center">
            <img src="/logo.svg" alt="logo" className="h-[3.4em]" />
            <img src="/brand.svg" alt="brand" className="h-[1.8em]" />
          </div>
          <h1 className="mt-8 font-lato font-medium text-2xl">
            New to BlockPeer?
          </h1>

          <h2 className="text-2xl font-light font-lato">
            Let us show you around!
          </h2>
        </div>

        <Link
          to="/demo"
          className="btn-1 justify-self-end mb-10 w-max"
          onClick={() => {
            modal.hide();
            localStorage.setItem("blockpeer__seen__callSchedule", "-1");
          }}
        >
          Schedule a call
        </Link>
      </div>
      <img
        src="/images/support.png"
        alt="please schedule call"
        className="scale-125 -translate-y-[12.5%] z-10 relative"
      />
      <div className="z-1 absolute-cover bg-gradient-to-b from-primary to-primary via-white opacity-20 rounded-inherit"></div>
      <div className="z-1 absolute-cover bg-gradient-to-br from-primary to-primary via-white opacity-20 rounded-inherit"></div>
      <div className="pl-3 pr-5 pt-3 relative z-10 duration-inherit">
        <button
          className="text-back text-3xl drop-shadow-lg duration-inherit hover:scale-125"
          onClick={modal.hide}
        >
          <Icon icon="close" />
        </button>
      </div>
    </div>
  );
}

const PromotionalModal = { CallSchedule };

export default PromotionalModal;
