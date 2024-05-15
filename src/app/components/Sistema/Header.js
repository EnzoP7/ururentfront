"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiMenuAltRight, BiX } from "react-icons/bi";

const HeaderS = () => {
  const [nav, setNav] = useState(false);
  return (
    <div>
      <div className="bg-azul flex items-center justify-between text-white py-3 border-b-4 border-amarillo">
        <div>
          <Image
            src={"/images/marca/logo.png"}
            height={200}
            width={200}
            priority
            alt="Logo"
          />
        </div>
        <div className="hidden md:flex items-center gap-5 pr-10">
          <Link href={"/SistemaWeb/"}>Inicio</Link>
          <Link href={"#"}>Empleados</Link>
          <Link href={"/SistemaWeb/vehiculos"}>Vehiculos</Link>
          <Link href={"#"}>Clientes</Link>
          <Link href={"#"}>Sucursales</Link>
          <Link href={"#"}>Gastos</Link>
          <Link href={"#"}>Alquileres</Link>
        </div>
        <div className="hidden md:flex items-center gap-5 pr-10">
          <Link href={"#"}>Sucursal</Link>
          <Link href={"#"}>Empleado</Link>
          <Link href={"#"}>Cerrar Sesión</Link>
        </div>

        {/* Nav open Menu*/}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer md:hidden pr-3"
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
        <Link href={"/SistemaWeb/"}>Inicio</Link>
        <Link href={"/SistemaWeb/vehiculos"}>Vehiculos</Link>
        <Link href={"#"}>Clientes</Link>
        <Link href={"#"}>Sucursales</Link>
        <Link href={"#"}>Alquileres</Link>
        <Link href={"#"}>Informes</Link>
        <Link href={"#"}>Empleados</Link>
        <Link href={"#"}>Gastos</Link>
        <hr className="border-amarillo" />
        <Link href={"#"}>Sucursal</Link>
        <Link href={"#"}>Empleado</Link>
        <Link href={"#"}>Cerrar Sesión</Link>
      </nav>
    </div>
  );
};

export default HeaderS;
