import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeaderS = () => {
  return (
    <div className="bg-azul flex items-center justify-between text-white py-3 border-b-4 border-amarillo">
      <div>
        <Image
          src={"/images/marca/logo.png"}
          height={200}
          width={200}
          alt="Logo"
        />
      </div>
      <div className="hidden md:flex items-center gap-5 pr-10">
        <Link href={"#"}>Sucursal</Link>
        <Link href={"#"}>Empleado</Link>
        <Link href={"#"}>Cerrar Sesión</Link>
      </div>
    </div>
  );
};

export default HeaderS;
