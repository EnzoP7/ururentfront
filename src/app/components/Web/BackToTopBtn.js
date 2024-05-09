"use client";

import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

import { Link } from "react-scroll";

const BackToTopBtn = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <Link
      to="home"
      smooth={true}
      spy={true}
      className={`${
        !active && "hidden"
      } fixed bg-accent hover:bg-accent-hover w-12 h-12 right-[20px] bottom-11 z-10  
     cursor-pointer flex justify-center items-center text-white border-2 border-white`}
    >
      <FaChevronUp className="text-xl" />
    </Link>
  );
};

export default BackToTopBtn;
