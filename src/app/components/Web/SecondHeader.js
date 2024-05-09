"use client";

import { useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

import Image from "next/image";

import { BiMenuAltRight, BiX } from "react-icons/bi";
import SearchMobile from "./SearchMobile";
import { SearchContext } from "../../context/search";

const SecondHeader = () => {
  const { setSearchActive } = useContext(SearchContext);
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(true);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      if (window.scrollY > 800) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={` ${
        header ? "bg-azul shadow-md py-2 " : "bg-azul shadow-none py-4"
      }
  fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">
          {/*Logo */}
          <Link href="/" className="cursor-pointer">
            <Image
              src={"/images/marca/logo.png"}
              width={194}
              height={64}
              alt="Logo"
            />
          </Link>
          {/* Nav open Menu*/}
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer xl:hidden"
          >
            {nav ? (
              <BiX className="text-4xl text-white" />
            ) : (
              <BiMenuAltRight className="text-4xl text-white" />
            )}
          </div>
        </div>
        {/* Nav*/}
        <nav
          className={`${
            nav ? "max-h-max py-8 px-4 xl:py-0 xl:px-0" : "max-h-0"
          } flex flex-col w-full bg-accent gap-y-6 overflow-hidden font-bold xl:font-medium
           xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150
          text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case text-white`}
        >
          <Link className="cursor-pointer" href="/">
            Inicio
          </Link>
          <Link className="cursor-pointer" href="/">
            Vehículos
          </Link>
          <Link className="cursor-pointer" href="/">
            Sobre Nosotros
          </Link>
          <Link className="cursor-pointer" href="/">
            ¿Por qué elegirnos?
          </Link>
          <Link className="cursor-pointer" href="/">
            Testimonios
          </Link>
          <Link className="cursor-pointer" href="/">
            Contacto
          </Link>
          <Link href="/login" className="cursor-pointer">
            Iniciar Sesión
          </Link>

          <Link
            className="xl:hidden btn bg-accent-hover text-accent btn-sm max-w-[164px] mx-auto"
            href="/"
          >
            Ver Vehículos
          </Link>

          <SearchMobile />
        </nav>
      </div>
    </header>
  );
};

export default SecondHeader;
