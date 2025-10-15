import Image from "next/image";
import Link from "next/link";
import { House, BookImage, HandHelping, ShieldCheck } from "lucide-react";
import MobileNavbar from "../Navbar/mobileNavbar";
function Navbar() {
  const pages = [
    {
      name: "Home",
      link: "/",
      icon: <House />,
    },
    {
      name: "Gallery",
      link: "/gallery",
      icon: <BookImage />,
    },
    {
      name: "About",
      link: "/about",
      icon: <HandHelping />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <ShieldCheck />,
    },
  ];

  return (
    <header className="fixed top-0 backdrop-blur-md w-full z-50">
      <nav className="w-full p-3 flex justify-between items-center">
        {/* logo */}
        <div className=" w-2/6 md:w-1/6 flex justify-center items-center">
          <Image width={80} height={80} src={"/navbar/bglogo.png"} alt="Zeenath Foundation Logo" />
        </div>
        {/* all pages link */}
        <div className="w-4/6 hidden md:flex justify-center gap-5">
          {pages.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className={`flex items-center gap-2 font-semibold text-lg tracking-tight transition-all ease-in-out duration-200 hover:bg-neutral-100 p-2 rounded
                ${index === 0 && "hover:text-blue-400"}
                ${index === 1 && "hover:text-green-400"}
                ${index === 2 && "hover:text-orange-400"}
                ${index === 3 && "hover:text-pink-400"}
                `}
            >
              {link.name}
              {link.icon}
            </Link>
          ))}
        </div>
        {/* Donate button */}
        <div className="w-1/6 hidden md:flex justify-center items-center ">
          <button className=" bg-orange-600 text-white p-2 rounded tracking-tight hover:bg-orange-400 transition-all ease-in-out duration-200">
            Donate Us
          </button>
        </div>
        
          {/*mobile navbar  */}

          <MobileNavbar page={pages} />

      </nav>
    </header>
  );
}

export default Navbar;
