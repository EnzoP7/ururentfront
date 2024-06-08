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
  const [Empleado, setEmpleado] = useState(null);
  const [selectedSioNo, setselectedSioNo] = useState(false);
  const id = params.id;

  useEffect(() => {
    const fecthEmpleado = async () => {
      try {
        const elID = params.id;
        console.log("EL ID QUE TRAE Empleado: ", elID);
        const response = await axios.get(
          `http://localhost:3000/api/empleado/${elID}`
        );
        setEmpleado(response.data);
        setLoading(false); // Devuelve solo la propiedad 'data' de la respuesta
      } catch (error) {
        console.error("Error al obtener AL EMPLEADO:", error);
        setLoading(false);
        throw error; // Lanza el error para que sea manejado por el código que llama a esta función
      }
    };
    fecthEmpleado();
  }, [params.id]);

  console.log("EL ID: ", id);

  const elEmpleado = Empleado;
  console.log("EL AUTOOO: ", elEmpleado);

  const eliminarEmpleado = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/empleado/${elEmpleado.id}`
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
        title: `¿Estás seguro?\nEliminar Empleado: ${
          elEmpleado ? elEmpleado.nombre : "errorXD"
        }`,
        text: "Se Eliminara el Empleado",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminarlo",
        cancelButtonText: "No, cancelar",
        confirmButtonColor: "#14146c",
        cancelButtonColor: "#EF0C0C",
        reverseButtons: true,
      });
      if (result.isConfirmed) {
        const resultado = await eliminarEmpleado();
        console.log("EL RESULTADO: ", resultado);

        if (resultado === 200) {
          Swal.fire({
            title: "¡Eliminado!",
            text: `El empleado ${
              elEmpleado ? elEmpleado.nombre : ""
            } ha sido eliminado.`,
            icon: "success",
          });
          const recargarPagina = setTimeout(() => {
            router.push("/SistemaWeb/empleados/");
          }, 2000);
        } else if (resultado === 405) {
          Swal.fire({
            title: "DATOS EN DB ",
            text: `Existen Registros de este empleados en Alquileres, No es posible eliminar.`,
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
          text: "El empleado está a salvo :)",
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
      ) : elEmpleado ? (
        <div>
          <div className="p-10">
            <h3 className="h3 ">
              {elEmpleado.nombre} {elEmpleado.apellido} Sucursal:{" "}
              {elEmpleado.sucursalId}{" "}
            </h3>
            <div className="hidden md:block">
              <table className=" border-collapse border border-gray-800 bg-white w-full">
                <thead>
                  <tr className="text-2xl">
                    <th className="border border-gray-800 px-4 py-2">Nombre</th>
                    <th className="border border-gray-800 px-4 py-2">
                      Apellido
                    </th>
                    <th className="border border-gray-800 px-4 py-2">Rol</th>
                    <th className="border border-gray-800 px-4 py-2 ">
                      Sucursal
                    </th>
                    <th className="border border-gray-800 px-4 py-2 ">
                      Cédula
                    </th>
                    <th className="border border-gray-800 px-4 py-2 ">Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={elEmpleado.id}>
                    <td className="border border-gray-800 px-4 py-2">
                      {elEmpleado.nombre}
                    </td>
                    <td className="border border-gray-800 px-4 py-2">
                      {elEmpleado.apellido}
                    </td>
                    <td className="border border-gray-800 px-4 py-2">
                      {elEmpleado.rol}
                    </td>
                    <td className="border border-gray-800 px-4 py-2 ">
                      {elEmpleado.sucursalId}
                    </td>
                    <td className="border border-gray-800 px-4 py-2 ">
                      {elEmpleado.cedula}
                    </td>
                    <td className="border border-gray-800 px-4 py-2 ">
                      {elEmpleado.mail}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="md:hidden">
              <div className="bg-white  rounded-md border-2 border-azul">
                <div className="flex flex-col p-3 text-center border-b-2 border-azul">
                  <h5 className="text-xl font-bold">Nombre</h5>
                  <h5>{elEmpleado.nombre}</h5>
                </div>
                <div className="flex flex-col p-3 text-center border-b-2 border-azul">
                  <h5 className="text-xl font-bold">Apellido</h5>
                  <h5>{elEmpleado.apellido}</h5>
                </div>
                <div className="flex flex-col p-3 text-center border-b-2 border-azul">
                  <h5 className="text-xl font-bold">Cedula</h5>
                  <h5>{elEmpleado.cedula}</h5>
                </div>
                <div className="flex flex-col p-3 text-center border-b-2 border-azul">
                  <h5 className="text-xl font-bold">Sucursal ID</h5>
                  <h5>{elEmpleado.sucursalId}</h5>
                </div>
                <div className="flex flex-col p-3 text-center border-b-2 border-azul">
                  <h5 className="text-xl font-bold">Rol</h5>
                  <h5>{elEmpleado.rol}</h5>
                </div>
                <div className="flex flex-col p-3 text-center border-b-2 border-azul">
                  <h5 className="text-xl font-bold">Email</h5>
                  <h5>{elEmpleado.mail}</h5>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start md:items-start flex-col xl:flex-row gap-x-5">
              <Link
                className=""
                href={`/SistemaWeb/empleados/editarEmpleado/${elEmpleado.id}`}
              >
                <div className="pt-5">
                  <button className="flex gap-x-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <BsPencilSquare className="size-5" />
                    Editar Empleado
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
                    Borrar Empleado
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-5">
              <h3 className="h3 ">Ultimos Alquileres</h3>
              <p>ACA VAN LOS ULTIMOS ALQUILERES XDXDXDXD</p>
            </div>
          </div>
        </div>
      ) : (
        <div>No se Encontraron datos para el Empledo con ID: {params.id}</div>
      )}
    </LayoutSistema>
  );
};

export default page;
