"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { useForm } from "react-hook-form";
import { getYear } from "date-fns";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import LayoutSistema from "@/app/SistemaWeb/layoutSistema";

const page = ({ params }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [empleado, setEmpleado] = useState(null);

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

        setValue("nombre", response.data.nombre);
        setValue("apellido", response.data.apellido);
        setValue("sucursal", response.data.sucursalId);
        setValue("rol", response.data.rol);
        setValue("cedula", response.data.cedula);
        setValue("mail", response.data.mail);
        setValue("password", response.data.password);
        // setValue("nombre",response.data.nombre)
      } catch (error) {
        console.error("Error al obtener el Empleado:", error);
        setLoading(false);
        throw error; // Lanza el error para que sea manejado por el código que llama a esta función
      }
    };
    fecthEmpleado();
  }, [params.id]);
  console.log("Empleado:  ", empleado);

  const {
    register,
    control,
    setValue,
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

      const response = await axios.patch(
        `http://localhost:3000/api/empleado/${params.id}`,
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
      response.status === 200 ? (funca = true) : (funca = false);
    } catch (error) {
      console.error("Error al realizar la petición patch:", error);
    }
    funca
      ? Swal.fire({
          position: "center",
          icon: "success",
          title: "Empleado Actualizado Con Exito",
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
      router.push(`/SistemaWeb/empleados/infoEmpleado/${params.id}`);
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

  return (
    <div>
      <LayoutSistema>
        {loading ? (
          <div>Cargando...</div>
        ) : empleado ? (
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
                  Editar Empleado
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            No se Encontraron datos para el Empleado con ID: {params.id}
          </div>
        )}
      </LayoutSistema>
    </div>
  );
};

export default page;
