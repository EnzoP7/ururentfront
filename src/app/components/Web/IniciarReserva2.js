"use client";
import React, { useState } from "react";

import HoursSelection from "./HoursSelection";
import { useForm } from "react-hook-form";
import LocationSelection2 from "./LocationSelection2";
import DateSelection2 from "./DateSelection2";
import HoursSelection2 from "./HoursSelection2";
import { Resend } from "resend";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const IniciarReserva2 = () => {
  const router = useRouter();

  const [laLocation, setLaLocation] = useState();
  const [laDateSelection, setlaDateSelection] = useState();
  const [laHora, setLaHora] = useState();
  // const [hour, setHour] = useState("10:00 AM");

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
      console.log("Datos Que se estan Enviando: ", {
        Nombre: datosTransformados.Nombre,
        Teléfono: datosTransformados.Teléfono,
        Email: datosTransformados.Email,
        FechaNac: datosTransformados.FechaNac,
        Mensaje: datosTransformados.Mensaje,
        laLocation,
        laDateSelection,
        dateStart: laDateSelection[0].startDate,
        dateEnd: laDateSelection[0].endDate,
        laHora,
      });
      const response = await axios.post("/api/send-email", {
        ...datosTransformados,
        laLocation,
        laDateSelection,
        laHora,
        vehiculoAAlquilar: "Indefinido",
      });
      const result = await response.data;
      console.log(result);
      console.log("LA RESPONSE STATUS: ", response.status);

      if ((response.status = 200)) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Email Enviado Con Exito",
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
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title:
            "Algo Salio Mal, Contactanos por nuestro Gmail:Info@Ururent.com.uy",
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
      }
      // redireccion
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.error("Error :", error);
    }
  };

  return (
    <div className="pt-8">
      <div className="border-b-2 border-azulfuerte w-full pb-4">
        <h3 className="text-3xl font-bold">Iniciar Reserva Online</h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full mt-5">
          <div className="flex items-center justify-between p-3 bg-white rounded-sm text-azulfuerte shadow-md">
            <div>
              <p>Fecha y Lugar</p>
            </div>
            <div>
              <p>Paso 1/2</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-5 gap-4">
            <LocationSelection2 setLaLocation={setLaLocation} />
            <DateSelection2 setlaDateSelection={setlaDateSelection} />
            <HoursSelection2 setLaHora={setLaHora} />
          </div>

          <div className="flex items-center justify-between p-3 mt-5 bg-white rounded-sm text-azulfuerte shadow-md">
            <div>
              <p>Información Personal</p>
            </div>
            <div>
              <p>Paso 2/2</p>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex flex-col md:flex-row md:justify-between gap-8">
              <div className="flex flex-col w-full md:w-1/2">
                <div className="flex flex-col pt-5">
                  <label>Nombre Completo</label>
                  <input
                    type="text"
                    placeholder="Nombre Completo"
                    {...register("Nombre")}
                    className="p-3 bg-white text-azulfuerte"
                  />
                </div>
                <div className="flex flex-col pt-5">
                  <label>Teléfono / Celular</label>
                  <input
                    type="tel"
                    placeholder="Teléfono/Celular"
                    {...register("Teléfono")}
                    className="p-3 bg-white text-azulfuerte"
                  />
                </div>
                <div className="flex flex-col pt-5">
                  <label>E-mail</label>
                  <input
                    type="email"
                    placeholder="E-mail"
                    {...register("Email")}
                    className="p-3 bg-white text-azulfuerte"
                  />
                </div>
                <div className="flex flex-col pt-5">
                  <label>Fecha de Nacimiento</label>
                  <input
                    type="date"
                    placeholder="Fecha Nacimiento"
                    {...register("FechaNac")}
                    className="p-3 bg-white text-azulfuerte"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full md:w-1/2 pt-5 md:pt-0">
                <label>Mensaje</label>
                <textarea
                  placeholder="Escriba su mensaje aquí"
                  {...register("Mensaje")}
                  className="p-3 bg-white text-azulfuerte h-full"
                  rows="8"
                />
              </div>
            </div>
          </div>

          <div className="pt-5 pb-10 md:pb-0 w-fit mx-auto">
            <button className="btn btn-sm bg-azulfuerte p-3 text-white rounded-md shadow-md hover:bg-azulfuerte-dark transition duration-200">
              Solicitar Reserva
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default IniciarReserva2;
