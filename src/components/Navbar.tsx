"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import { RiChat3Line } from "react-icons/ri";
import Button from "./ui/Button";

const Routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "#about",
  },
  {
    name: "Service",
    path: "#services",
  },
  {
    name: "Contact",
    path: "#contact",
  },
];

type Props = {
  onClick: () => void;
};
const Navlinks: React.FC<Props> = ({ onClick }) => {
  return (
    <>
      {Routes.map((route) => (
        <li key={route.path}>
          <Link
            href={route.path}
            className={`text-xl lg:text-slate-500 text-white`}
            onClick={onClick}
          >
            {route.name}
          </Link>
        </li>
      ))}
    </>
  );
};

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const handleClick = () => {
    setToggleNav(!toggleNav);
  };
  return (
    <div className="pt-8 flex justify-between items-center relative px-5">
      <a href="/" className="relative">
        <Image
          src="/health-icon.png"
          alt="logo"
          className="absolute -right-10 -top-2"
          width={40}
          height={40}
        />
        <span className="text-5xl font-bold text-transparent bg-gradient-96 bg-clip-text">
          Doctor
        </span>
      </a>
      <div
        className={`max-lg:fixed max-lg:opacity-0 inset-x-0 justify-center top-0 relative lg:flex lg:flex-row lg:bg-transparent h-full lg:w-[70%] lg:justify-between flex flex-col items-center gap-10 bg-primary z-40 max-lg:-translate-y-[100%] transition-transform ${
          toggleNav ? "!translate-y-0 !opacity-100" : ""
        }`}
      >
        <nav>
          <ul className="flex lg:flex-row flex-col lg:gap-10 gap-7 text-center">
            <Navlinks onClick={handleClick} />
          </ul>
        </nav>
        <Button className="gap-2">
          <RiChat3Line className="text-white" size={25} />
          <span>Book Now</span>
        </Button>
      </div>
      <button
        className="lg:hidden block relative z-50 cursor-pointer"
        onClick={handleClick}
      >
        {toggleNav ? (
          <LiaTimesSolid className="text-white" size={40} />
        ) : (
          <HiOutlineBars3 className="text-primary" size={40} />
        )}
      </button>
    </div>
  );
};

export default Navbar;
