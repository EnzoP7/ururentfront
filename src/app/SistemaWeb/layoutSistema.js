import React from "react";
import HeaderS from "../components/Sistema/Header";
import Link from "next/link";

const LayoutSistema = ({ children }) => {
  return (
    <div className="h-screen">
      <HeaderS />
      <div className="flex">
        {/* <aside className="hidden md:block bg-azul xl:w-[20%] md:w-[22%]  xl:h-[87.4vh] md:h-[80vh] border-r-2 border-amarillo">
          <div className="flex flex-col  my-auto text-white xl:gap-10 gap-4  text-xl xl:text-2xl font-bold text-center uppercase mt-5 px-3 xl:px-0 xl:mt-[100px]">
            <Link href={"#"}>Inicio</Link>
            <Link href={"#"}>Vehículos</Link>
            <Link href={"#"}>Clientes</Link>
            <Link href={"#"}>Sucursales</Link>
            <Link href={"#"}>Alquileres</Link>
            <Link href={"#"}>Informes</Link>
            <Link href={"#"}>Empleados</Link>
            <Link href={"#"}>Gastos</Link>
          </div>
        </aside> */}
        {children}
      </div>
    </div>
  );
};

export default LayoutSistema;
