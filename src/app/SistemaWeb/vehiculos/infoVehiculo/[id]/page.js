"use client";
import axios from "axios";
import LayoutSistema from "@/app/SistemaWeb/layoutSistema";
import getVehiculo from "@/app/components/GetData/getVehiculo";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FaPlus, FaEye, FaSearch } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "sweetalert2/src/sweetalert2.scss";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { getYear } from "date-fns";

const page = ({ params }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [vehiculos, setVehiculos] = useState(null);
  const [selectedSioNo, setselectedSioNo] = useState(false);
  const id = params.id;

  useEffect(() => {
    const fecthVehiculo = async () => {
      try {
        const elID = params.id;
        console.log("EL ID QUE TRAE VEHICULO: ", elID);
        const response = await axios.get(
          `http://localhost:3000/api/vehiculo/${elID}`
        );
        setVehiculos(response.data);
        setLoading(false); // Devuelve solo la propiedad 'data' de la respuesta
      } catch (error) {
        console.error("Error al obtener los vehículos:", error);
        setLoading(false);
        throw error; // Lanza el error para que sea manejado por el código que llama a esta función
      }
    };
    fecthVehiculo();
  }, [params.id]);

  console.log("EL ID: ", id);
  // const elAuto = {
  //   id: 1,
  //   matricula: "LAL2367",
  //   padron: "Ef6391GhU863",
  //   codigoNacional: 76528123,
  //   divNum: 625172,
  //   marca: "Volswagen",
  //   modelo: "Vento",
  //   anio: 2020,
  //   color: "blanco",
  //   tipo: "Sedan",
  //   combustible: "nafta",
  //   numeroMotor: "37781jd12",
  //   numeroChasis: "65128712das",
  //   ciRut: "gyfw7792123",
  //   empadronado: "2024-05-01T12:34:56.789Z",
  //   emitido: "2024-05-01T12:34:56.789Z",
  // };

  const elAuto = vehiculos;
  console.log("EL AUTOOO: ", elAuto);

  const eliminarVehiculo = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/vehiculo/${elAuto.id}`
      );
      console.log("RESPONSE: ", response);
      console.log(
        "LA RESPONSE STATUSCODEVALUE: ",
        response.data.statusCodeValue
      );
      return response.status;
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteConfirmation = async () => {
    try {
      const result = await Swal.fire({
        title: `¿Estás seguro?\nEliminar Vehículo: ${
          elAuto ? elAuto.matricula : "errorXD"
        }`,
        text: "Se Eliminara el Vehículo",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminarlo",
        cancelButtonText: "No, cancelar",
        confirmButtonColor: "#14146c",
        cancelButtonColor: "#EF0C0C",
        reverseButtons: true,
      });
      if (result.isConfirmed) {
        const resultado = await eliminarVehiculo();
        console.log("EL RESULTADO: ", resultado);

        if (resultado === 200) {
          Swal.fire({
            title: "¡Eliminado!",
            text: `El Vehículo ${
              elAuto ? elAuto.matricula : ""
            } ha sido eliminado.`,
            icon: "success",
          });
          const recargarPagina = setTimeout(() => {
            router.push("/SistemaWeb/vehiculos/");
          }, 2000);
        } else if (resultado === 405) {
          Swal.fire({
            title: "DATOS EN DB ",
            text: `Existen Registros de este Vehículo en Alquileres, No es posible eliminar.`,
            icon: "error",
          });
        } else {
          Swal.fire({
            title: "ALGO SALIO MAL ",
            text: `El servidor fallo.`,
            icon: "error",
          });
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelado",
          text: "El Vehículo está a salvo :)",
          icon: "error",
        });
      }
      setselectedSioNo(false);
    } catch (error) {
      console.log(error);
      setselectedSioNo(false);
    }
  };

  useEffect(() => {
    if (selectedSioNo != false) {
      handleDeleteConfirmation();
    }
  }, [selectedSioNo]);

  return (
    <LayoutSistema>
      {loading ? (
        <div>Cargando ...</div>
      ) : elAuto ? (
        <div>
          <div className="p-10">
            <h3 className="h3 ">
              {elAuto.marca} {elAuto.modelo} {elAuto.matricula}{" "}
            </h3>
            <div className="hidden md:block">
              <table className=" border-collapse border border-gray-800 bg-white w-full">
                <thead>
                  <tr className="text-2xl">
                    <th className="border border-gray-800 px-4 py-2">
                      Matrícula
                    </th>
                    <th className="border border-gray-800 px-4 py-2">Marca</th>
                    <th className="border border-gray-800 px-4 py-2 ">
                      Modelo
                    </th>
                    <th className="border border-gray-800 px-4 py-2 ">Año</th>
                    <th className="border border-gray-800 px-4 py-2 ">Color</th>
                    <th className="border border-gray-800 px-4 py-2 ">Tipo</th>
                    <th className="border border-gray-800 px-4 py-2 ">
                      Padron
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
                    <td className="border border-gray-800 px-4 py-2 ">
                      {elAuto.modelo}
                    </td>
                    <td className="border border-gray-800 px-4 py-2 ">
                      {elAuto.anio}
                    </td>
                    <td className="border border-gray-800 px-4 py-2 ">
                      {elAuto.color}
                    </td>
                    <td className="border border-gray-800 px-4 py-2 ">
                      {elAuto.tipo}
                    </td>
                    <td className="border border-gray-800 px-4 py-2 ">
                      {elAuto.padron}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="pt-5">
                <table className=" border-collapse border border-gray-800 bg-white w-full ">
                  <thead>
                    <tr className="text-xl xl:text-2xl">
                      <th className="border border-gray-800 px-4 py-2">
                        Kilometros
                      </th>

                      <th className="border border-gray-800 px-4 py-2 ">
                        Div Num
                      </th>
                      <th className="border border-gray-800 px-4 py-2 ">
                        ciRut
                      </th>
                      <th className="border border-gray-800 px-4 py-2 ">
                        Combustible
                      </th>
                      <th className="border border-gray-800 px-4 py-2 ">
                        Numero Motor
                      </th>
                      <th className="border border-gray-800 px-4 py-2 ">
                        Numero Chasis
                      </th>
                      <th className="border border-gray-800 px-4 py-2 ">
                        Empadronado
                      </th>
                      <th className="border border-gray-800 px-4 py-2 ">
                        Emitido
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={elAuto.id}>
                      <td className="border border-gray-800 px-4 py-2">
                        {elAuto.kilometros}
                      </td>
                      <td className="border border-gray-800 px-4 py-2">
                        {elAuto.divNum}
                      </td>
                      <td className="border border-gray-800 px-4 py-2 ">
                        {elAuto.ciRut}
                      </td>
                      <td className="border border-gray-800 px-4 py-2 ">
                        {elAuto.combustible}
                      </td>
                      <td className="border border-gray-800 px-4 py-2 ">
                        {elAuto.numeroMotor}
                      </td>
                      <td className="border border-gray-800 px-4 py-2 ">
                        {elAuto.numeroChasis}
                      </td>
                      <td className="border border-gray-800 px-4 py-2 ">
                        {getYear(elAuto.empadronado)}
                      </td>
                      <td className="border border-gray-800 px-4 py-2 ">
                        {getYear(elAuto.emitido)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="md:hidden">
              <div className="bg-white  rounded-md border-2 border-azul">
                <div className="flex flex-col p-3 text-center border-b-2 border-azul">
                  <h5 className="text-xl font-bold">Matricula</h5>
                  <h5>{elAuto.matricula}</h5>
                </div>
                <div className="flex flex-col p-3 text-center border-b-2 border-azul">
                  <h5 className="text-xl font-bold">Marca</h5>
                  <h5>{elAuto.marca}</h5>
                </div>
                <div className="flex flex-col p-3 text-center border-b-2 border-azul">
                  <h5 className="text-xl font-bold">Modelo</h5>
                  <h5>{elAuto.modelo}</h5>
                </div>
                <div className="flex flex-col p-3 text-center border-b-2 border-azul">
                  <h5 className="text-xl font-bold">Año</h5>
                  <h5>{elAuto.anio}</h5>
                </div>
                <div className="flex flex-col p-3 text-center border-b-2 border-azul">
                  <h5 className="text-xl font-bold">Color</h5>
                  <h5>{elAuto.color}</h5>
                </div>
                <div className="flex flex-col p-3 text-center border-b-2 border-azul">
                  <h5 className="text-xl font-bold">Tipo</h5>
                  <h5>{elAuto.tipo}</h5>
                </div>
                <div className="flex flex-col p-3 text-center border-b-2 border-azul">
                  <h5 className="text-xl font-bold">Combustible</h5>
                  <h5>{elAuto.combustible}</h5>
                </div>
                <div className="flex flex-col p-3 text-center border-b-2 border-azul">
                  <h5 className="text-xl font-bold">Kilometros</h5>
                  <h5>{elAuto.kilometros}</h5>
                </div>
                <div className="flex flex-col p-3 text-center border-b-2 border-azul">
                  <h5 className="text-xl font-bold">Padron</h5>
                  <h5>{elAuto.padron}</h5>
                </div>
                <div className="flex flex-col p-3 text-center border-b-2 border-azul">
                  <h5 className="text-xl font-bold">Div Num</h5>
                  <h5>{elAuto.divNum}</h5>
                </div>
                <div className="flex flex-col p-3 text-center border-b-2 border-azul">
                  <h5 className="text-xl font-bold">Ci RUT</h5>
                  <h5>{elAuto.ciRut}</h5>
                </div>
                <div className="flex flex-col p-3 text-center border-b-2 border-azul">
                  <h5 className="text-xl font-bold">Número Motor</h5>
                  <h5>{elAuto.numeroMotor}</h5>
                </div>
                <div className="flex flex-col p-3 text-center border-b-2 border-azul">
                  <h5 className="text-xl font-bold">Número Chasis</h5>
                  <h5>{elAuto.numeroChasis}</h5>
                </div>
                <div className="flex flex-col p-3 text-center border-b-2 border-azul">
                  <h5 className="text-xl font-bold">Empadronado</h5>
                  <h5>{getYear(elAuto.empadronado)}</h5>
                </div>
                <div className="flex flex-col p-3 text-center border-b-2 border-azul">
                  <h5 className="text-xl font-bold">Emitido</h5>
                  <h5>{getYear(elAuto.emitido)}</h5>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start md:items-start flex-col xl:flex-row gap-x-5">
              <Link
                className=""
                href={`/SistemaWeb/vehiculos/editarVehiculo/${elAuto.id}`}
              >
                <div className="pt-5">
                  <button className="flex gap-x-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <BsPencilSquare className="size-5" />
                    Editar Vehículo
                  </button>
                </div>
              </Link>
              <div className="">
                <div className="pt-5">
                  <button
                    onClick={() => setselectedSioNo(true)}
                    className="flex gap-x-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    <MdDelete className="size-5" />
                    Borrar Vehículo
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-5">
              <h3 className="h3 ">Ultimos Alquileres</h3>
              <p>ACA VAN LOS ULTIMOS ALQUILERES XDXDXDXD</p>
            </div>
            <div className="pt-5">
              <h3 className="h3 ">Gastos</h3>
              <p>ACA VAN LOS GASTOS Relacionados Al Vehiculo</p>

              <div className="flex flex-col xl:flex-row gap-x-5">
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
      ) : (
        <div>No se Encontraron datos para el vehiculo con ID: {params.id}</div>
      )}
    </LayoutSistema>
  );
};

export default page;
