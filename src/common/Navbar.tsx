import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Icon, { IconType } from "./Icon";
import useClickOutside from "../hooks/useClickOutside";

const scrollThreshold = window.innerHeight * 0.15;

export default function Navbar() {
  const [hidden, setHidden] = useState(false);

  function handleScroll() {
    const currY = window.scrollY;
    if (currY < window.innerHeight * 0.25) {
      setHidden(false);
    } else {
      setTimeout(() => {
        if (window.scrollY > currY + scrollThreshold) {
          setHidden(true);
        }
        if (window.scrollY < currY - scrollThreshold / 2) {
          setHidden(false);
        }
      }, 200);
    }
  }

  useEffect(() => {
    // Check for user intent to scroll and hide / show navbar accordingly
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={twMerge(
        "fixed w-full flex justify-center items-center p-page py-5 z-[999] bg-background duration-500",
        hidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="text-xl flex-1 flex gap-x-3 items-center">
        <Link to="/" className="duration-300 hover:scale-110">
          <img src="/logo.svg" alt="BlockPeer logo" className="h-[2em]" />
        </Link>
        <img src="/brand.svg" alt="BlockPeer" className="h-[1em]" />
      </div>

      <div className="flex items-center gap-x-5 text-black">
        <NavDropdown.Container title="Features">
          <FeaturesDropdown />
        </NavDropdown.Container>
        <NavItem to="/about-us">About Us</NavItem>
        <NavItem to="/pricing">Pricing</NavItem>
        <NavItem to="/blog">Blog</NavItem>
      </div>

      <div className="flex-1 flex justify-end items-center">
        <button className="btn-1">Book Demo</button>
      </div>
    </nav>
  );
}

function FeaturesDropdown() {
  return (
    <NavDropdown.Body>
      <NavDropdown.Section title="Pol">
        <NavDropdown.Item
          link="/"
          icon="passKey"
          title="Social Login Wallets"
          description="Create a safe multisig within BlockPeer with your employees as signers"
        />
        <NavDropdown.Item
          link="/"
          icon="safetyDivider"
          title="Safe MultiSig"
          description="Crypto invoices encrypted & stored in Tableland making it fully decentralized."
        />
        <NavDropdown.Item
          link="/"
          icon="paid"
          title="Payments in Crypto"
          description="Automate employee onboarding and payroll with soulbound IDs and bulk payments."
        />
        <NavDropdown.Item
          link="/"
          icon="receiptLong"
          title="Crypto Invoicing"
          description="Streamline crypto bill payments and offer credit purchases with PDC Finance commitments."
        />
        <NavDropdown.Item
          link="/"
          icon="accountBalance"
          title="Crypto Payroll / Payday Finance"
          description="Streamline crypto bill payments and offer credit purchases with PDC Finance commitments."
        />
        <NavDropdown.Item
          link="/"
          icon="analytics"
          title="Full Fledged Accounting"
          description="Enable email-based Accounts with web3auth for seamless Safe Multisig access."
        />
      </NavDropdown.Section>
    </NavDropdown.Body>
  );
}

interface NavItemProps {
  children?: React.ReactNode;
  to: string;
}

function NavItem(props: NavItemProps) {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) =>
        twMerge(
          "px-5 py-1",
          isActive && "bg-secondary bg-opacity-20 text-black rounded-md"
        )
      }
    >
      {props.children}
    </NavLink>
  );
}

interface NavDropdownContainerProps {
  title: string;
  children?: React.ReactNode;
}

function NavDropdownContainer(props: NavDropdownContainerProps) {
  const [open, setOpen] = useState(false);

  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  useClickOutside(ref, () => setOpen(false));

  return (
    <div className="" ref={ref}>
      <button
        className={twMerge(
          "flex items-center gap-x-1 duration-200 px-5 py-1",
          open && "bg-secondary bg-opacity-20 text-black rounded-md"
        )}
        onClick={() => setOpen(true)}
      >
        {props.title} <Icon icon="expand_more" className="text-[1.2em]" />
      </button>
      <div
        className={twMerge(
          "absolute top-20 left-[50vw] -translate-x-1/2 duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        {props.children}
      </div>
    </div>
  );
}

interface NavDropdownBodyProps {
  children: React.ReactNode;
}

function NavDropdownBody(props: NavDropdownBodyProps) {
  return (
    <div className="bg-background py-4 px-7 rounded-md border border-front border-opacity-20 shadow-md">
      {props.children}
    </div>
  );
}

interface NavDropdownSectionProps {
  title: string;
  children?: React.ReactNode;
}

function NavDropdownSection(props: NavDropdownSectionProps) {
  return (
    <section>
      <h3 className="text-lg font-semibold mb-5">{props.title}</h3>
      <div className="flex flex-wrap w-[66vw] gap-y-7 mb-5">
        {props.children}
      </div>
    </section>
  );
}

interface NavDropdownItemProps {
  link: string;
  icon: IconType;
  title: string;
  description: string;
}

function NavDropdownItem(props: NavDropdownItemProps) {
  return (
    <Link
      className="w-[30vw] flex items-center gap-x-4 duration-200 hover:bg-secondary py-3 px-4 rounded-md hover:bg-opacity-20"
      to={props.link}
    >
      <div className="border border-front border-opacity-30 p-2 rounded">
        <Icon icon={props.icon} className="text-3xl" />
      </div>
      <div className="flex flex-col gap-y-1">
        <h3 className="font-medium">{props.title}</h3>
        <h5 className="text-sm text-front text-opacity-70">
          {props.description}
        </h5>
      </div>
    </Link>
  );
}

const NavDropdown = {
  Container: NavDropdownContainer,
  Body: NavDropdownBody,
  Section: NavDropdownSection,
  Item: NavDropdownItem,
};
