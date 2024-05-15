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
      console.log("Datos Que se estan Enviando: ", {
        matricula: datosTransformados.matricula,
        padron: datosTransformados.padron,
        codigoNacional: datosTransformados.codigoNacional,
        divNum: datosTransformados.divNum,
        marca: datosTransformados.marca,
        modelo: datosTransformados.modelo,
        anio: datosTransformados.anio,
        kilometros: datosTransformados.kilometros,
        color: datosTransformados.color,
        tipo: datosTransformados.tipo,
        combustible: datosTransformados.combustible,
        numeroMotor: datosTransformados.numeroMotor,
        numeroChasis: datosTransformados.numeroChasis,
        ciRut: datosTransformados.ciRut,
        empadronado: datosTransformados.empadronado,
        emitido: datosTransformados.emitido,
      });
      const response = await axios.post("http://localhost:3000/api/vehiculo/", {
        matricula: datosTransformados.matricula,
        padron: datosTransformados.padron,
        codigoNacional: datosTransformados.codigoNacional,
        divNum: datosTransformados.divNum,
        marca: datosTransformados.marca,
        modelo: datosTransformados.modelo,
        anio: datosTransformados.anio,
        kilometros: datosTransformados.kilometros,
        color: datosTransformados.color,
        tipo: datosTransformados.tipo,
        combustible: datosTransformados.combustible,
        numeroMotor: datosTransformados.numeroMotor,
        numeroChasis: datosTransformados.numeroChasis,
        ciRut: datosTransformados.ciRut,
        empadronado: datosTransformados.empadronado,
        emitido: datosTransformados.emitido,
      });

      console.log("Respuesta del servidor:", response.data);
      response.status === 201 ? (funca = true) : (funca = false);
    } catch (error) {
      console.error("Error al realizar la petición POST:", error);
    }

    funca
      ? Swal.fire({
          position: "center",
          icon: "success",
          title: "Vehículo Ingresado Con Exito",
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
      router.push("/SistemaWeb/vehiculos/");
    }, 2000);
  };

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

  const handleIngresarVehiculo = () => {};

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
                <label htmlFor="matricula">Matricula</label>
                <input
                  className="p-3 rounded-md"
                  placeholder="Ingresar Matricula"
                  type="text"
                  id="matricula"
                  required={true}
                  {...register("matricula")}
                />
                {errors.matricula && <span>Este campo es Requerido</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="Marca">Marca</label>

                <select
                  className="p-3 rounded-md"
                  id="Marca"
                  required={true}
                  {...register("marca")}
                >
                  {marcas.map((marca, index) => (
                    <option key={index} value={marca}>
                      {marca}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="Modelo">Modelo</label>
                <input
                  className="p-3 rounded-md"
                  placeholder="Ingresar Modelo"
                  type="text"
                  id="Modelo"
                  required={true}
                  {...register("modelo")}
                />
                {errors.modelo && <span>Este campo es Requerido</span>}
              </div>
              <div className="flex flex-col">
                <label htmlFor="Tipo">Tipo</label>
                <input
                  className="p-3 rounded-md"
                  placeholder="Ingresar Tipo"
                  type="text"
                  id="Tipo"
                  required={true}
                  {...register("tipo")}
                />
                {errors.tipo && <span>Este campo es Requerido</span>}
              </div>
            </div>
            <div className="flex pt-5 flex-col md:flex-row gap-10 px-3 md:px-0">
              <div className="flex flex-col">
                <label htmlFor="Año">Año</label>
                <input
                  className="p-3 rounded-md"
                  placeholder="Ingresar Año"
                  type="number"
                  minLength={4}
                  min={2010}
                  max={getYear(new Date())}
                  id="Año"
                  required={true}
                  {...register("anio")}
                />
                {errors.anio && <span>Este campo es Requerido</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="Color">Color</label>
                <select
                  className="p-3 rounded-md"
                  placeholder="Ingresar Color"
                  type="text"
                  id="Color"
                  required={true}
                  {...register("color")}
                >
                  {colores.map((color, index) => (
                    <option key={index} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
                {errors.color && <span>Este campo es Requerido</span>}
              </div>
              <div className="flex flex-col">
                <label htmlFor="Kilometros">Kilometros</label>
                <input
                  className="p-3 rounded-md"
                  placeholder="Ingresar Kilometros"
                  type="number"
                  id="Kilometros"
                  required={true}
                  {...register("kilometros")}
                />
                {errors.kilometros && <span>Este campo es Requerido</span>}
              </div>
            </div>

            <div className="pt-10">
              <h3 className="h3">Datos Opcionales</h3>
            </div>
            <div className="flex flex-col md:flex-row gap-10 px-3 md:px-0">
              <div className="flex flex-col">
                <label htmlFor="Padron">Padron</label>
                <input
                  className="p-3 rounded-md"
                  placeholder="Ingresar Padron"
                  type="text"
                  id="Padron"
                  required={false}
                  {...register("padron")}
                />
                {errors.padron && <span>Este campo es Requerido</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="CodigoNacional">Codigo Nacional</label>
                <input
                  className="p-3 rounded-md"
                  placeholder="Ingresar CodigoNacional"
                  type="text"
                  id="CodigoNacional"
                  required={false}
                  {...register("codigoNacional")}
                />
                {errors.codigoNacional && <span>Este campo es Requerido</span>}
              </div>
              <div className="flex flex-col">
                <label htmlFor="divNum">Div Num</label>
                <input
                  className="p-3 rounded-md"
                  placeholder="Ingresar divNum"
                  type="text"
                  id="divNum"
                  required={false}
                  {...register("divNum")}
                />
                {errors.divNum && <span>Algo salio mal</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="ciRut">ciRut</label>
                <input
                  className="p-3 rounded-md"
                  placeholder="Ingresar ciRut"
                  type="text"
                  id="ciRut"
                  required={false}
                  {...register("ciRut")}
                />
                {errors.ciRut && <span>Algo salio mal</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="Combustible">Combustible</label>
                <select
                  className="p-3 rounded-md"
                  placeholder="Ingresar Combustible"
                  type="text"
                  id="Combustible"
                  required={false}
                  {...register("combustible")}
                >
                  <option value={"nafta"}>Nafta</option>
                  <option value={"diesel"}>Diesel</option>
                </select>
                {errors.combustible && <span>Este campo es Requerido</span>}
              </div>
            </div>
            <div className="flex pt-5 flex-col md:flex-row gap-10 px-3 md:px-0">
              <div className="flex flex-col">
                <label htmlFor="numeroMotor">Número Motor</label>
                <input
                  className="p-3 rounded-md"
                  placeholder="Ingresar numeroMotor"
                  type="text"
                  id="numeroMotor"
                  required={false}
                  {...register("numeroMotor")}
                />
                {errors.numeroMotor && <span>Este campo es Requerido</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="numeroChasis">Número Chasis</label>
                <input
                  className="p-3 rounded-md"
                  placeholder="Ingresar numeroChasis"
                  type="text"
                  id="numeroChasis"
                  required={false}
                  {...register("numeroChasis")}
                />
                {errors.numeroChasis && <span>Este campo es Requerido</span>}
              </div>
              <div className="flex flex-col">
                <label htmlFor="divNum">Empadronado</label>
                <input
                  className="p-3 rounded-md"
                  placeholder="Ingresar Fecha Empadronado"
                  type="date"
                  id="divNum"
                  required={false}
                  {...register("empadronado")}
                />
                {errors.empadronado && <span>Algo salio mal</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="emitido">Emitido</label>
                <input
                  className="p-3 rounded-md"
                  placeholder="Ingresar emitido"
                  type="date"
                  id="emitido"
                  required={false}
                  {...register("emitido")}
                />
                {errors.emitido && <span>Algo salio mal</span>}
              </div>
            </div>

            <div className="pt-5 flex items-center justify-center md:items-start md:justify-start">
              <button className="p-5 w-3xl bg-azul rounded-lg text-white font-bold uppercase hover:bg-azulfuerte">
                Crear Vehículo
              </button>
            </div>
          </form>
        </div>
      </LayoutSistema>
    </div>
  );
};

export default page;
