import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderS from "../components/Sistema/Header";
import { PiCarSimpleBold } from "react-icons/pi";
import { FaUser, FaRegBuilding, FaUserTie } from "react-icons/fa";
import { IoKey, IoNewspaperOutline } from "react-icons/io5";
import LayoutSistema from "./layoutSistema";

const page = () => {
  return (
    // <div className="h-screen">
    //   <HeaderS />
    //   <div className="flex">
    //     <aside className="hidden md:block bg-azul xl:w-[20%] md:w-[22%]  xl:h-[87.4vh] md:h-[80vh] border-r-2 border-amarillo">
    //       <div className="flex flex-col  my-auto text-white xl:gap-10 gap-4  text-xl xl:text-2xl font-bold text-center uppercase mt-5 px-3 xl:px-0 xl:mt-[100px]">
    //         <Link href={"#"}>Inicio</Link>
    //         <Link href={"#"}>Vehículos</Link>
    //         <Link href={"#"}>Clientes</Link>
    //         <Link href={"#"}>Sucursales</Link>
    //         <Link href={"#"}>Alquileres</Link>
    //         <Link href={"#"}>Informes</Link>
    //         <Link href={"#"}>Empleados</Link>
    //         <Link href={"#"}>Gastos</Link>
    //       </div>
    //     </aside>
    // <div className="mx-auto text-white font-bold uppercase pt-10">
    //   <div className="flex md:flex-row flex-col  gap-y-5 xl:gap-y-0 md:gap-x-8 justify-between">
    //     <Link href={"#"}>
    //       <div className="flex flex-col items-center justify-center bg-azul  py-5 px-10 md:py-5 md:px-16 xl:py-10 xl:px-20  hover:bg-azulfuerte rounded-lg cursor-pointer">
    //         <PiCarSimpleBold className="size-[50px] xl:size-[100px] md:size-[60px] " />
    //         <h3 className="md:text-xl xl:text-3xl">Vehículos</h3>
    //       </div>
    //     </Link>
    //     <Link href={"#"}>
    //       <div className="flex flex-col items-center justify-center bg-azul py-5 px-10 md:py-5 md:px-16 xl:py-10 xl:px-20  hover:bg-azulfuerte rounded-lg cursor-pointer">
    //         <FaUser className="size-[50px] xl:size-[100px]  md:size-[60px]" />
    //         <h3 className="md:text-xl xl:text-3xl">Clientes</h3>
    //       </div>
    //     </Link>
    //     <Link href={"#"}>
    //       <div className="flex flex-col items-center justify-center bg-azul py-5 px-10 md:py-5 md:px-16 xl:py-10 xl:px-20  hover:bg-azulfuerte rounded-lg cursor-pointer">
    //         <FaRegBuilding className="size-[50px] xl:size-[100px] md:size-[60px] " />
    //         <h3 className="md:text-xl xl:text-3xl">Sucursales</h3>
    //       </div>
    //     </Link>
    //   </div>
    //   <div className="flex  gap-y-5 xl:gap-y-0 md:gap-x-8 md:flex-row flex-col justify-between pt-5 md:pt-14 xl:pt-24 pb-5 md:pb-0">
    //     <Link href={"#"}>
    //       <div className="flex flex-col items-center justify-center bg-azul py-5 px-10 md:py-5 md:px-16 xl:py-10 xl:px-20  hover:bg-azulfuerte rounded-lg cursor-pointer">
    //         <IoKey className="size-[50px] xl:size-[100px] md:size-[60px] " />
    //         <h3 className="md:text-xl xl:text-3xl">Alquileres</h3>
    //       </div>
    //     </Link>
    //     <Link href={"#"}>
    //       <div className="flex flex-col items-center justify-center bg-azul py-5 px-10 md:py-5 md:px-16 xl:py-10 xl:px-20  hover:bg-azulfuerte rounded-lg cursor-pointer">
    //         <IoNewspaperOutline className="size-[50px] xl:size-[100px] md:size-[60px] " />
    //         <h3 className="md:text-xl xl:text-3xl">Informes</h3>
    //       </div>
    //     </Link>
    //     <Link href={"#"}>
    //       <div className="flex flex-col items-center justify-center bg-azul py-5 px-10 md:py-5 md:px-16 xl:py-10 xl:px-20  hover:bg-azulfuerte rounded-lg cursor-pointer">
    //         <FaUserTie className="size-[50px] xl:size-[100px] md:size-[60px] " />
    //         <h3 className="md:text-xl xl:text-3xl">Empleados</h3>
    //       </div>
    //     </Link>
    //   </div>
    // </div>
    //   </div>
    // </div>
    <LayoutSistema>
      <div className="mx-auto text-white font-bold uppercase pt-10">
        <div className="flex md:flex-row flex-col  gap-y-5 xl:gap-y-0 md:gap-x-8 justify-between">
          <Link href={"/SistemaWeb/vehiculos"}>
            <div className="flex flex-col items-center justify-center bg-azul  py-5 px-10 md:py-5 md:px-16 xl:py-10 xl:px-20  hover:bg-azulfuerte rounded-lg cursor-pointer">
              <PiCarSimpleBold className="size-[50px] xl:size-[100px] md:size-[60px] " />
              <h3 className="md:text-xl xl:text-3xl">Vehículos</h3>
            </div>
          </Link>
          <Link href={"#"}>
            <div className="flex flex-col items-center justify-center bg-azul py-5 px-10 md:py-5 md:px-16 xl:py-10 xl:px-20  hover:bg-azulfuerte rounded-lg cursor-pointer">
              <FaUser className="size-[50px] xl:size-[100px]  md:size-[60px]" />
              <h3 className="md:text-xl xl:text-3xl">Clientes</h3>
            </div>
          </Link>
          <Link href={"#"}>
            <div className="flex flex-col items-center justify-center bg-azul py-5 px-10 md:py-5 md:px-16 xl:py-10 xl:px-20  hover:bg-azulfuerte rounded-lg cursor-pointer">
              <FaRegBuilding className="size-[50px] xl:size-[100px] md:size-[60px] " />
              <h3 className="md:text-xl xl:text-3xl">Sucursales</h3>
            </div>
          </Link>
        </div>
        <div className="flex  gap-y-5 xl:gap-y-0 md:gap-x-8 md:flex-row flex-col justify-between pt-5 md:pt-14 xl:pt-24 pb-5 md:pb-0">
          <Link href={"#"}>
            <div className="flex flex-col items-center justify-center bg-azul py-5 px-10 md:py-5 md:px-16 xl:py-10 xl:px-20  hover:bg-azulfuerte rounded-lg cursor-pointer">
              <IoKey className="size-[50px] xl:size-[100px] md:size-[60px] " />
              <h3 className="md:text-xl xl:text-3xl">Alquileres</h3>
            </div>
          </Link>
          <Link href={"#"}>
            <div className="flex flex-col items-center justify-center bg-azul py-5 px-10 md:py-5 md:px-16 xl:py-10 xl:px-20  hover:bg-azulfuerte rounded-lg cursor-pointer">
              <IoNewspaperOutline className="size-[50px] xl:size-[100px] md:size-[60px] " />
              <h3 className="md:text-xl xl:text-3xl">Informes</h3>
            </div>
          </Link>
          <Link href={"#"}>
            <div className="flex flex-col items-center justify-center bg-azul py-5 px-10 md:py-5 md:px-16 xl:py-10 xl:px-20  hover:bg-azulfuerte rounded-lg cursor-pointer">
              <FaUserTie className="size-[50px] xl:size-[100px] md:size-[60px] " />
              <h3 className="md:text-xl xl:text-3xl">Empleados</h3>
            </div>
          </Link>
        </div>
      </div>
    </LayoutSistema>
  );
};

export default page;
