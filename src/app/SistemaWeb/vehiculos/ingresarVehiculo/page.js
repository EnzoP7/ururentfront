"use client";
import React from "react";
import LayoutSistema from "../../layoutSistema";
import { useForm } from "react-hook-form";
import { getYear } from "date-fns";

const page = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Datos Que se estan Enviando: ", data);
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
                  {...register("Marca")}
                >
                  <option selected>Selecciona Marca</option>
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
                  {...register("Modelo")}
                />
                {errors.Modelo && <span>Este campo es Requerido</span>}
              </div>
              <div className="flex flex-col">
                <label htmlFor="Tipo">Tipo</label>
                <input
                  className="p-3 rounded-md"
                  placeholder="Ingresar Tipo"
                  type="text"
                  id="Tipo"
                  required={true}
                  {...register("Tipo")}
                />
                {errors.Tipo && <span>Este campo es Requerido</span>}
              </div>

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
                  {...register("Año")}
                />
                {errors.Año && <span>Este campo es Requerido</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="Color">Color</label>
                <select
                  className="p-3 rounded-md"
                  placeholder="Ingresar Color"
                  type="text"
                  id="Color"
                  required={true}
                  {...register("Color")}
                >
                  {colores.map((color, index) => (
                    <option key={index} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
                {errors.Color && <span>Este campo es Requerido</span>}
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
                  {...register("Padron")}
                />
                {errors.Padron && <span>Este campo es Requerido</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="CodigoNacional">Codigo Nacional</label>
                <input
                  className="p-3 rounded-md"
                  placeholder="Ingresar CodigoNacional"
                  type="text"
                  id="CodigoNacional"
                  required={false}
                  {...register("CodigoNacional")}
                />
                {errors.CodigoNacional && <span>Este campo es Requerido</span>}
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
                  {...register("Combustible")}
                >
                  <option value={"nafta"}>Nafta</option>
                  <option value={"diesel"}>Diesel</option>
                </select>
                {errors.Combustible && <span>Este campo es Requerido</span>}
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
