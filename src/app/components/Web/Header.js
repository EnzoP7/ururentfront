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
    query: "(min-width: 1300px)",
  });
  const isMobile = useMediaQuery({ maxWidth: 1300 });
  const isPC = useMediaQuery({ minWidth: 1300 });

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
        header ? "bg-azul shadow-md py-2 " : "bg-azul shadow-none py-4"
      }
  fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">
          {/*Logo */}
          <ScrollLink
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            <Image
              src={"/images/marca/logo.png"}
              width={194}
              height={64}
              alt="Logo"
            />
          </ScrollLink>
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
          <ScrollLink
            className="cursor-pointer"
            to="home"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Inicio
          </ScrollLink>
          <ScrollLink
            className="cursor-pointer"
            to="cars"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Vehículos
          </ScrollLink>
          <ScrollLink
            className="cursor-pointer"
            to="about"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
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
            to="testimonials"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Testimonios
          </ScrollLink>
          <ScrollLink
            className="cursor-pointer"
            to="contact"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Contacto
          </ScrollLink>
          <Link href="/login" className="cursor-pointer">
            Iniciar Sesión
          </Link>

          <ScrollLink
            className="xl:hidden btn bg-accent-hover text-accent btn-sm max-w-[164px] mx-auto"
            to="/"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Ver Vehículos
          </ScrollLink>

          <SearchMobile />
        </nav>
      </div>
    </header>
  );
};

export default Header;
