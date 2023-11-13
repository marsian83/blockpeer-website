import { Link } from "react-router-dom";
import Icon from "./Icon";

const socials = [
  {
    name: "instagram",
    link: "https://www.instagram.com/",
    icon: "done",
  },
  {
    name: "twitter",
    link: "https://www.instagram.com/",
    icon: "passKey",
  },
  {
    name: "facebook",
    link: "https://www.instagram.com/",
    icon: "github",
  },
] as const;

const usefulLinks = [
  [
    { title: "Destinations", link: "/" },
    { title: "Gallery", link: "/" },
    { title: "Contact Us", link: "/" },
    { title: "Collaborate", link: "/" },
  ],
  [
    { title: "Terms & Conditions", link: "/" },
    { title: "Privacy Policy", link: "/" },
    { title: "Cookie Policy", link: "/" },
  ],
  [
    { title: "Help", link: "/" },
    { title: "Support", link: "/" },
    { title: "Partner with us", link: "/" },
  ],
];

export default function Footer() {
  return (
    <footer>
      <div className="p-page relative">
        <div
          className="flex flex-col items-center translate-y-32 py-6 border border-primary border-opacity-20 bg-background rounded-lg"
          style={{ boxShadow: "8px 2px 16px #00000038" }}
        >
          <div className="flex flex-col gap-y-5 text-center">
            <h2 className="text-4xl font-light text-primary">
              Feeling Left Out?
            </h2>
            <p className="text-sm">
              Every once in a while, we send out a newsletter featuring the
              latest and best in accounting. Subscribe to never miss out.
            </p>
          </div>
          <div className="w-1/2 mt-6 overflow-hidden relative flex border border-front rounded-full focus-within:bg-primary focus-within:bg-opacity-10">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-3 w-full text-opacity-50 outline-none border-none bg-transparent"
            />
            <button className="absolute right-0 top-0 h-full bg-primary px-10 text-back">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <footer className="pt-44 pb-6 p-page bg-primary flex text-back justify-between">
        <div className="flex flex-col gap-y-5 items-baseline basis-2/5">
          <Link to="/" className="flex gap-x-3 items-center" draggable={false}>
            <img
              src="/logo.svg"
              alt="blockpeer logo"
              className="brightness-0 invert h-12"
              draggable={false}
            />
            <img
              src="/brand.svg"
              alt="blockpeer branding"
              className="brightness-0 invert h-6"
              draggable={false}
            />
          </Link>
          <p className="opacity-70">
            Lorem ipsum dolor sit amet. 33 nulla odit aut quia fugit in culpa
            voluptatem sit esse quasi. Qui distinctio cupiditate sit tempora
            exercitationem et ducimus internos sed perspiciatis expedita eos
            porro dolorem.
          </p>
          <div className="flex text-lg font-light gap-x-3 items-center  ">
            Follow us on
            {socials.map((social) => (
              <div
                key={social.name}
                className="rounded-full bg-background flex justify-center items-center p-1"
              >
                <Icon icon={social.icon} className="text-primary text-2xl" />
              </div>
            ))}
          </div>
        </div>
        <div className="basis-2/5">
          <h2 className="text-2xl font-light py-4">Useful Links</h2>
          <div className="flex justify-between">
            {usefulLinks.map((sect) => (
              <div
                key={usefulLinks.indexOf(sect)}
                className="flex flex-col gap-y-2"
              >
                {sect.map((link) => (
                  <Link
                    key={link.title}
                    className="font-semibold text-sm"
                    to={link.link}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </footer>
      <div className="w-full text-center text-xs py-2 border-t bg-primary border-back border-opacity-40 text-back">
        © BlockPeer. All Rights Reserved 2023.
      </div>
    </footer>
  );
}
