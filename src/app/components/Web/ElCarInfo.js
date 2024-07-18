import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Image from "next/image";
import SecondHeader from "./SecondHeader";
import LocationSelection from "./LocationSelection";
import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";
import InfoPersonal from "./InfoPersonal";
import IniciarReserva from "./IniciarReserva";

const ElCarInfo = ({ car }) => {
  console.log({ car });
  const {
    type,
    name,
    price,
    starts,
    image,
    info,
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

  const vehiculoAAlquilar = `Me gustaria contar con el Vehciulo: ${name} ${type}`;

  console.log(
    type,
    name,
    price,
    starts,
    image,
    info,
    pasajeros,
    puertas,
    motor,
    baul,
    combustible,
    rendimiento,
    direccion,
    radio,
    aire_Acondicionado
  );
  return (
    <>
      <SecondHeader />
      <section className="h-full pb-10 mx-auto px-6 md:px-10 max-w-screen-xl">
        <div className="md:pt-[180px] pt-[130px]">
          <h3 className="text-4xl font-bold">
            {name} {type} O Similar
          </h3>
        </div>

        <div className="flex gap-x-12 md:flex-row flex-col mt-8">
          <div>
            <Image
              className="rounded-lg shadow-lg"
              src={image}
              width={750}
              height={500}
              alt="Imagen Auto"
            />
          </div>
          {/* <div className="flex flex-col pt-10">
            <div>
              <h3 className="uppercase text-2xl font-bold">
                Descripción del Vehículo
              </h3>
              <h3 className="uppercase pt-3 text-lg">
                Precio por día: U$D {price}
              </h3>
              <ul className="gap-3 mt-4 space-y-3 text-lg">
                <li>Pasajeros: {pasajeros}</li>
                <li>Puertas: {puertas}</li>
                <li>Baúl: {baul}</li>
                <li>Motor: {motor}</li>
                <li>Combustible: {combustible}</li>
                <li>Rendimiento: {rendimiento}</li>
                <li>Dirección: {direccion}</li>
                <li>Radio: {radio}</li>
                <li>Aire Acondicionado: {aire_Acondicionado}</li>
              </ul>
            </div>
          </div> */}

          <div className="flex flex-col pt-10 sm:pt-0">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
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

        {/* <div className="pt-8">
          <div className="border-b-2 border-azulfuerte w-full pb-4">
            <h3 className="text-3xl font-bold">Iniciar Reserva Online</h3>
          </div>
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
              <LocationSelection />
              <DateSelection />
              <HoursSelection />
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
              <InfoPersonal />
            </div>

            <div className="pt-5 pb-10 md:pb-0 w-fit mx-auto">
              <button className="btn btn-sm bg-azulfuerte p-3 text-white rounded-md shadow-md hover:bg-azulfuerte-dark transition duration-200">
                Solicitar Reserva
              </button>
            </div>
          </div>
        </div> */}

        <IniciarReserva vehiculoAAlquilar={vehiculoAAlquilar} />
      </section>

      <Footer />
    </>
  );
};

export default ElCarInfo;
