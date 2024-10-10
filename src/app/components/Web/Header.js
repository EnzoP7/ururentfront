"use client";

import { useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";

import { BiMenuAltRight, BiX } from "react-icons/bi";
import SearchMobile from "./SearchMobile";
import { SearchContext } from "../../context/search";

const Header = () => {
  const { setSearchActive } = useContext(SearchContext);
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(true);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1280px)",
  });
  const isMobile = useMediaQuery({ maxWidth: 1279 });
  const isPC = useMediaQuery({ minWidth: 1280 });

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
  useEffect(() => {
    if (isMobile) {
      setNav(false); // Cerrar el menú cuando se detecta que es móvil
    }
  }, [isMobile]);

  useEffect(() => {
    if (isPC) {
      setNav(true); // Cerrar el menú cuando se detecta que es móvil
    }
  }, [isPC]);

  return (
    <header
      className={` ${
        header ? "bg-azul shadow-md py-2 " : "bg-azul shadow-none py-2"
      }
  fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
    >
      <div className=" xlg:container mx-auto flex flex-col xlg:flex-row xlg:items-center xlg:justify-between">
        <div className="flex justify-between items-center px-4">
          {/*Logo */}
          <ScrollLink
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            <div className="hidden xlg:flex">
              <Image
                src={"/images/marca/logo.png"}
                width={194}
                height={64}
                // className="w-[130px] h-[34px]  xl:w-[194px] xl:h-[64px]"
                alt="Logo"
              />
            </div>

            <div className="xlg:hidden">
              <Image
                src={"/images/marca/logo.png"}
                width={130}
                height={34}
                // className="w-[130px] h-[34px]  xl:w-[194px] xl:h-[64px]"
                alt="Logo"
              />
            </div>
          </ScrollLink>
          {/* Nav open Menu*/}
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer md:hidden"
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
            nav ? "max-h-max py-8 px-4 md:py-0 md:px-0" : "max-h-0"
          } flex flex-col w-full bg-accent gap-y-6 overflow-hidden font-bold md:font-medium
           md:flex-row md:w-max md:gap-x-8 md:h-max md:bg-transparent md:pb-0 transition-all duration-150
          text-center md:text-left uppercase text-sm md:text-[15px] md:normal-case text-white`}
        >
          <ScrollLink
            className="cursor-pointer"
            to="home"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
            onClick={() => (isMobile ? setNav(false) : null)}
          >
            Inicio
          </ScrollLink>
          <ScrollLink
            className="cursor-pointer"
            to="cars"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
            onClick={() => (isMobile ? setNav(false) : null)}
          >
            Vehículos
          </ScrollLink>
          <ScrollLink
            className="cursor-pointer"
            to="about"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
            onClick={() => (isMobile ? setNav(false) : null)}
          >
            Sobre Nosotros
          </ScrollLink>
          <ScrollLink
            className="cursor-pointer"
            to="why"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            ¿Por qué elegirnos?
          </ScrollLink>

          <ScrollLink
            className="cursor-pointer"
            to="contact"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
            onClick={() => (isMobile ? setNav(false) : null)}
          >
            Contacto
          </ScrollLink>
          <Link
            href="https://apps5.genexus.com/TesisUruRent/login.aspx"
            className="cursor-pointer"
          >
            Iniciar Sesión
          </Link>
          {/* <div className="hidden ">

          <ScrollLink
            className="xl:hidden btn bg-accent-hover text-accent btn-sm max-w-[164px] mx-auto"
            to="/"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Ver Vehículos
          </ScrollLink>

          <SearchMobile /> */}
          {/* </div> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
