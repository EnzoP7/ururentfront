import React, { memo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";

// Cargar componentes pesados dinámicamente
const SecondHeader = dynamic(() => import("./SecondHeader"));
const LocationSelection = dynamic(() => import("./LocationSelection"));
const DateSelection = dynamic(() => import("./DateSelection"));
const HoursSelection = dynamic(() => import("./HoursSelection"));
const InfoPersonal = dynamic(() => import("./InfoPersonal"));
const IniciarReserva = dynamic(() => import("./IniciarReserva"));

// Usar memo para evitar renders innecesarios
const InfoCar = memo(({ car }) => {
  const {
    type,
    name,
    price,
    image,
    pasajeros,
    puertas,
    motor,
    baul,
    combustible,
    rendimiento,
    direccion,
    radio,
    aire_Acondicionado,
  } = car;

  const vehiculoAAlquilar = `Me gustaría contar con el Vehículo: ${name} ${type}`;

  return (
    <>
      <SecondHeader />
      <section className="h-full pb-10 mx-auto px-6 md:px-10 max-w-screen-xl">
        <div className="md:pt-[180px] pt-[130px]">
          <h3 className="text-4xl font-bold">
            {name} {type} O Similar
          </h3>
        </div>

        <div className="flex bg-white gap-x-12 md:flex-row flex-col mt-8 p-3 rounded-lg">
          <div>
            <Image
              className=""
              src={image}
              width={750}
              height={500}
              alt="Imagen Auto"
              priority // Cargar imagen prioritaria
            />
          </div>

          <div className="flex flex-col pt-10 sm:pt-0">
            <div className="  p-8 max-w-2xl mx-auto">
              <h3 className="uppercase text-3xl font-bold mb-4 text-center text-gray-800">
                Descripción del Vehículo
              </h3>
              <h3 className="uppercase text-xl mb-6 text-center text-gray-700">
                Precio por día: U$D {price}
              </h3>
              <ul className="list-disc list-inside space-y-4 text-gray-700">
                <li>
                  <span className="font-semibold">Pasajeros:</span> {pasajeros}
                </li>
                <li>
                  <span className="font-semibold">Puertas:</span> {puertas}
                </li>
                <li>
                  <span className="font-semibold">Baúl:</span> {baul}
                </li>
                <li>
                  <span className="font-semibold">Motor:</span> {motor}
                </li>
                <li>
                  <span className="font-semibold">Combustible:</span>{" "}
                  {combustible}
                </li>
                <li>
                  <span className="font-semibold">Rendimiento:</span>{" "}
                  {rendimiento}
                </li>
                <li>
                  <span className="font-semibold">Dirección:</span> {direccion}
                </li>
                <li>
                  <span className="font-semibold">Radio:</span> {radio}
                </li>
                <li>
                  <span className="font-semibold">Aire Acondicionado:</span>{" "}
                  {aire_Acondicionado}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <IniciarReserva vehiculoAAlquilar={vehiculoAAlquilar} />
      </section>

      <Footer />
    </>
  );
});

export default InfoCar;
