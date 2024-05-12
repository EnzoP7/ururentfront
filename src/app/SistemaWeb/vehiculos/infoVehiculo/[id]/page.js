import LayoutSistema from "@/app/SistemaWeb/layoutSistema";
import Link from "next/link";
import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FaPlus, FaEye, FaSearch } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const page = () => {
  const elAuto = {
    id: 1,
    matricula: "LAL2367",
    padron: "Ef6391GhU863",
    codigoNacional: 76528123,
    divNum: 625172,
    marca: "Volswagen",
    modelo: "Vento",
    anio: 2020,
    color: "blanco",
    tipo: "Sedan",
    combustible: "nafta",
    numeroMotor: "37781jd12",
    numeroChasis: "65128712das",
    ciRut: "gyfw7792123",
    empadronado: "2024-05-01T12:34:56.789Z",
    emitido: "2024-05-01T12:34:56.789Z",
  };

  return (
    <LayoutSistema>
      <div>
        <div className="p-10">
          <h3 className="h3 ">
            {elAuto.marca} {elAuto.modelo} {elAuto.matricula}{" "}
          </h3>
          <table className=" border-collapse border border-gray-800 bg-white w-full">
            <thead>
              <tr className="text-2xl">
                <th className="border border-gray-800 px-4 py-2">Matrícula</th>
                <th className="border border-gray-800 px-4 py-2">Marca</th>
                <th className="border border-gray-800 px-4 py-2 hidden md:table-cell">
                  Modelo
                </th>
                <th className="border border-gray-800 px-4 py-2 hidden md:table-cell">
                  Año
                </th>
                <th className="border border-gray-800 px-4 py-2 hidden xl:table-cell">
                  Color
                </th>
                <th className="border border-gray-800 px-4 py-2 hidden xl:table-cell">
                  Tipo
                </th>
                <th className="border border-gray-800 px-4 py-2 hidden xl:table-cell">
                  Padron
                </th>
                <th className="border border-gray-800 px-4 py-2 hidden xl:table-cell">
                  Combustible
                </th>
                <th className="border border-gray-800 px-4 py-2 hidden xl:table-cell">
                  Color
                </th>
              </tr>
            </thead>
            <tbody>
              <tr key={elAuto.id}>
                <td className="border border-gray-800 px-4 py-2">
                  {elAuto.matricula}
                </td>
                <td className="border border-gray-800 px-4 py-2">
                  {elAuto.marca}
                </td>
                <td className="border border-gray-800 px-4 py-2 hidden md:table-cell">
                  {elAuto.modelo}
                </td>
                <td className="border border-gray-800 px-4 py-2 hidden md:table-cell">
                  {elAuto.anio}
                </td>
                <td className="border border-gray-800 px-4 py-2 hidden xl:table-cell">
                  {elAuto.color}
                </td>
                <td className="border border-gray-800 px-4 py-2 hidden xl:table-cell">
                  {elAuto.tipo}
                </td>
                <td className="border border-gray-800 px-4 py-2 hidden xl:table-cell">
                  {elAuto.padron}
                </td>
                <td className="border border-gray-800 px-4 py-2 hidden xl:table-cell">
                  {elAuto.combustible}
                </td>
                <td className="border border-gray-800 px-4 py-2 hidden xl:table-cell">
                  {elAuto.color}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex gap-x-5">
            <Link className="" href="#">
              <div className="pt-5">
                <button className="flex gap-x-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <BsPencilSquare className="size-5" />
                  Editar Vehículo
                </button>
              </div>
            </Link>
            <Link className="" href="#">
              <div className="pt-5">
                <button className="flex gap-x-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <MdDelete className="size-5" />
                  Borrar Vehículo
                </button>
              </div>
            </Link>
          </div>

          <div className="pt-5">
            <h3 className="h3 ">Ultimos Alquileres</h3>
            <p>ACA VAN LOS ULTIMOS ALQUILERES XDXDXDXD</p>
          </div>
          <div className="pt-5">
            <h3 className="h3 ">Gastos</h3>
            <p>ACA VAN LOS GASTOS Relacionados Al Vehiculo</p>

            <div className="flex gap-x-5">
              <Link className="" href="#">
                <div className="pt-5">
                  <button className="flex gap-x-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <FaPlus className="size-5" />
                    Añadir Gasto
                  </button>
                </div>
              </Link>
              <Link className="" href="#">
                <div className="pt-5">
                  <button className="flex gap-x-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <MdDelete className="size-5" />
                    Borrar Gasto
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LayoutSistema>
  );
};

export default page;
