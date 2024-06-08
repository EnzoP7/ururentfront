"use client";
import React, { useEffect, useMemo, useState } from "react";
import LayoutSistema from "../layoutSistema";
import { BsPencilSquare } from "react-icons/bs";
import { FaPlus, FaEye, FaSearch } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Link from "next/link";
import Swal from "sweetalert2";
import axios from "axios";
import getVehiculos from "@/app/components/GetData/getVehiculos";
import "sweetalert2/src/sweetalert2.scss";
import getEmpleados from "@/app/components/GetData/getEmpleados";

const Page = () => {
  // const objetos = [
  //   {
  //     id: 1,
  //     matricula: "ABC123",
  //     padron: "Ef6391GhU863",
  //     codigoNacional: 76528123,
  //     divNum: 625172,
  //     marca: "Ford",
  //     modelo: "Focus",
  //     anio: 2018,
  //     color: "azul",
  //     tipo: "Sedan",
  //     combustible: "gasolina",
  //     numeroMotor: "AB12345",
  //     numeroChasis: "67890DEF",
  //     ciRut: "xyz123456",
  //     empadronado: "2024-05-01T12:34:56.789Z",
  //     emitido: "2024-05-01T12:34:56.789Z",
  //   },
  //   {
  //     id: 2,
  //     matricula: "XYZ789",
  //     padron: "GhU863Ef6391",
  //     codigoNacional: 98765432,
  //     divNum: 98765,
  //     marca: "Chevrolet",
  //     modelo: "Cruze",
  //     anio: 2019,
  //     color: "rojo",
  //     tipo: "Sedan",
  //     combustible: "diesel",
  //     numeroMotor: "CD67890",
  //     numeroChasis: "12345ABC",
  //     ciRut: "abc987654",
  //     empadronado: "2024-05-01T12:34:56.789Z",
  //     emitido: "2024-05-01T12:34:56.789Z",
  //   },
  //   {
  //     id: 3,
  //     matricula: "DEF456",
  //     padron: "1234GhU863Ef",
  //     codigoNacional: 13579246,
  //     divNum: 24680,
  //     marca: "Honda",
  //     modelo: "Civic",
  //     anio: 2021,
  //     color: "negro",
  //     tipo: "Sedan",
  //     combustible: "gasolina",
  //     numeroMotor: "EF67890",
  //     numeroChasis: "ABCDE12345",
  //     ciRut: "def456789",
  //     empadronado: "2024-05-01T12:34:56.789Z",
  //     emitido: "2024-05-01T12:34:56.789Z",
  //   },
  //   {
  //     id: 4,
  //     matricula: "GHI789",
  //     padron: "U863Ef6391Gh",
  //     codigoNacional: 24681357,
  //     divNum: 13579,
  //     marca: "BMW",
  //     modelo: "Serie 3",
  //     anio: 2020,
  //     color: "blanco",
  //     tipo: "Sedan",
  //     combustible: "gasolina",
  //     numeroMotor: "GH12345",
  //     numeroChasis: "54321XYZ",
  //     ciRut: "ghi987654",
  //     empadronado: "2024-05-01T12:34:56.789Z",
  //     emitido: "2024-05-01T12:34:56.789Z",
  //   },
  //   {
  //     id: 5,
  //     matricula: "JKL987",
  //     padron: "863Ef6391GhU",
  //     codigoNacional: 11111111,
  //     divNum: 22222,
  //     marca: "Mercedes-Benz",
  //     modelo: "Clase C",
  //     anio: 2017,
  //     color: "plata",
  //     tipo: "Sedan",
  //     combustible: "gasolina",
  //     numeroMotor: "JK67890",
  //     numeroChasis: "ABCDE12345",
  //     ciRut: "jkl123456",
  //     empadronado: "2024-05-01T12:34:56.789Z",
  //     emitido: "2024-05-01T12:34:56.789Z",
  //   },
  //   {
  //     id: 6,
  //     matricula: "MNO654",
  //     padron: "39GhU863Ef631",
  //     codigoNacional: 22222222,
  //     divNum: 33333,
  //     marca: "Audi",
  //     modelo: "A4",
  //     anio: 2019,
  //     color: "gris",
  //     tipo: "Sedan",
  //     combustible: "diesel",
  //     numeroMotor: "MN67890",
  //     numeroChasis: "EDCBA54321",
  //     ciRut: "mno987654",
  //     empadronado: "2024-05-01T12:34:56.789Z",
  //     emitido: "2024-05-01T12:34:56.789Z",
  //   },
  //   {
  //     id: 7,
  //     matricula: "PQR321",
  //     padron: "9GhU863Ef6391",
  //     codigoNacional: 33333333,
  //     divNum: 44444,
  //     marca: "Kia",
  //     modelo: "Rio",
  //     anio: 2016,
  //     color: "azul",
  //     tipo: "Hatchback",
  //     combustible: "gasolina",
  //     numeroMotor: "PQ67890",
  //     numeroChasis: "54321FEDC",
  //     ciRut: "pqr123456",
  //     empadronado: "2024-05-01T12:34:56.789Z",
  //     emitido: "2024-05-01T12:34:56.789Z",
  //   },
  //   {
  //     id: 8,
  //     matricula: "STU987",
  //     padron: "GhU863Ef63914",
  //     codigoNacional: 44444444,
  //     divNum: 55555,
  //     marca: "Hyundai",
  //     modelo: "Elantra",
  //     anio: 2021,
  //     color: "blanco",
  //     tipo: "Sedan",
  //     combustible: "gasolina",
  //     numeroMotor: "STU67890",
  //     numeroChasis: "54321GFED",
  //     ciRut: "stu987654",
  //     empadronado: "2024-05-01T12:34:56.789Z",
  //     emitido: "2024-05-01T12:34:56.789Z",
  //   },
  //   {
  //     id: 9,
  //     matricula: "VWX654",
  //     padron: "Ef6391GhU8639",
  //     codigoNacional: 55555555,
  //     divNum: 66666,
  //     marca: "Mazda",
  //     modelo: "3",
  //     anio: 2020,
  //     color: "rojo",
  //     tipo: "Hatchback",
  //     combustible: "diesel",
  //     numeroMotor: "VW67890",
  //     numeroChasis: "54321VUTS",
  //     ciRut: "vwx123456",
  //     empadronado: "2024-05-01T12:34:56.789Z",
  //     emitido: "2024-05-01T12:34:56.789Z",
  //   },
  //   {
  //     id: 10,
  //     matricula: "YZA987",
  //     padron: "F6391GhU863E",
  //     codigoNacional: 66666666,
  //     divNum: 77777,
  //     marca: "Subaru",
  //     modelo: "Impreza",
  //     anio: 2018,
  //     color: "gris",
  //     tipo: "Sedan",
  //     combustible: "gasolina",
  //     numeroMotor: "YZ67890",
  //     numeroChasis: "54321UTSR",
  //     ciRut: "yza987654",
  //     empadronado: "2024-05-01T12:34:56.789Z",
  //     emitido: "2024-05-01T12:34:56.789Z",
  //   },
  //   {
  //     id: 11,
  //     matricula: "LAL2367",
  //     padron: "Ef6391GhU863",
  //     codigoNacional: 76528123,
  //     divNum: 625172,
  //     marca: "Volswagen",
  //     modelo: "Vento",
  //     anio: 2020,
  //     color: "blanco",
  //     tipo: "Sedan",
  //     combustible: "nafta",
  //     numeroMotor: "37781jd12",
  //     numeroChasis: "65128712das",
  //     ciRut: "gyfw7792123",
  //     empadronado: "2024-05-01T12:34:56.789Z",
  //     emitido: "2024-05-01T12:34:56.789Z",
  //   },
  //   {
  //     id: 12,
  //     matricula: "LAL 5432",
  //     padron: "Ef6391GhU863",
  //     codigoNacional: 76528123,
  //     divNum: 625172,
  //     marca: "Volswagen",
  //     modelo: "Hatch",
  //     anio: 2020,
  //     color: "blanco",
  //     tipo: "Sedan",
  //     combustible: "nafta",
  //     numeroMotor: "37781jd12",
  //     numeroChasis: "65128712das",
  //     ciRut: "gyfw7792123",
  //     empadronado: "2024-05-01T12:34:56.789Z",
  //     emitido: "2024-05-01T12:34:56.789Z",
  //   },
  //   {
  //     id: 13,
  //     matricula: "LAL 8829",
  //     padron: "Ef6391GhU863",
  //     codigoNacional: 76528123,
  //     divNum: 625172,
  //     marca: "Toyota",
  //     modelo: "Hailuz",
  //     anio: 2020,
  //     color: "blanco",
  //     tipo: "Sedan",
  //     combustible: "nafta",
  //     numeroMotor: "37781jd12",
  //     numeroChasis: "65128712das",
  //     ciRut: "gyfw7792123",
  //     empadronado: "2024-05-01T12:34:56.789Z",
  //     emitido: "2024-05-01T12:34:56.789Z",
  //   },
  //   // Aquí podrías agregar más objetos si lo necesitas
  // ];

  const objetos = getEmpleados();

  const objeto = {
    mail: "Joaquing@gmail.com",
    password: "abc123456",
    cedula: 74839201,
    nombre: "Joaquin",
    apellido: "Colman",
    sucursalId: 2,
    rol: "empleado",
  };

  // const itemsPerPage = 7; // Cantidad de elementos por página
  // Define diferentes valores de itemsPerPage según el tamaño de la pantalla
  //   const itemsPerPage = useMemo(() => {
  //     if (screen.width >= 1480) {
  //       return 13; // Por ejemplo, muestra 10 elementos por página en pantallas extra grandes (xl)
  //     } else if (screen.width >= 768) {
  //       return 5; // Por ejemplo, muestra 7 elementos por página en pantallas medianas (md)
  //     } else {
  //       return 5; // Por ejemplo, muestra 5 elementos por página en pantallas pequeñas (sm)
  //     }
  //   }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const [filtroNombre, setfiltroNombre] = useState("");
  const [filtroApellido, setfiltroApellido] = useState("");
  const [filtroSucursal, setfiltroSucursal] = useState("");
  const [filtroMail, setfiltroMail] = useState("");
  const [filtroCedula, setfiltroCedula] = useState("");

  const [ocultarFiltro, setOcultarFiltro] = useState(true);
  const [ocultarFiltroM, setOcultarFiltroM] = useState(false);
  //   // VEHICULO SELECCIONADO PARA ELIMINAR
  //   const [selectedVehiculo, setselectedVehiculo] = useState(null);
  const [selectedEmpleado, setselectedEmpleado] = useState(null);

  //   // MOBILE
  //   const [filtroMatriculaM, setFiltroMatriculaM] = useState("");
  //   const [filtroMarcaM, setFiltroMarcaM] = useState("");
  const [filtroApellidoM, setfiltroApellidoM] = useState("");
  const [filtroSucursalM, setfiltroSucursalM] = useState("");

  // Calcula el índice del primer y último elemento de la página actual
  //   const indexOfLastItem = currentPage * itemsPerPage;
  //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  //   const currentItems = objetos.slice(indexOfFirstItem, indexOfLastItem);

  // Cambia a la página siguiente
  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  // Cambia a la página anterior
  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const filteredItems = objetos.filter((objeto) => {
    return (
      objeto.nombre.toLowerCase().includes(filtroNombre.toLowerCase()) &&
      objeto.apellido.toLowerCase().includes(filtroApellido.toLowerCase()) &&
      objeto.sucursalId.toString().includes(filtroSucursal) &&
      objeto.mail.toLowerCase().includes(filtroMail.toLowerCase()) &&
      objeto.cedula.toString().includes(filtroCedula)
    );
  });
  //   const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  //   MOBILE

  const filteredItemsM = useMemo(() => {
    return objetos.filter((objeto) => {
      return (
        objeto.apellido
          .toLowerCase()
          .startsWith(filtroApellidoM.toLowerCase()) &&
        objeto.sucursalId.toString().startsWith(filtroSucursalM)
      );
    });
  }, [objetos, filtroApellidoM, filtroSucursalM]);

  const eliminarEmpleado = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/empleado/${selectedEmpleado.id}`
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
          selectedEmpleado ? selectedEmpleado.nombre : "errorXD"
        }`,
        text: "Se Eliminara el empleado",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminarlo",
        cancelButtonText: "No, cancelar",
        confirmButtonColor: "#14146c",
        cancelButtonColor: "#EF0C0C",
        reverseButtons: true,

        didClose: () => {
          // Restablecer selectedClient al cerrar el modal
          setselectedEmpleado(null);
        },
      });
      if (result.isConfirmed) {
        const resultado = await eliminarEmpleado();
        console.log("EL RESULTADO: ", resultado);
        setselectedEmpleado(null);
        if (resultado === 200) {
          Swal.fire({
            title: "¡Eliminado!",
            text: `El Empleado ${
              selectedEmpleado ? selectedEmpleado.nombre : "errorXD"
            } ha sido eliminado.`,
            icon: "success",
          });
          const recargarPagina = setTimeout(() => {
            window.location.reload();
          }, 2000);
        } else if (resultado === 405) {
          Swal.fire({
            title: "DATOS EN DB ",
            text: `Existen Registros de este Empleado en Alquileres, No es posible eliminar.`,
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
        setSelectedClient(null);
        Swal.fire({
          title: "Cancelado",
          text: "El Empleado está a salvo :)",
          icon: "error",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedEmpleado != null) {
      handleDeleteConfirmation();
    }
  }, [selectedEmpleado]);

  return (
    <LayoutSistema>
      <div className="px-4 py-8 ">
        <div className="flex gap-x-10 gap-y-3 md:gap-y-0 flex-col md:flex-row items-center justify-center md:items-start md:justify-start">
          <h3 className="text-3xl font-bold mb-4">Lista de Empleados</h3>

          <Link href="/SistemaWeb/empleados/ingresarEmpleado">
            <button className="flex gap-x-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <FaPlus className="size-5" />
              Agregar Empleado
            </button>
          </Link>
          <div className="hidden md:flex">
            <button
              onClick={() => setOcultarFiltro(!ocultarFiltro)}
              className="flex gap-x-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {ocultarFiltro ? (
                <>
                  <FaSearch className="size-5" />
                  <p className=" text-white font-bold"> Ver Filtros</p>
                </>
              ) : (
                <>
                  <FaSearch className="size-5" />
                  <p className=" text-white font-bold"> Desactivar Filtros</p>
                </>
              )}
            </button>
          </div>
        </div>
        <div className="hidden md:flex">
          <div
            className={` ${
              ocultarFiltro ? "hidden" : "flex"
            } flex-col flex-wrap md:flex-row  gap-5 p-5 `}
          >
            <div className="flex flex-col ">
              <label>Nombre</label>
              <input
                className="p-3 rounded-md"
                type="text"
                placeholder="Filtrar por Nombre"
                value={filtroNombre}
                onChange={(e) => setfiltroNombre(e.target.value)}
              />
            </div>
            <div className="flex flex-col ">
              <label>Apellido</label>
              <input
                className="p-3 rounded-md"
                type="text"
                placeholder="Filtrar por Apellido"
                value={filtroApellido}
                onChange={(e) => setfiltroApellido(e.target.value)}
              />
            </div>
            <div className="flex flex-col ">
              <label>Sucursal</label>
              <input
                className="p-3 rounded-md"
                type="text"
                placeholder="Filtrar por Sucursal"
                value={filtroSucursal}
                onChange={(e) => setfiltroSucursal(e.target.value)}
              />
            </div>
            <div className="flex flex-col ">
              <label>Cédula</label>
              <input
                className="p-3 rounded-md"
                type="text"
                placeholder="Filtrar por Cédula"
                value={filtroCedula}
                onChange={(e) => setfiltroCedula(e.target.value)}
              />
            </div>
            <div className="flex flex-col ">
              <label>Email</label>
              <input
                className="p-3 rounded-md"
                type="text"
                placeholder="Filtrar por Email"
                value={filtroMail}
                onChange={(e) => setfiltroMail(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="hidden md:flex">
          <table className=" border-collapse border border-gray-800 bg-white w-full">
            <thead>
              <tr className="text-2xl">
                <th className="border border-gray-800 px-4 py-2">Nombre</th>
                <th className="border border-gray-800 px-4 py-2">Apellido</th>
                <th className="border border-gray-800 px-4 py-2 ">Sucursal</th>
                <th className="border border-gray-800 px-4 py-2 ">Cédula</th>
                <th className="border border-gray-800 px-4 py-2 ">Email</th>

                <th className="border border-gray-800 px-4 py-2">Opciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((objeto, index) => (
                <tr key={index}>
                  <td className="border border-gray-800 px-4 py-2">
                    {objeto.nombre}
                  </td>
                  <td className="border border-gray-800 px-4 py-2">
                    {objeto.apellido}
                  </td>
                  <td className="border border-gray-800 px-4 py-2 hidden md:table-cell">
                    {objeto.sucursalId}
                  </td>
                  <td className="border border-gray-800 px-4 py-2 hidden md:table-cell">
                    {objeto.cedula}
                  </td>
                  <td className="border border-gray-800 px-4 py-2 hidden md:table-cell">
                    {objeto.mail}
                  </td>

                  <td className="border border-gray-800 px-4 py-2">
                    <div className="flex items-center justify-center pt-2 gap-6">
                      <div>
                        <Link
                          href={`/SistemaWeb/empleados/infoEmpleado/${objeto.id}`}
                        >
                          <FaEye
                            size={25}
                            className="fill-sky-400 cursor-pointer"
                          />
                        </Link>
                      </div>
                      <div>
                        <Link
                          href={`/SistemaWeb/empleados/editarEmpleado/${objeto.id}`}
                        >
                          <BsPencilSquare
                            size={25}
                            className="fill-orange-500 cursor-pointer"
                          />
                        </Link>
                      </div>
                      <div>
                        <MdDelete
                          onClick={() => setselectedEmpleado(objeto)}
                          size={25}
                          className="fill-red-600 cursor-pointer"
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MOBILE COMIENZA AQUI */}
        <div className="md:hidden">
          <div className="flex gap-3 mb-4 pt-3">
            <div className="flex flex-col">
              <label>Apellido</label>
              <div>
                <input
                  className=" p-4 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Filtrar Apellido"
                  value={filtroApellidoM}
                  onChange={(e) => setfiltroApellidoM(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label>Sucursal</label>
              <div>
                <input
                  className=" p-4 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Filtrar Sucursal"
                  value={filtroSucursalM}
                  onChange={(e) => setfiltroSucursalM(e.target.value)}
                />
              </div>
            </div>
          </div>
          <ul className="border border-azulfuerte rounded-md overflow-hidden">
            {filteredItemsM.map((objeto, index) => (
              <Link href={`/SistemaWeb/empleados/infoEmpleado/${objeto.id}`}>
                <div>
                  <li key={objeto.id} className="border-b border-azulfuerte">
                    <div className="p-3">
                      <p className="font-semibold">
                        {objeto.nombre} {objeto.apellido}
                      </p>
                      <p>Sucursal: {objeto.sucursalId}</p>
                    </div>
                  </li>
                </div>
              </Link>
            ))}
            {filteredItemsM.length === 0 && (
              <li className="p-3 text-azulfuerte">
                No se encontraron resultados
              </li>
            )}
          </ul>
        </div>
        {/* MOBILE TERMINA AQUI*/}

        {/* <div className=" hidden md:flex justify-between mt-4 ">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Anterior
          </button>
          <button
            onClick={nextPage}
            disabled={indexOfLastItem >= objetos.length}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Siguiente
          </button>
        </div> */}
      </div>
    </LayoutSistema>
  );
};

export default Page;
