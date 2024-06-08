"use client";
import React from "react";
import axios from "axios";
import LayoutSistema from "../../layoutSistema";
import { useForm } from "react-hook-form";
import { getYear } from "date-fns";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const transformarDatos = (datos) => {
    const datosTransformados = {};
    for (const clave in datos) {
      if (datos.hasOwnProperty(clave)) {
        if (datos[clave] === "") {
          datosTransformados[clave] = null;
        } else if (!isNaN(datos[clave])) {
          datosTransformados[clave] = parseInt(datos[clave]);
        } else {
          datosTransformados[clave] = datos[clave];
        }
      }
    }
    return datosTransformados;
  };

  const onSubmit = async (data) => {
    let funca;
    try {
      const datosTransformados = transformarDatos(data);
      console.log("DATOS QUE SE ESTAN ENVIANDO: ", {
        Nombre: datosTransformados.nombre,
        Apellido: datosTransformados.apellido,
        Cedula: datosTransformados.cedula,
        SucursalId: datosTransformados.sucursal,
        Rol: datosTransformados.rol,
        Email: datosTransformados.mail,
        Password: datosTransformados.password,
      });

      const response = await axios.post(
        "http://localhost:3000/api/empleado/registro",
        {
          nombre: datosTransformados.nombre,
          apellido: datosTransformados.apellido,
          cedula: datosTransformados.cedula,
          sucursalId: datosTransformados.sucursal,
          mail: datosTransformados.mail,
          password: datosTransformados.password,
          rol: datosTransformados.rol,
        }
      );

      console.log("Respuesta del servidor:", response.data);
      response.status === 201 ? (funca = true) : (funca = false);
    } catch (error) {
      console.error("Error al realizar la petición POST:", error);
    }
    funca
      ? Swal.fire({
          position: "center",
          icon: "success",
          title: "Empleado Ingresado Con Exito",
          showConfirmButton: false,
          timer: 2000,
          color: "info",
          background: "#fff",
          backdrop: `
        rgba(0,0,123,0.4)
        left top
        no-repeat
      `,
        })
      : Swal.fire({
          position: "center",
          icon: "error",
          title: "Algo salio Mal",
          showConfirmButton: false,
          timer: 2000,
          color: "info",
          background: "#fff",
          backdrop: `
        rgba(0,0,123,0.4)
        left top
        no-repeat
      `,
        });
    // redireccion
    setTimeout(() => {
      router.push("/SistemaWeb/empleados/");
    }, 2000);
  };

  // ESTO DESPUES HAY QUE Buscarlo Por base de datos por si se llegase a agregar alguna sucursal mas

  const sucursales = [
    { id: 1, direccion: "Carmelo" },
    { id: 2, direccion: "Nueva Helvecia" },
    { id: 3, direccion: "Nueva Palmira" },
    { id: 4, direccion: "Montevideo" },
    { id: 5, direccion: "Cardona" },
  ];

  const roles = ["admin", "empleado", "encargado"];

  const colores = [
    "Blanco",
    "Gris",
    "Negro",
    "Azul",
    "Rojo",
    "Verde",
    "Dorado",
    "Marron",
  ];

  const marcas = [
    "Volksvagen",
    "Kia",
    "Fiat",
    "Susuky",
    "Nissan",
    "Ford",
    "Toyota",
  ];

  //   {
  //     "mail":"Joaquing@gmail.com",
  //     "password":"abc123456",
  //     "cedula":74839201,
  //     "nombre":"Joaquin",
  //     "apellido":"Colman",
  //     "sucursalId":2,
  //     "rol":"empleado"
  // }

  return (
    <div>
      <LayoutSistema>
        <div className="mx-auto pt-10">
          <div>
            <h3 className="h3">Datos Principales</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row gap-10 px-3 md:px-0">
              <div className="flex flex-col">
                <label htmlFor="matricula">Nombre</label>
                <input
                  className="p-3 rounded-md"
                  placeholder="Ingresar Nombre"
                  type="text"
                  id="Nombre"
                  required={true}
                  {...register("nombre")}
                />
                {errors.nombre && <span>Este campo es Requerido</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="Apellido">Apellido</label>
                <input
                  className="p-3 rounded-md"
                  placeholder="Ingresar Apellido"
                  type="text"
                  id="Apellido"
                  required={true}
                  {...register("apellido")}
                />
                {errors.apellido && <span>Este campo es Requerido</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="Cédula">Cédula</label>
                <input
                  className="p-3 rounded-md"
                  placeholder="Ingresar Cédula"
                  type="text"
                  id="Cédula"
                  required={true}
                  {...register("cedula")}
                />
                {errors.cedula && <span>Este campo es Requerido</span>}
              </div>
              <div className="flex flex-col">
                <label htmlFor="Sucursal">Sucursal</label>

                <select
                  className="p-3 rounded-md"
                  id="Sucursal"
                  required={true}
                  {...register("sucursal")}
                >
                  {sucursales.map((sucursal) => (
                    <option key={sucursal.id} value={sucursal.id}>
                      {sucursal.direccion}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="rol">Rol</label>

                <select
                  className="p-3 rounded-md"
                  id="rol"
                  required={true}
                  {...register("rol")}
                >
                  {roles.map((role, index) => (
                    <option key={index} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex pt-5 flex-col md:flex-row gap-10 px-3 md:px-0">
              <div className="flex flex-col">
                <label htmlFor="mail">Email</label>
                <input
                  className="p-3 rounded-md"
                  placeholder="Ingresar mail"
                  type="text"
                  id="mail"
                  required={true}
                  {...register("mail")}
                />
                {errors.mail && <span>Este campo es Requerido</span>}
              </div>
              <div className="flex flex-col">
                <label htmlFor="password">Password</label>
                <input
                  className="p-3 rounded-md"
                  placeholder="Ingresar password"
                  type="text"
                  id="password"
                  required={true}
                  {...register("password")}
                />
                {errors.password && <span>Este campo es Requerido</span>}
              </div>
            </div>

            <div className="pt-5 flex items-center justify-center md:items-start md:justify-start">
              <button className="p-5 w-3xl bg-azul rounded-lg text-white font-bold uppercase hover:bg-azulfuerte">
                Crear Empleado
              </button>
            </div>
          </form>
        </div>
      </LayoutSistema>
    </div>
  );
};

export default page;
